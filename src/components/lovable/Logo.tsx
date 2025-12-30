import logo from "@/assets/integria-logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const Logo = ({ className = "", size = "md", variant = "dark" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-14",
    md: "h-20",
    lg: "h-28",
  };

  return (
    <img
      src={logo}
      alt="Integria Digital"
      className={`${sizeClasses[size]} w-auto transition-all duration-300 ${
        variant === "light" ? "brightness-0 invert" : ""
      } ${className}`}
    />
  );
};

export default Logo;