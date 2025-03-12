import Lang from "@/app/components/lang/page";
import Navbar from "@/app/components/navbar/page";
import Button from "@/app/components/button/page";

export default function Home() {
  return (
      <>
          <Lang/>
          <Navbar/>
          <div className="mx-80 flex flex-col justify-center">
              <div className="flex flex-row items-center mt-20 mb-5">
                  <div className="flex relative w-[24px] h-[24px]">
                      <span className="absolute top-1/2 transform -translate-y-1/2 inline-flex w-[12px] h-[12px] animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative top-1/2 transform -translate-y-1/2 inline-flex w-[12px] h-[12px] rounded-full bg-green-500"></span>
                  </div>
                  <p className="text-lg text-[var(--gray)] h-[24px]">Available for hire</p>
              </div>
              <div className="flex flex-col text-7xl bold font-bold">
                  <span className="text-7xl bold font-bold">Hey, I'm Léo</span>
                  <div className="flex flex-row">
                      <span className="text-7xl bold font-bold mr-4">a</span>
                      <span className="text-7xl bold font-bold text-[var(--main-color)]">web developer</span>
                  </div>
              </div>
              <div className="flex flex-row w-full">
                  <Button label="Email" icon="email"/>
                  <Button label="Linkedin" icon="linkedin"/>
                  <Button label="CV" icon="cv"/>
              </div>
          </div>
      </>
  );
}
