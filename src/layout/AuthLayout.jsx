import LoginForm from "../features/auth/components/LoginForm";

const AuthLayout = ({ children }) => {
  return (
    <div className ="grid grid-cols-2 min-h-screen min-w-full">
      {/* Logo Section - Left Side */}
      <div className = "">
        
      </div>

      {/* Login Section - Right Side */}
      <div className="">
        <div>Welcome Back</div>
      </div>
    </div>
  );
};
export default AuthLayout;
