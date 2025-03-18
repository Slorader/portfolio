import Card from "@/components/ui/card";
import { getI18n } from "@/locales/server";

const rguImage = {
    src: "/images/RGU.jpg",
    alt: "RGU",
    width: 100,
    height: 10,
    className: "w-12 h-12",
};

const lyonImage = {
    src: "/images/UCBL-logo.png",
    alt: "Lyon",
    width: 70,
    height: 20,
    className: "",
};

export default async function Career() {
    const t = await getI18n();

    return (
        <>
            <section className="mb-10">
                <h2 className="font-bold text-2xl mb-3">{t("career.title")}</h2>
                <Card
                    label={t("career.ccsd.label")}
                    link="https://www.ccsd.cnrs.fr/"
                    title={t("career.ccsd.title")}
                    image={null}
                    organisation={t("career.ccsd.organisation")}
                    date={t("career.ccsd.date")}
                    localisation={t("career.ccsd.location")}
                    description={t("career.ccsd.description")}
                />
                <Card
                    label={t("career.rgu.label")}
                    link="https://www.rgu.ac.uk/"
                    title={t("career.rgu.title")}
                    image={rguImage}
                    organisation={t("career.rgu.organisation")}
                    date={t("career.rgu.date")}
                    localisation={t("career.rgu.location")}
                    description={t("career.rgu.description")}
                />
            </section>
            <section className="mb-10">
                <h2 className="font-bold text-2xl mb-3">{t("studies.title")}</h2>
                <Card
                    label={t("studies.lyon.label")}
                    link="https://www.univ-lyon1.fr/"
                    title={t("studies.lyon.title")}
                    image={lyonImage}
                    organisation={t("studies.lyon.organisation")}
                    date={t("studies.lyon.date")}
                    localisation={t("studies.lyon.location")}
                    description={null}
                />
            </section>
        </>
    );
}
