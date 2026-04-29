import LoginForm from "../features/auth/components/LoginForm";
import "../App.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      {/* Logo Section - Left Side */}
      <div className="logo-section">
        <div className="bg-circle bg1" />
        <div className="bg-circle bg2" />

        <div className="Logo">
          <div className="Logo-icon">🦷</div>
          {/* <div className="Logo-text flex flex-col items-start">
            <h1 className="Logo-text-main">DentPro</h1>
            <p>Your Dental Care Partner</p>
          </div> */}
          <div className="Lg-text">
            <div className="Lg-text-main">Dent Pro</div>
            <p>Your Dental Care Partner</p>
          </div>
        </div>
        <div className="lg-Content">
          <h2>
            Simplifying <em> Dental Practice </em> Management
          </h2>
          <p>
            A centralized platform for managing multiple dental clinics with
            complete data isolation, role-based access, and real-time insights.
          </p>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Multi-clinic tenant isolation</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Role-based permissions engine</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>JWT + Refresh token security</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Real-time appointment scheduling</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Integrated billing & analytics</span>
            </div>
          </div>
        </div>
        <div className="auth-footer">
            <div className="stat">
              <div className="stat-num">1000+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Dental Clinics</div>
            </div>
            <div className="stat">
              <div className="stat-num">100+</div>
              <div className="stat-label">Happy Dentists</div>
            </div>
        </div>
        <div className="bg-circle bg3" />
        <div className="bg-circle bg4" />
      </div>

      {/* Login Section - Right Side */}
      <div className="auth-right">
        <div className="form-card">
          <div className="form-header">
            <div className="welcome-row">
              <h2>Welcome back</h2>
              <span className="wave">👋</span>
            </div>
            <p>Sign in to your DentalCare Pro account</p>
          </div>
          <div className="role-label">Signing in as</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
