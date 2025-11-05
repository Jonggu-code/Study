type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  variant = "primary",
  children,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-[var(--radius)] font-medium transition-colors";

  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700",
    secondary: "bg-secondary text-white hover:bg-slate-600",
    outline: "border border-gray-300 text-text hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
