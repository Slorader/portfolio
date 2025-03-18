import Contact from "@/components/layout/contact";

export default function Footer() {
    return (
        <div className="flex flex-col w-full mt-20">
            <span className="w-full h-[1px] bg-[#e1e5ea]"></span>
            <span className="text-5xl bold font-bold mt-10 mb-5">Let&#39;s collaborate !</span>
            <span className="text-[var(--gray)] mb-10">You can contact me by email by filling this form.</span>
            <Contact/>
            <div className="relative flex items-center w-full mt-20 mb-5 gap-2">
                <span className="text-[var(--gray)]">&#x00AE; 2025 - Léo Trux.</span>
                <span className="text-[var(--gray)]">Developed with NextJS, deployed with Vercel.</span>
            </div>
        </div>
    );
}