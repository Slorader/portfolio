"use client";
import {FaArrowUp} from "react-icons/fa6";
import {useEffect, useState} from 'react'

export default function Scroll() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleSroll = () => {
            setIsVisible(window.scrollY > 100);
        }
        window.addEventListener("scroll", handleSroll);
    }, [isVisible]);

    return (
        <div
            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
            className={`fixed bottom-5 right-10 w-10 h-10 flex items-center justify-center rounded-[20px] text-white bg-[var(--main-color)] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
            <FaArrowUp fontSize={15}/>
        </div>
    );
}