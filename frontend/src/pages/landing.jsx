import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <Link to="/" className="landing-logo">
          <span className="logo-icon">₹</span>
          Expense<span>Flow</span>
        </Link>

        <div className="landing-nav-links">
          <a href="#features">Features</a>
          <Link to="/login" className="nav-login">
            Login
          </Link>
          <Link to="/register" className="nav-signup">
            Get Started
          </Link>
        </div>
      </nav>

      <main>
        <section className="landing-hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✦</span> Take control of your finances
            </div>

            <h1>
              Spend smarter.
              <br />
              Live <span>better.</span>
            </h1>

            <p className="hero-description">
              Track your expenses, understand your spending habits, and make
              every rupee count. Your money, your control.
            </p>

            <div className="hero-actions">
              <Link to="/register" className="hero-primary-btn">
                Start Tracking Free <span>→</span>
              </Link>
              <Link to="/login" className="hero-secondary-btn">
                I have an account
              </Link>
            </div>

            <div className="hero-note">
              <span>✓</span> Simple to use
              <span>✓</span> Your personal expense dashboard
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orb orb-one"></div>
            <div className="visual-orb orb-two"></div>

            <div className="preview-card">
              <div className="preview-header">
                <div>
                  <p className="preview-label">Total expenses</p>
                  <h2>₹12,450</h2>
                </div>
                <div className="preview-icon">↗</div>
              </div>

              <div className="preview-chart">
                <div style={{ height: "38%" }}></div>
                <div style={{ height: "58%" }}></div>
                <div style={{ height: "45%" }}></div>
                <div style={{ height: "75%" }}></div>
                <div style={{ height: "55%" }}></div>
                <div style={{ height: "90%" }}></div>
                <div style={{ height: "68%" }}></div>
                <div style={{ height: "100%" }}></div>
                <div style={{ height: "72%" }}></div>
                <div style={{ height: "84%" }}></div>
              </div>

              <div className="chart-labels">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>

              <div className="preview-divider"></div>

              <div className="preview-expense">
                <div className="expense-icon food-icon">🍽️</div>
                <div className="preview-expense-info">
                  <strong>Food & Dining</strong>
                  <span>Today's spending</span>
                </div>
                <strong>₹450</strong>
              </div>

              <div className="preview-expense">
                <div className="expense-icon travel-icon">🚗</div>
                <div className="preview-expense-info">
                  <strong>Transport</strong>
                  <span>Yesterday</span>
                </div>
                <strong>₹180</strong>
              </div>
            </div>

            <div className="floating-note">
              <span className="floating-check">✓</span>
              <div>
                <strong>Stay in control</strong>
                <p>Every rupee, accounted for.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="section-eyebrow">MADE FOR YOUR MONEY</span>
            <h2>Everything you need to spend wisely.</h2>
            <p>A simpler way to understand where your money goes.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon feature-purple">₹</div>
              <h3>Track every expense</h3>
              <p>
                Record your daily spending and keep all your expenses organized
                in one place.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon feature-green">↗</div>
              <h3>Understand your spending</h3>
              <p>
                View monthly totals and category-wise spending through your
                personal dashboard.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon feature-orange">◷</div>
              <h3>Stay organized</h3>
              <p>
                Review recent expenses and keep track of your spending history.
              </p>
            </article>
          </div>
        </section>

        <section className="landing-cta">
          <h2>Your money deserves a plan.</h2>
          <p>Start building better spending habits today.</p>
          <Link to="/register" className="hero-primary-btn">
            Get Started for Free →
          </Link>
        </section>
      </main>

      <footer className="landing-footer">
        <Link to="/" className="landing-logo">
          <span className="logo-icon">₹</span>
          Expense<span>Flow</span>
        </Link>
        <p>Made to help you manage money better.</p>
      </footer>
    </div>
  );
}

export default Landing;
