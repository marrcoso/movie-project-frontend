import React from "react";

interface LabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Label: React.FC<LabelProps> = ({label, ...props}) => {
    return (
        <div className="flex justify-center p-4">
            {label && <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>}
        </div>
    );
};

export default Label;