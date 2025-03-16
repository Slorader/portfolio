import Button from "@/components/button/page";
import {MdLightMode} from "react-icons/md";

export default function Footer() {
    return (
        <div className="flex flex-col w-full mt-20">
            <span className="w-full h-[1px] bg-[#e1e5ea]"></span>
            <span className="text-5xl bold font-bold mt-10">Let&#39;s collaborate !</span>
            <div className="flex flex-row w-full">
                <Button label="Mail" icon="mail" link="/???"/>
            </div>
            <div className="relative flex items-center w-full mt-20 mb-5 gap-2">
                <span className="text-[var(--gray)]">&#x00AE; 2025 - Léo Trux.</span>
                <span className="text-[var(--gray)]">Developpe with NextJS, deploy with Vercel.</span>
                <MdLightMode fontSize={40} className="active:scale-95 transition duration-100 ease-in-out absolute right-0 rounded-[10px] border-2 border-solid p-2 cursor-pointer" />
            </div>
        </div>
    );
}