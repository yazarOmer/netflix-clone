interface InputProps {
  label: string;
  name: string;
  id: string;
}

export const Input = ({ label, name, id }: InputProps) => {
  return (
    <div className="relative">
      <input
        className="w-[400px] h-full rounded border border-[rgba(128,128,128,0.7)] bg-[rgba(22,22,22,0.7)] text-base pt-6 px-4 pb-2 text-white font-medium outline-none peer focus:outline-2 focus:outline-white"
        name={name}
        id={id}
      />
      <label
        className="absolute transition-all duration-200 top-1/2 left-4 text-white/50 -translate-y-1/2 peer-focus:text-[10px] peer-focus:top-1/4 "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
