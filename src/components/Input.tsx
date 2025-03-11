
interface InputProps {
  className?: string;
  value: string;
  onChange: (text: string) => void;
  label: string;
  placeholder: string;
}

export default function Input({
  className = "",
  label,
  value,
  onChange,
  placeholder,
  ...props
}: InputProps) {


  return (
    <div
      className="flex flex-col w-full "
      {...props}
    >
      <label className="text-white font-medium text-sm mb-1">{label}</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`bg-white rounded-4xl py-2 px-4 text-sm ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
