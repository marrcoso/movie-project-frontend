import React from "react";
import Label from "@/components/Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
};

const Input: React.FC<InputProps> = ({label, placeholder, value, handleInputChange, name, ...props}) => {
    return (
        <div className="flex justify-center p-4">
            <Label label={label} />
            <input
                type="text"
                name={name}
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