import Image from "next/image";

export default function SkillItem(item: { name: string, logo: string }) {
    return (
        <div key={item.name} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-2 w-28">
            <Image src={item.logo} alt={item.name} width={50} height={50} className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-medium text-green-600">{item.name}</h3>
        </div>
    )
}