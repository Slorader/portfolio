"use client";

interface ButtonProps {
    id: string;
    name: string;
    label: string;
}

export default function Button({ id, name, label }: ButtonProps) {
    return (
        <button
            type="submit"
            id={id}
            name={name}
            className="flex items-center bg-red-200 justify-center px-5 h-15"
        >
            {label}
        </button>
    );
}