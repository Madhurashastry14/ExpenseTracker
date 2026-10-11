const authService = require("../services/authServices");
const tokenService = require("./tokenService");

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password.trim()
    ) {
      return res.status(400).json({
        error:
          "Name, valid email, and password of at least 8 characters are required",
      });
    }

    const user = await authService.registerUser(
      name.trim(),
      email.trim().toLowerCase(),
      password,
    );

    return res.status(201).json({
      message: "registration successful",
      user,
    });
  } catch (error) {
    if (error.statusCode === 409) {
      return res.status(409).json({ error: error.message });
    }

    console.error("Registration failed:", error.message);

    return res.status(500).json({
      error: "Unable to register user",
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return res.status(400).json({
        error: "Email and password are required",
      });
    }

    const result = await authService.loginUser(
      email.trim().toLowerCase(),
      password,
    );
    res.Cookie("refreshToken", (await result).refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Lohin successful",
      user: result.user,
      accessToken: result.accessToken,
    });
  } catch (error) {
    if (error.statusCode === 401) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    console.log("failed to login", error.message);
    res.status(500).json({
      error: "Login Failed",
    });
  }
}

async function refresh(req, res) {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        error: "Refresh token missing",
      });
    }

    const result = await authService.refreshAccessToken(refreshToken);
    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      accessToken: result.accessToken,
    });
  } catch (error) {
    if (error.statusCode === 401) {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/api/auth",
      });

      return res.status(401).json({
        error: "Invalid or expired session. Please log in again.",
      });
    }

    console.error("Token refresh failed:", error.message);

    return res.status(500).json({
      error: "Unable to refresh session",
    });
  }
}

async function logout(req, res) {
  try {
    const refreshToken = req.cookies?.refreshToken;
    if (refreshToken) {
      await tokenService.revokeRefreshToken(refreshToken);
    }
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
    });

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout failed:", error.message);
    return res.status(500).json({ error: "Unable to log out" });
  }
}

module.exports = { register, login, refresh, logout };
