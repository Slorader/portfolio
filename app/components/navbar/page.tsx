import Image from 'next/image'
import likedin from '../../../public/images/linkedin.png'

export default function Navbar() {
    return (
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col items-center h-auto w-20 rounded-[50px] border-2 border-solid border-[#F3F5F8]">
                <div className="flex justify-center items-center bg-[var(--main-color)] w-17 h-17 rounded-[100px] mt-1 cursor-pointer">
                    <span className="material-symbols-rounded text-[30px]! text-white">
                        dashboard
                    </span>
                </div>
                <div className="flex mt-5 justify-center items-center w-17 h-17 rounded-[100px] cursor-pointer">
                    <span className="material-symbols-rounded text-[30px]!">
                        work
                    </span>
                </div>
                <div className="flex mt-5 justify-center items-center w-17 h-17 rounded-[100px] cursor-pointer">
                    <span className="material-symbols-rounded text-[30px]!">
                        school
                    </span>
                </div>
                <div className="flex mb-1 mt-5 justify-center items-center w-17 h-17 rounded-[100px] cursor-pointer">
                    <span className="material-symbols-rounded text-[30px]!">
                        mail
                    </span>
                </div>
            </div>
            <div className="mt-5 flex flex-col items-center h-auto w-20 rounded-[50px] border-2 border-solid border-[#F3F5F8]">
                <div className="flex justify-center items-center w-17 h-17 rounded-[100px] mt-1 cursor-pointer">
                    <Image
                        src={likedin}
                        alt="likedin"
                        width={30}
                        height={30}
                    />
                </div>
                <div className="flex mt-5 justify-center items-center w-17 h-17 rounded-[100px] mt-1 cursor-pointer">
                    <span className="material-symbols-rounded text-[30px]!">
                        work
                    </span>
                </div>
            </div>
        </div>
    );
}

