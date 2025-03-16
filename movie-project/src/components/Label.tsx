import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label?: string;
    htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({label, htmlFor, ...props}) => {
    return (
            <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700 mb-1 pl-5" {...props}>{label}</label>
    );
};

export default Label;