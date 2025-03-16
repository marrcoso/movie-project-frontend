import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({placeholder, value, id, onChange, name, ...props}) => {
    return (
        <div className="flex flex-col gap-1 p-4">
            <input
                id={id}
                type="text"
                name={name}
                className={`border rounded-3xl p-3 text-black px-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...props}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default Input;