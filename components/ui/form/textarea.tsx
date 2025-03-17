"use client";
import {IoMdClose} from "react-icons/io";
import React, {ChangeEvent, RefObject, useEffect, useRef, useState} from "react";

interface TextareaProps {
    id: string;
    name: string;
    label: string;
}

export default function Textarea({id, name, label}: TextareaProps) {
    const [hasValue, setHasValue] = useState<boolean>(false);
    const [displayIcon, setDisplayIcon] = useState<boolean>(false);
    const [changeBg, setChangeBg] = useState<boolean>(false);
    const inputRef: RefObject<HTMLTextAreaElement | null> = useRef<HTMLTextAreaElement>(null);

    useEffect((): void => {
        if (inputRef.current && inputRef.current.value !== "") {
            setHasValue(true);
        }

        const handleFocus = () => {
            setChangeBg(true);
            setDisplayIcon(true);
        };
        const handleBlur = () => {
            setChangeBg(false);
            setTimeout(() => setDisplayIcon(false), 100);
        };

        inputRef.current?.addEventListener("focus", handleFocus);
        inputRef.current?.addEventListener("blur", handleBlur);
    }, []);

    function removeValue(): void {
        setHasValue(false);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    return (
        <div className="relative w-full group">
            <textarea ref={inputRef}
                      id={id}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setHasValue(e.target.value !== "")}
                      className="resize-none z-20 relative w-full h-[200px] transition duration-300 ease-in-out border-transparent border-2 border-solid border-[var(--main-color)] focus:border-2 focus:bg-white focus:border-[var(--main-color)] pt-7 pl-4 pr-8 rounded-[10px] outline-none bg-[var(--form-bg)]"
                      name={name}
            />
            <label htmlFor={id}
                   className={`${hasValue ? "top-4 text-xs" : "top-7"} ${changeBg ? "bg-white" : "bg-[var(--form-bg)]"} z-20 w-138 h-7 flex items-center group-focus-within:text-xs group-focus-within:top-4 text-[#5e6a83] absolute left-0 transform -translate-y-1/2 ml-4 transition-all duration-300 ease-in-out`}>{label}</label>
            <IoMdClose fontSize={25}
                       onClick={removeValue}
                       className={` ${displayIcon ? "z-50" : "z-10"} cursor-pointer transition duration-300 ease-in-out group-focus-within:opacity-100 opacity-0 absolute right-3 top-3 font-size text-[#5e6a83]`}
            />
        </div>
    );
}