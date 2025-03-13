import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    value?: string;
    handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
};

const Input: React.FC<InputProps> = ({label, placeholder, value, handleInputChange, ...props}) => {
    return (
        <div className="flex justify-center p-5">
            {label && <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>}
            <input
                type="text"
                className={`border rounded-3xl p-3 text-black px-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...props}
                placeholder={placeholder}
                onChange={handleInputChange}
                value={value}
            />
        </div>
    );
};

export default Input;