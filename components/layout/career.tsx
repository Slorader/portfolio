import Card from "@/components/ui/card";

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
}

export default function Career() {
    return (
        <>
            <section className="mb-10">
                <h2 className="font-bold text-2xl mb-3">Career</h2>
                <Card
                    label="CCSD"
                    link="https://www.ccsd.cnrs.fr/"
                    title='Work-study Developer'
                    image={null}
                    organisation="CCSD"
                    date="2024 - Present"
                    localisation="Lyon, France"
                    description="I&#39;m working on the HALiance project."
                />
                <Card
                    label="RGU"
                    link="https://www.rgu.ac.uk/"
                    title='Student Researcher'
                    image={rguImage}
                    organisation="Robert Gordon University"
                    date="April 2024 - July 2024"
                    localisation="Aberdeen, Scotland"
                    description="I was working on the creation of AI models to automate the argumentative analysis processus."
                />
            </section>
            <section className="mb-10">
                <h2 className="font-bold text-2xl mb-3">Studies</h2>
                <Card
                    label="LYON"
                    link="https://www.univ-lyon1.fr/"
                    title='Bachelor’s degree in Computer Science'
                    image={lyonImage}
                    organisation="Claude Bernard Lyon 1 University"
                    date="2022 - 2025"
                    localisation="Bourg-en-Bresse, France"
                    description={null}
                />
            </section>
        </>
    );
}
