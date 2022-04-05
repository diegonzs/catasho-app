import { FC } from "react";
import { ReactNode } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import clsx, { ClassValue } from "clsx";

interface InputProps {
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
  type?: string;
  cb?: () => void;
  inSearchPage?: boolean;
  withSearchIcon?: boolean;
  className?: ClassValue;
}

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  value,
  name,
  cb,
  type = "text",
  withSearchIcon = false,
  className,
}) => {
  return (
    <form
      className={clsx(className)}
      onSubmit={(e) => {
        e.preventDefault();
        cb && cb();
      }}
    >
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1 relative rounded-md shadow-sm h-full">
        {withSearchIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-[4px] h-full"
          placeholder={placeholder}
        />
      </div>
    </form>
  );
};
