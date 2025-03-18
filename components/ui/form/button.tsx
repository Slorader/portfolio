interface ButtonProps {
    id: string;
    name: string;
    label: string;
}

export default function Button({ id, name, label }: ButtonProps) {
    return (
        <button
            type="submit"
            id={id}
            name={name}
            className="active:scale-95 w-full transition duration-300 ease-in-out flex items-center cursor-pointer bg-gradient-to-br text-white font-bold from-[#3e31fa] to-[#825df6] rounded-[10px] w-50 justify-center px-5 h-15"
        >
            {label}
        </button>
    );
}