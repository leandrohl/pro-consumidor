import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string
  label: string;
  placeholder: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, value, onChange, placeholder, errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label className="text-white font-medium text-sm mb-1">{label}</label>
        <input
          ref={ref}
          name={props.name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-white rounded-4xl py-2 px-4 text-sm ${className}`}
          {...props}
        />
        {errorMessage && <span className="text-white text-xs mt-1">{errorMessage}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
