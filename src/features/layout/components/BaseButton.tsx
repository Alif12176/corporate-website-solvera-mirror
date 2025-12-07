interface Props {
  variant?: "default" | "alternative" | "outline";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  classNames?: string
}

export const BaseButton = ({
  variant = "default",
  disabled = false,
  onClick,
  children,
  classNames
}: Props) => {
  const variants = {
    default: " border-2 border-brand-primary bg-brand-primary border-brand-primary bg-brand-primary text-white",
    alternative: "border-2 border-[#C0CAF2] bg-[#C0CAF2] text-[#1C1C1C]",
    outline:
      "border-2 border-brand-primary text-brand-primary bg-[#E7EBFB]",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <div>
      <button className={`rounded-md py-2.5 px-6 cursor-pointer font-medium ${variants[variant]} ${classNames} ${disabled ? disabledClasses : ""}`} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
