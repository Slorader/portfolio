"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed right-10 w-10 h-10 flex items-center justify-center 
        rounded-[2rem] text-white bg-[var(--main-color)] cursor-pointer
        hover:scale-110 active:scale-95 transition-all duration-500 ease-in-out
        ${isVisible ? "bottom-10 opacity-100" : "bottom-[-1rem] opacity-0"}
      `}
        >
            <FaArrowUp fontSize={15} />
        </div>
    );
}
