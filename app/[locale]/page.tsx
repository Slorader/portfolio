import SelectLocale from "@/components/ui/selectLocale";
import Button from "@/components/ui/button";
import Career from "@/components/layout/career";
import Project from "@/components/layout/project";
import { getI18n } from "@/locales/server";
import Footer from "@/components/layout/footer";
import React from "react";

export default async function Home() {
    const t = await getI18n();

    return (
        <>
            <SelectLocale/>
            <div className="flex flex-row items-center mt-20 mb-5">
                <div className="flex relative w-[24px] h-[24px]">
                      <span
                          className="absolute top-1/2 transform -translate-y-1/2 inline-flex w-[12px] h-[12px] animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span
                        className="relative top-1/2 transform -translate-y-1/2 inline-flex w-[12px] h-[12px] rounded-full bg-green-500"></span>
                </div>
                <p className="text-lg text-[var(--gray)] h-[24px]">{t('available_for_hire')}</p>
            </div>
            <div className="flex flex-col text-6xl bold font-bold">
                <span>{t('hello')}</span>
                <div className="flex flex-row">
                    <span className="mr-4">{t('a')}</span>
                    <span className="text-[var(--main-color)]">{t('web_developer')}</span>
                </div>
            </div>
            <div className="flex flex-row w-full">
                <Button label="Github" icon="github" link="https://github.com/Slorader"/>
                <Button label="Linkedin" icon="linkedin" link="https://www.linkedin.com/in/leo-trux/"/>
                <Button label="CV" icon="cv" link="/docs/cv_leo.pdf"/>
            </div>
            <p className="mt-10 text-[var(--gray)]">{t('intro')}</p>
            <p className="mt-4 text-[var(--gray)]">{t('skills')}</p>
            <span className="w-full h-[1px] bg-[#e1e5ea] mt-8 mb-8"></span>
            <Project/>
            <Career/>
            <Footer/>
        </>
    );
}
