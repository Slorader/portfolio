import Card from "@/components/card/page";

const rguImage = {
    src: "/images/RGU.jpg",
    alt: "RGU",
    width: 100,
    height: 10,
    className: "w-12 h-12",
};

export default function Career() {
    return (
        <>
            <h2 className="font-bold text-2xl mb-3">Career</h2>
            <Card
                label="CCSD"
                link="https://www.ccsd.cnrs.fr/"
                title='Work-study Developer'
                image={null}
                organisation="CCSD"
                date="April 2024 - July 2024"
                localisation="Aberdeen, Scotland"
                description="I&#39;m working on the HALiance project."
            />
            <Card
                label="RGU"
                link="https://www.rgu.ac.uk/"
                title='Student Researcher'
                image={rguImage}
                organisation="Robert Gordon University"
                date="2024 - Present"
                localisation="Lyon, France"
                description="I was working on the creation of AI models to automate the argumentative analysis processus."
            />
        </>

    );
}
