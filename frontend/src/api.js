const API_URL = "http://localhost:5000";

export async function apiFetch(path, options = {}) {
  let accessToken = sessionStorage.getItem("accessToken");

  const makeRequest = (token) =>
    fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        ...options.headers,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      credentials: "include",
    });

  let response = await makeRequest(accessToken);

  if (response.status === 401 && path !== "/api/auth/refresh") {
    const refreshResponse = await fetch(`${API_URL}/api/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (!refreshResponse.ok) {
      sessionStorage.removeItem("accessToken");
      window.location.href = "/login";
      throw new Error("Session expired. Please log in again.");
    }

    const data = await refreshResponse.json();

    accessToken = data.accessToken;
    sessionStorage.setItem("accessToken", accessToken);

    response = await makeRequest(accessToken);
  }

  return response;
}

export async function logoutUser() {
  try {
    await fetch(`${API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  } finally {
    sessionStorage.removeItem("accessToken");
    window.location.href = "/login";
  }
}
