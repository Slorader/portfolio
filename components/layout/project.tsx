import Card from "@/components/ui/card";
import { getI18n } from "@/locales/server";

const arguImage = {
    src: "/images/AR_notext.png",
    alt: "Argu Ai",
    width: 50,
    height: 20,
    className: "mb-10",
};

export default async function Project() {
    const t = await getI18n();

    return (
        <section className="mb-10">
            <h2 className="font-bold text-2xl mb-3">{t("projects.title")}</h2>
            <div className="flex flex-row gap-2">
                <Card
                    label={t("projects.argu_ai.label")}
                    link={t("projects.argu_ai.link")}
                    title={t("projects.argu_ai.title")}
                    image={arguImage}
                    organisation={null}
                    date={t("projects.argu_ai.date")}
                    localisation={null}
                    description={t("projects.argu_ai.description")}
                />
            </div>
        </section>
    );
}
