import { SkillCategory } from "../../utils/types";
import SkillItem from "./item/skill-item";

export default function Skills({skill, sectionId}: {skill: SkillCategory; sectionId: string}) {
    return (
        <section id={sectionId} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-yellow-50">
            <div className="flex flex-col gap-8 px-12 py-20">
                <div className="flex flex-row flex-wrap justify-center items-center gap-8">
                    {Object.values(skill.language).map((s) => (
                        <SkillItem key={s.name} logo={s.logo} name={s.name} />
                    ))}
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-8">
                    {Object.values(skill.backend).map((s) => (
                        <SkillItem key={s.name} logo={s.logo} name={s.name} />
                    ))}
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-8">
                    {Object.values(skill.frontend).map((s) => (
                        <SkillItem key={s.name} logo={s.logo} name={s.name} />
                    ))}
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-8">
                    {Object.values(skill.tools).map((s) => (
                        <SkillItem key={s.name} logo={s.logo} name={s.name} />
                    ))}
                </div>
            </div>
        </section>
    );
}
