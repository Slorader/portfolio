export default function Lang() {
    return (
        <div className="p-5 mt-4 flex fixed top-1 end-10">
            <button className="active:scale-95 transition duration-100 ease-in-out mr-5 text-lg font-medium font-semibold hover:underline cursor-pointer text-[var(--main-color)]">FR</button>
            <span className="w-[1px] m-1 bg-[var(--gray)]"></span>
            <button className="active:scale-95 transition duration-100 ease-in-out ml-5 text-lg bold hover:underline cursor-pointer text-[var(--gray)]">EN</button>
        </div>
    );
}

