import Card from "@/components/ui/card";
import { getI18n } from "@/locales/server";

const arguImage = {
    src: "/images/AR_notext.png",
    alt: "Argu Ai",
    width: 50,
    height: 20,
};

const leitlearnImage = {
    src: "/images/LeitlearnSocial.png",
    alt: "leitlearn",
    width: 30,
    height: 30,
}

const btpImage = {
    src: "/images/btp_logo.png",
    alt: "btp logo",
    width: 48,
    height: 48,
}

export default async function Project() {
    const t = await getI18n();

    return (
        <section className="mb-10">
            <h2 className="font-bold text-2xl mb-3">{t("projects.title")}</h2>
            <div className="flex flex-col gap-2">
                <Card
                    label="project"
                    link={t("projects.leitlearn.link")}
                    title={t("projects.leitlearn.title")}
                    image={leitlearnImage}
                    organisation={null}
                    date={t("projects.leitlearn.date")}
                    localisation={null}
                    description={t("projects.leitlearn.description")}
                />
                <Card
                    label="project"
                    link={t("projects.btp.link")}
                    title={t("projects.btp.title")}
                    image={btpImage}
                    organisation={null}
                    date={t("projects.btp.date")}
                    localisation={null}
                    description={t("projects.btp.description")}
                />
                <Card
                    label="project"
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
