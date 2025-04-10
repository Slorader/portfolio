"use client";
import {useChangeLocale, useCurrentLocale} from "@/locales/client";

export default function SelectLocale() {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();
    return (
        <div className="p-5 mt-4 flex absolute top-1 end-1">
            <button onClick={() => changeLocale("fr")} className={` ${locale === "fr" ? "font-semibold text-[var(--main-color)]" : "text-[var(--gray)]" } active:scale-95 transition duration-100 ease-in-out mr-5 text-lg  hover:underline cursor-pointer`}>FR</button>
            <span className="w-[1px] m-1 bg-[var(--gray)]"></span>
            <button onClick={() => changeLocale("en")} className={` ${locale === "en" ? "font-semibold text-[var(--main-color)]" : "text-[var(--gray)]" } active:scale-95 ml-5 transition duration-100 ease-in-out mr-5 text-lg  hover:underline cursor-pointer`}>EN</button>
        </div>
    );
}

