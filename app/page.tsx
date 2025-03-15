import Lang from "@/components/lang/page";
import Navbar from "@/components/navbar/page";
import Button from "@/components/button/page";
import Career from "@/components/career/page";
import Project from "@/components/project/page";

export default function Home() {
    return (
        <>
            <Lang/>
            <Navbar/>
            <div className="mx-100 z-2 flex flex-col justify-center">
                <div className="flex flex-row items-center mt-20 mb-5">
                    <div className="flex relative w-[24px] h-[24px]">
                      <span
                          className="absolute top-1/2 transform -translate-y-1/2 inline-flex w-[12px] h-[12px] animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span
                            className="relative top-1/2 transform -translate-y-1/2 inline-flex w-[12px] h-[12px] rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-lg text-[var(--gray)] h-[24px]">Available for hire</p>
                </div>
                <div className="flex flex-col text-7xl bold font-bold">
                    <span className="text-7xl bold font-bold">Hey, I&#39;m Léo</span>
                    <div className="flex flex-row">
                        <span className="text-7xl bold font-bold mr-4">a</span>
                        <span className="text-7xl bold font-bold text-[var(--main-color)]">web developer.</span>
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <Button label="Github" icon="github" link="https://github.com/Slorader"/>
                    <Button label="Linkedin" icon="linkedin" link="https://www.linkedin.com/in/leo-trux/"/>
                    <Button label="CV" icon="cv" link="/docs/cv_leo.pdf"/>
                </div>
                <p className="mt-10 text-[var(--gray)]">My name is Léo TRUX, and I am a web developer from
                    France with a passion for website development. I&#39;m currently in my final year of a computer science
                    degree at Lyon 1 University.</p>
                <p className="mt-4 text-[var(--gray)]">I have a solid experience in PHP,
                    particularly with the Symfony framework. I&#39;m currently broadening my skills by learning Next.js and
                    Docker, to master modern technologies for fullstack development.</p>
                <span className="w-full h-[1px] bg-[#e1e5ea] mt-8 mb-8"></span>
                <Project/>
                <Career/>
            </div>
        </>
    );
}
