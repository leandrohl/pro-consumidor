import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary transition font-dinamica text-3xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
