import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { JSX } from "react";

interface ButtonProps {
    label: string;
    icon: 'email' | 'linkedin' | 'cv';
}

const iconsStyle = "transition duration-300 ease-in-out group-hover:text-[var(--main-color)]";
const iconsMap: Record<ButtonProps['icon'], JSX.Element> = {
    email: <MdOutlineEmail className={iconsStyle} fontSize={30} />,
    linkedin: <FaLinkedin className={iconsStyle} fontSize={30} />,
    cv: <MdOutlineFileDownload className={iconsStyle} fontSize={30} />,
};

export default function Button({ label, icon }: ButtonProps) {
    const selectedIcon = iconsMap[icon];

    return (
        <div className="group transition duration-300 ease-in-out hover:border-[var(--main-color)] flex items-center p-3 justify-center mt-10 w-45 rounded-[50px] border-2 border-solid border-[#e1e5ea] cursor-pointer mr-5">
            {selectedIcon}
            <span className="ml-3 mt-1 font-semibold transition duration-300 ease-in-out group-hover:text-[var(--main-color)]">
                {label}
            </span>
        </div>
    );
}
