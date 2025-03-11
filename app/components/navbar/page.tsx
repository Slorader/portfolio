



export default function Navbar() {
    return (
        <div className="p-5 mt-4 flex absolute end-10">
            <button className="mr-5 text-lg font-medium font-semibold hover:underline cursor-pointer" style={{color: 'var(--main-color)'}}>FR</button>
            <span className="w-[1px] m-1" style={{background: 'var(--gray)'}}></span>
            <button className="ml-5 text-lg bold hover:underline cursor-pointer" style={{color: 'var(--gray)'}}>EN</button>
        </div>
    );
}

