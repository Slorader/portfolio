"use client";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineDashboard } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
    return (
        <div id="navbar" className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col items-center h-auto w-20 rounded-[50px] border-2 border-solid border-[#F3F5F8]">
                <div className="flex z-3 justify-center items-center active w-17 h-17 rounded-[100px] mt-1 cursor-pointer">
                    <MdOutlineDashboard fontSize={30} />
                </div>
                <div className="flex mt-5 justify-center items-center hover:bg-gray-200 transition duration-300 ease-in-out w-17 h-17 rounded-[100px] cursor-pointer">
                    <MdWorkOutline fontSize={30} />
                </div>
                <div className="flex mt-5 mb-1 justify-center items-center hover:bg-gray-200 transition duration-300 ease-in-out w-17 h-17 rounded-[100px] cursor-pointer">
                    <MdOutlineSchool fontSize={30} />
                </div>
            </div>
            <div className="mt-5 flex flex-col items-center h-auto w-20 rounded-[50px] border-2 border-solid border-[#F3F5F8]">
                <div className="flex justify-center items-center hover:bg-gray-200 transition duration-300 ease-in-out w-17 h-17 rounded-[100px] mt-1 cursor-pointer">
                    <SlSocialLinkedin fontSize={30} />
                </div>
                <div className="flex mt-5 mb-1 justify-center items-center hover:bg-gray-200 transition duration-300 ease-in-out w-17 h-17 rounded-[100px] mt-1 cursor-pointer">
                    <MdOutlineEmail fontSize={30} />
                </div>
            </div>
        </div>
    );
}

