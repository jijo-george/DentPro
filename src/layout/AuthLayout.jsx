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
          <div className="Logo-text flex flex-col items-start">
            <h1 className="Logo-text-main">DentPro</h1>
            <p>Your Dental Care Partner</p>
          </div>
        </div>

        <div className="bg-circle bg3" />
        <div className="bg-circle bg4" />
      </div>

      {/* Login Section - Right Side */}
      <div className="flex items-center justify-center">
        <div>Welcome Back</div>
      </div>
    </div>
  );
};

export default AuthLayout;
