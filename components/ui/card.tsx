import {FaExternalLinkAlt} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import Image from "next/image";
import {JSX} from "react";
import Link from "next/link";

interface CardProps {
    label: string;
    link: string;
    title: string;
    image: {
        src: string,
        alt: string,
        width: number,
        height: number,
    } | null;
    organisation: string | null;
    date: string | null;
    localisation: string | null;
    description: string | null;
}

const className: string = "group-hover:text-[var(--main-color)] transition duration-300 ease-in-out absolute top-3 right-3 text-30";
const iconMap: Record<CardProps['label'], JSX.Element> = {
    project: <FaArrowRight className={className + " group-hover:-rotate-45"} fontSize={15}/>,
};
const getIcon = (label: CardProps['label']) => iconMap[label] ??
    <FaExternalLinkAlt className={className} fontSize={15}/>;

export default function Card({label, link, title, image, organisation, date, localisation, description}: CardProps) {
    return (
        <>
            <Link href={link}
                  className="active:scale-95 relative flex w-full group transition duration-300 ease-in-out hover:border-[var(--main-color)] rounded-[.5rem] border-2 border-solid border-[var(--border-gray)] p-4 mb-5">
                {(image && (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="w-8 h-8 sm:w-12 sm:h-12 rounded-[.5rem]"
                    />

                ))}
                <div className="flex flex-col mx-5 md:mx-8 lg:mx-8">
                    <h3 className="text-base md:text-xl lg:text-xl font-semibold">{title}</h3>
                    {organisation && (<p className="text-xs text-[var(--gray)]">{organisation}</p>)}
                    {date && (<p className="text-xs text-[var(--gray)]">{date}</p>)}
                    {localisation && (<p className="text-xs text-[var(--gray)]">{localisation}</p>)}
                    {description && (<p className="mt-3 text-xs sm:text-base text-[var(--gray)]">{description}</p>)}
                    {getIcon(label)}
                </div>
            </Link>
        </>
    );
}

