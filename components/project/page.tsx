import Card from "@/components/card/page";

const arguImage = {
    src: "/images/AR_notext.png",
    alt: "argu ai",
    width: 50,
    height: 20,
    className: "mb-10",
}

export default function Project() {
    return (
        <section className="mb-10">
            <h2 className="font-bold text-2xl mb-3">Projects</h2>
            <div className="flex flex-row gap-2">
                <Card
                    label="project"
                    link="/project/argu-ai"
                    title='Argu Ai'
                    image={arguImage}
                    organisation={null}
                    date="2024"
                    localisation={null}
                    description="Argu Ai is a platform which help people to understand arguments in texts they give."
                />
            </div>
        </section>
    );
}

