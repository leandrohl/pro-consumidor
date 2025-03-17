import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'primary-outlined'
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  let classNameButton = 'bg-primary text-white hover:bg-primary'

  if (variant === 'primary-outlined') {
    classNameButton = 'bg-transparent text-white border-white border'
  }

  return (
    <button
      type="button"
      className={`px-4 py-2 transition font-dinamica text-2xl cursor-pointer rounded-lg ${classNameButton} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
