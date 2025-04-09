import {FaExternalLinkAlt} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
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
        className: string,
    } | null;
    organisation: string|null;
    date: string|null;
    localisation: string|null;
    description: string|null;
}

const className: string = "group-hover:text-[var(--main-color)] transition duration-300 ease-in-out absolute top-3 right-3 text-30";
const iconMap: Record<CardProps['label'], JSX.Element> = {
    project: <FaArrowRight className={className + " group-hover:-rotate-45"} fontSize={15}/>,
};
const getIcon = (label: CardProps['label']) => iconMap[label] ?? <FaExternalLinkAlt className={className} fontSize={15}/>;

export default function Card({label, link, title, image, organisation, date, localisation, description}: CardProps) {
    return (
        <>
            <Link href={link}
               className="active:scale-95 relative flex w-full group transition duration-300 ease-in-out hover:border-[var(--main-color)] rounded-[.5rem] border-2 border-solid border-[var(--border-gray)] p-4 mb-5">
                {label === 'CCSD' ? (
                    <div>
                        <svg width="80" height="26" viewBox="0 0 167 26" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M135.672 25.5001C138.534 25.5001 140.853 23.1269 140.853 20.1994C140.853 17.2719 138.534 14.8987 135.672 14.8987C132.811 14.8987 130.491 17.2719 130.491 20.1994C130.491 23.1269 132.811 25.5001 135.672 25.5001Z"
                                fill="#FF4600"></path>
                            <path d="M153.23 15.5342H144.095V24.8801H153.23V15.5342Z" fill="#57BEC3"></path>
                            <path
                                d="M164.364 15.5342H159.092L156.457 20.1994L159.092 24.8646H164.364L167 20.1994L164.364 15.5342Z"
                                fill="#D264EB"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0 12.3568V13.3332C0 18.138 2.68134 25.314 14.149 25.314H15.6032C26.783 25.314 29.4643 19.5639 29.4643 15.4876V15.2861H21.693C21.6021 15.9371 20.9356 19.1919 14.9064 19.1919C9.34679 19.1919 7.86221 15.6116 7.86221 12.9923V12.5738C7.86221 9.78395 9.31649 6.52915 14.8761 6.52915C20.9053 6.52915 21.6021 9.75295 21.693 10.3729H29.4643V10.2179C29.4643 5.89368 26.7224 0.5 15.6032 0.5H14.149C2.65104 0.5 0 7.47459 0 12.3568ZM32.8728 12.3568V13.3332C32.8728 18.138 35.5542 25.314 47.0218 25.314H48.4761C59.6558 25.314 62.3372 19.5639 62.3372 15.4876V15.2861H54.5659C54.475 15.9371 53.8084 19.1919 47.7792 19.1919C42.2196 19.1919 40.735 15.6116 40.735 12.9923V12.5738C40.735 9.78395 42.1893 6.52915 47.7489 6.52915C53.7781 6.52915 54.475 9.75295 54.5659 10.3729H62.3372V10.2179C62.3372 5.89368 59.5952 0.5 48.4761 0.5H47.0218C35.5239 0.5 32.8728 7.47459 32.8728 12.3568ZM65.7608 17.239V16.9445H73.9108C74.0017 17.952 74.4108 20.0753 79.0917 20.0753H79.2887C83.8636 20.0753 84.4695 18.7579 84.4695 17.549C84.4695 16.2936 83.7424 15.4101 79.8643 15.3171L76.6376 15.2241C68.427 14.9606 66.0638 11.7678 66.0638 8.04806V7.75358C66.0638 3.78581 68.3361 0.546505 78.3494 0.546505H79.5462C90.4079 0.546505 92.0136 4.48327 92.0136 7.84657V8.11005H83.9999C83.8484 7.10261 83.2425 5.6612 79.0463 5.6612H78.7584C74.744 5.6612 73.926 6.46715 73.926 7.62958C73.926 8.73002 74.7137 9.59797 78.2888 9.69096L81.6064 9.78396C90.3473 10.0474 92.4378 12.8528 92.4378 16.929V17.3165C92.4378 21.0363 90.8017 25.3295 79.6825 25.3295H78.8342C67.0182 25.345 65.7608 20.3078 65.7608 17.239ZM125.311 12.1553C125.311 6.99412 122.493 0.887477 109.935 0.887477H96.9824V24.9265H109.965C122.978 24.9265 125.311 18.4324 125.311 13.1318V12.1553ZM117.448 12.9148C117.448 15.4876 116.721 19.1454 109.268 19.1454H104.526V6.63764H109.268C116.691 6.63764 117.448 10.2334 117.448 12.7133V12.9148Z"
                                  fill="#00005F"></path>
                        </svg>
                    </div>
                ) : (image && (
                        <div className="min-w-[5rem]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className={image.className}
                            />
                        </div>)
                )}
                <div className="flex flex-col mx-8">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    {organisation && (<p className="text-xs text-[var(--gray)]">{organisation}</p>)}
                    {date && (<p className="text-xs text-[var(--gray)]">{date}</p>)}
                    {localisation && (<p className="text-xs text-[var(--gray)]">{localisation}</p>)}
                    {description && (<p className="mt-3 text-s text-[var(--gray)]">{description}</p>)}
                    {getIcon(label)}
                </div>
            </Link>
        </>
    );
}

