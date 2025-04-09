import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Team() {
    return (
        <div className="flex relative h-30">
            <Link
                href='https://www.linkedin.com/in/leo-trux/'
                className="absolute z-40 rounded-[100px] cursor-pointer transition duration-300 ease-in-out hover:border-[var(--main-color)] border-2 border-[#e1e5ea]"
            >
                <Image
                    src='/images/leotrux.jpg'
                    alt='Léo Trux'
                    width={100}
                    height={100}
                    className="w-30 h-30 rounded-[100px]"
                >
                </Image>
            </Link>
            <Link
                href='https://www.linkedin.com/in/kilianpeyron/'
                className="absolute z-30 left-25 rounded-[100px] cursor-pointer transition duration-300 ease-in-out hover:border-[var(--main-color)] border-2 border-[#e1e5ea]"
            >
                <Image
                    src='/images/kilianpeyron.jpg'
                    alt='Léo Trux'
                    width={100}
                    height={100}
                    className="w-30 h-30 rounded-[100px]"
                >
                </Image>
            </Link>
            <Link
                href='https://www.linkedin.com/in/aiman-manchout/'
                className="absolute z-20 rounded-[100px] left-50 cursor-pointer transition duration-300 ease-in-out hover:border-[var(--main-color)] border-2 border-[#e1e5ea]"
            >
                <Image
                    src='/images/aimanmanchout.jpg'
                    alt='Léo Trux'
                    width={100}
                    height={100}
                    className="w-30 h-30 rounded-[100px]"
                >
                </Image>
            </Link>
        </div>
    )
}