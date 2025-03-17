import React from "react";
import { experiences, navItems } from "../../utils/constants";

export default function Experiences() {
    return (
        <section id={navItems[3].id} className="flex justify-center items-center min-h-screen font-mono px-3 bg-gradient-to-b to-green-50 from-yellow-50 text-gray-900">
            <div className="bg-white border-2 border-dashed border-red-400 rounded-2xl shadow-lg py-8 px-4 max-w-fit">
                {experiences.map((exp, index) => (
                    <div key={index} className={`w-[80%] sm:w-150 -left-2 relative ml-6 ${index === experiences.length - 1 ? 'border-l-0 mb-0' : 'pb-8 border-yellow-100 border-l-2'}`}>
                        <div className="absolute w-3 h-3 bg-green-300 rounded-full -left-1.5"></div>
                        <div className="ml-6">
                            <h3 className="text-xl font-semibold text-green-800">{exp.role}</h3>
                            <p className="text-lg text-green-700"><span className="text-blue-700">{exp.company}</span> | {exp.period}</p>
                            <ul className="list-disc list-inside mt-2 text-green-900">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
