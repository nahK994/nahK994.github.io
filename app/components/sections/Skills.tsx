import { SkillCategory, SkillInfo, SkillItem } from "../../../content/types";
import Image from "next/image";


export default function Skills({ skill, sectionId, baseCSS, bgColor }: { skill: SkillCategory; sectionId: string, baseCSS: string, bgColor: string }) {
    let skillList: SkillItem[] = [];
    skill.language.items.forEach(element => {
        skillList.push(element);
    });
    skill.backend.items.forEach(element => {
        skillList.push(element);
    });
    skill.frontend.items.forEach(element => {
        skillList.push(element);
    });
    skill.devops.items.forEach(element => {
        skillList.push(element);
    });
    skill.tools.items.forEach(element => {
        skillList.push(element);
    });

    return (
        <section id={sectionId} className={`${baseCSS} ${bgColor}`}>
            <div className="flex flex-wrap gap-4 w-[500px]">
                {skillList.map((item) => (
                    <div key={item.name} className="flex items-center shadow-md bg-white p-4 gap-2 rounded-2xl hover:scale-110 transition-transform duration-200 cursor-pointer">
                        {item.logo && <Image src={item.logo} alt={item.name} width={20} height={20} className="w-6 h-6" />}
                        <span key={item.name} className="text-gray-600 font-medium">{item.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
