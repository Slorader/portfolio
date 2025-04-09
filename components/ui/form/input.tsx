import React, {useState, useEffect} from "react";
import {IoMdClose} from "react-icons/io";

interface InputProps {
    id: string;
    name: string;
    type: string;
    label: string;
    isError: boolean;
    value?: string;
    resetSpecificField: (field: "name" | "message" | "email" ) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({id, name, type, label, isError, value = "", resetSpecificField, onChange, ...register}: InputProps) {
    const [hasValue, setHasValue] = useState<boolean>(value !== "");
    const [inputValue, setInputValue] = useState<string>(value);
    const [displayIcon, setDisplayIcon] = useState<boolean>(false);

    useEffect(() => {
        setHasValue(inputValue !== "");
    }, [inputValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    const handleBlur = () => {
        setTimeout(() => setDisplayIcon(false), 100);
    }

    function removeValue(): void {
        resetSpecificField(id === "name" ? "name" : "email");
        setHasValue(false);
        setInputValue("");
    }

    return (
        <div className="relative w-full h-15 group">
            <input
                id={id}
                value={inputValue}
                onChange={handleChange}
                className={` ${isError ? "border-[var(--form-error)]" : "border-transparent border-[var(--main-color)] "} z-20 relative w-full h-15 transition duration-300 ease-in-out border-2 border-solid focus:border-2 focus:bg-white focus:border-[var(--main-color)] pt-4 pl-4 pr-10 rounded-[.5rem] outline-none bg-[var(--form-bg)]`}
                name={name}
                type={type}
                onFocus={() => setDisplayIcon(true)}
                onBlurCapture={handleBlur}
                {...register}
            />
            <label
                htmlFor={id}
                className={`${hasValue ? "top-4 text-xs" : ""} z-20 group-focus-within:text-xs group-focus-within:top-4 text-[#5e6a83] absolute left-0 top-1/2 transform -translate-y-1/2 pl-4 transition-all duration-300 ease-in-out`}>
                {label}
            </label>
            <IoMdClose fontSize={25}
                       onClick={removeValue}
                       className={` ${displayIcon ? "z-50" : "z-10"} absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5e6a83] cursor-pointer transition duration-300 ease-in-out opacity-0 group-focus-within:opacity-100`}
            />
        </div>
    );
}


