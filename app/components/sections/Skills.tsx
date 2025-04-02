import { SkillCategory, SkillItem } from "../../../utils/types";
import Image from "next/image";


function SkillCard({ category, items }: { category: string, items: SkillItem[] }) {
    return <div className="bg-white shadow-lg rounded-2xl p-4 w-full md:max-w-1/3">
        <h2 className="text-xl font-bold mb-3 text-gray-700">{category}</h2>
        <div className="flex flex-wrap gap-4">
            {items.map((item) => (
                <div key={item.name} className="flex items-center bg-gray-100 rounded-lg shadow-md p-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
                    <Image src={item.logo} alt={item.name} width={20} height={20} className="w-6 h-6" />
                    <span key={item.name} className="px-3 py-1 text-gray-600 font-medium">{item.name}</span>
                </div>
            ))}
        </div>
    </div>
}

export default function Skills({ skill, sectionId }: { skill: SkillCategory; sectionId: string }) {
    return (
        <section id={sectionId} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-yellow-50">
            <div className="min-h-screen flex flex-col items-center justify-center py-10">
                <div className="flex flex-row flex-wrap justify-center gap-6 px-4 max-w-5xl">
                    <SkillCard key="packend" category="Programming Language" items={skill.language} />
                    <SkillCard key="backend" category="Backend" items={skill.backend} />
                    <SkillCard key="sackend" category="Frontend" items={skill.frontend} />
                    <SkillCard key="sckend" category="Tools" items={skill.tools} />
                </div>
            </div>
        </section>
    );
}
