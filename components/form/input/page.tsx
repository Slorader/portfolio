"use client";
import {IoMdClose} from "react-icons/io";
import {RefObject, useEffect, useRef, useState} from "react";

interface InputProps {
    id: string;
    name: string;
    type: string;
    label: string;
}

export default function Input({id, name, type, label}: InputProps) {
    const [hasValue, setHasValue] = useState<boolean>(false);
    const inputRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current && inputRef.current.value !== "") {
            setHasValue(true);
        }
    }, []);

    function removeValue () {
        setHasValue(false);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    return (
        <div className="relative w-1/2 h-15 group">
            <input ref={inputRef}
                   id={id}
                   onChange={(e) => setHasValue(e.target.value !== "")}
                   className="w-full h-15 transition duration-300 ease-in-out border-transparent border-2 border-solid border-[var(--main-color)] focus:border-2 focus:bg-white focus:border-[var(--main-color)] pt-4 pl-4 pr-4 rounded-[10px] outline-none bg-[var(--form-bg)]"
                   name={name}
                   type={type}/>
            <label htmlFor={id}
                   className={`${hasValue ? "top-4 text-xs" : ""} group-focus-within:text-xs group-focus-within:top-4 text-[#5e6a83] absolute left-0 top-1/2 transform -translate-y-1/2 pl-4 transition-all duration-300 ease-in-out`}>{label}</label>
            <IoMdClose fontSize={25}
                       onClick={removeValue}
                       className="cursor-pointer transition duration-300 ease-in-out group-focus-within:opacity-100 opacity-0 absolute right-3 top-1/2 transform -translate-y-1/2 font-size text-[#5e6a83]"
            />
        </div>
    );
}