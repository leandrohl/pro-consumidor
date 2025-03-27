import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "primary-outlined";
  isLoading?: boolean;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  isLoading = false,
  ...props
}: ButtonProps) {
  let classNameButton = "bg-primary text-white hover:bg-primary";

  if (variant === "primary-outlined") {
    classNameButton = "bg-transparent text-white border-white border";
  }

  return (
    <button
      type="button"
      className={`px-4 py-2 transition font-dinamica text-2xl cursor-pointer rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${classNameButton} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin rounded-full border-4 border-white border-t-transparent h-6 w-6"></span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
