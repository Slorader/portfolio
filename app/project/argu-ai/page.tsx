import {FaCircleArrowLeft} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/page";

export default function Page() {
    return (
        <>
            <div className="mx-100 z-2 flex flex-col justify-center">
                <Link href="/" className="flex flex-row items-center mt-20 mb-8 group cursor-pointer">
                    <FaCircleArrowLeft
                        className="group-hover:text-[var(--main-color)] transition duration-300 ease-in-out mr-3"
                        fontSize={20}/>
                    <span
                        className="group-hover:text-[var(--main-color)] transition duration-300 ease-in-out text-lg text-[var(--gray)] h-[24px]">Back
                        to home page</span>
                </Link>
                <div className="flex flex-col text-7xl bold font-bold">
                    <h1 className="text-7xl bold font-bold">Argu Ai</h1>
                </div>
                <p className="mt-10 text-[var(--gray)]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid cum dolorem dolores enim et eum ex exercitationem ipsum labore, molestias quasi quibusdam
                    similique sit tempora ut vel vero voluptas voluptatibus! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Asperiores assumenda expedita sint voluptate? Animi, aspernatur beatae deleniti
                    dolorem eius facere facilis illo nesciunt, nulla numquam officia omnis quasi sit voluptas!
                </p>
                <Image src="/images/AR_white.png" alt="arguailogo" width={1000} height={400}
                       className="bg-[#0f2145] w-full mt-10 p-10 rounded-[20px]"/>
                <div className="flex flex-col mb-10">
                    <li className="mt-10 ml-4 text-[var(--gray)]">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Aliquid cum dolorem dolores enim et eum ex exercitationem ipsum labore, molestias quasi
                        quibusdam
                        similique sit tempora ut vel vero voluptas voluptatibus! Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit. Asperiores assumenda expedita sint voluptate? Animi, aspernatur beatae
                        deleniti
                        dolorem eius facere facilis illo nesciunt, nulla numquam officia omnis quasi sit voluptas!
                    </li>
                    <li className="mt-10 ml-4 text-[var(--gray)]">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Aliquid cum dolorem dolores enim et eum ex exercitationem ipsum labore, molestias quasi
                        quibusdam
                        similique sit tempora ut vel vero voluptas voluptatibus! Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit. Asperiores assumenda expedita sint voluptate? Animi, aspernatur beatae
                        deleniti
                        dolorem eius facere facilis illo nesciunt, nulla numquam officia omnis quasi sit voluptas!
                    </li>
                    <li className="mt-10 ml-4 text-[var(--gray)]">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Aliquid cum dolorem dolores enim et eum ex exercitationem ipsum labore, molestias quasi
                        quibusdam
                        similique sit tempora ut vel vero voluptas voluptatibus! Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit. Asperiores assumenda expedita sint voluptate? Animi, aspernatur beatae
                        deleniti
                        dolorem eius facere facilis illo nesciunt, nulla numquam officia omnis quasi sit voluptas!
                    </li>
                    <li className="mt-10 ml-4 text-[var(--gray)]">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Aliquid cum dolorem dolores enim et eum ex exercitationem ipsum labore, molestias quasi
                        quibusdam
                        similique sit tempora ut vel vero voluptas voluptatibus! Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit. Asperiores assumenda expedita sint voluptate? Animi, aspernatur beatae
                        deleniti
                        dolorem eius facere facilis illo nesciunt, nulla numquam officia omnis quasi sit voluptas!
                    </li>
                </div>
                <Footer/>
            </div>
        </>
    );
}
