import { navItems, skill } from "../../utils/constants";
import SkillItem from "./item/skill-item";

export default function Skills() {
    return (
        <section id={navItems[2].id} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-yellow-50">
            <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-center items-center gap-8">
                    {Object.values(skill.language).map((s) => (
                        <SkillItem key={s.name} logo={s.logo} name={s.name} />
                    ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-8">
                    {Object.values(skill.backend).map((s) => (
                        <SkillItem key={s.name} logo={s.logo} name={s.name} />
                    ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-8">
                    {Object.values(skill.frontend).map((s) => (
                        <SkillItem key={s.name} logo={s.logo} name={s.name} />
                    ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-8">
                    {Object.values(skill.tools).map((s) => (
                        <SkillItem key={s.name} logo={s.logo} name={s.name} />
                    ))}
                </div>
            </div>
        </section>
    );
}
