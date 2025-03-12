import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineFileDownload } from "react-icons/md";
import {JSX} from "react";

interface ButtonProps {
    label: string;
    icon: string;
}
const iconsStyle: string = "transition duration-300 ease-in-out group-hover:text-[var(--main-color)]";
const iconsMap: { [key: string]: JSX.Element } = {
    email: <MdOutlineEmail className={iconsStyle} fontSize={30} />,
    linkedin: <SlSocialLinkedin className={iconsStyle} fontSize={30} />,
    cv: <MdOutlineFileDownload className={iconsStyle} fontSize={30} />,
};

export default function Button({ label, icon }: ButtonProps) {
    const selectedIcons = iconsMap[icon];
    return (
        <div className="group transition duration-300 ease-in-out flex items-center p-3 justify-center mt-10 w-45 rounded-[50px] border-2 border-solid border-[#e1e5ea] cursor-pointer hover:border-[var(--main-color)] mr-5">
            {selectedIcons && (selectedIcons)}
            <span className="ml-3 font-semibold transition duration-300 ease-in-out group-hover:text-[var(--main-color)]">{label}</span>
        </div>
    );
}

