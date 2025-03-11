import Navbar from "@/app/components/navbar/page";

export default function Home() {
  return (
      <>
          <Navbar/>
          <div className="mx-80 flex justify-center">
              <div className="flex flex-col mt-20 text-7xl bold font-bold">
                  <span className="text-7xl bold font-bold">Hey, I'm Léo</span>
                  <div className="flex flex-row">
                      <span className="text-7xl bold font-bold mr-4">a</span>
                      <span className="text-7xl bold font-bold"
                            style={{color: 'var(--main-color)'}}>web developer</span>
                  </div>
              </div>
          </div>
      </>
  );
}
