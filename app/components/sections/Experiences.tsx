import React from "react";
import { Experience } from "../../../content/types";
import { Card } from "../ui/Card";
import { ExperienceItem } from "../ui/ExperienceItem";

export default function Experiences({experiences, sectionId, baseCSS, bgColor}: {experiences: Experience[]; sectionId: string, baseCSS: string, bgColor: string}) {
    return (
        <section id={sectionId} className={`${baseCSS} ${bgColor}`}>
            <div className="flex flex-col gap-y-12 flex-wrap">
                    {experiences.map((exp, index) => (
                        // <div key={index} className={`w-[90%] sm:w-170 -left-2 relative ml-6 ${index === experiences.length - 1 ? 'border-l-0 mb-0' : 'pb-8 border-orange-100 border-l-2'}`}>
                        //     <div className="absolute w-fit h-fit rounded-full -left-3.5 text-2xl">💡</div>
                        //     <div className="ml-6">
                        //         <h3 className="text-xl font-semibold text-green-800">{exp.role}</h3>
                        //         <p className="text-lg text-green-700 flex flex-col sm:flex-row gap-1 sm:flex-wrap">
                        //             <span className="text-blue-700">{exp.company}</span>
                        //             <span className="hidden sm:block">|</span>
                        //             <span>{exp.period}</span>
                        //         </p>
                        //         <ul className="list-disc list-inside mt-2 text-green-900">
                        //             {exp.responsibilities.map((resp, idx) => (
                        //                 <li key={idx}>{resp}</li>
                        //             ))}
                        //         </ul>
                        //     </div>
                        // </div>
                        <ExperienceItem key={index} item={exp} />
                    ))}
                </div>
        </section>
    );
};
