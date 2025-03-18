import Contact from "@/components/layout/contact";
import { getI18n } from "@/locales/server";

export default async function Footer() {
    const t = await getI18n();

    return (
        <div className="flex flex-col w-full mt-20">
            <span className="w-full h-[1px] bg-[#e1e5ea]"></span>
            <span className="text-5xl font-bold mt-10 mb-5">
                {t("footer.collaborate")}
            </span>
            <span className="text-[var(--gray)] mb-10">
                {t("footer.contact_info")}
            </span>
            <Contact />
            <div className="relative flex items-center w-full mt-20 mb-5 gap-2">
                <span className="text-[var(--gray)]">{t("footer.copyright")}</span>
                <span className="text-[var(--gray)]">{t("footer.tech_stack")}</span>
            </div>
        </div>
    );
}
