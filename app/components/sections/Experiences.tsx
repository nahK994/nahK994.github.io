import React from "react";
import { Experience } from "../../../content/types";
import { ExperienceItem } from "../ui/ExperienceItem";

export default function Experiences({experiences, sectionId, baseCSS, bgColor}: {experiences: Experience[]; sectionId: string, baseCSS: string, bgColor: string}) {
    return (
        <section id={sectionId} className={`${baseCSS} ${bgColor}`}>
            <div className="flex flex-col gap-y-12 flex-wrap">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} item={exp} />
                    ))}
                </div>
        </section>
    );
};
