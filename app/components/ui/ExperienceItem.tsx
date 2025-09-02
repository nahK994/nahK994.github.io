import { Experience } from "@/content/types";
import { Card } from "./Card";

type ExperienceProps = {
    item: Experience;
};

export function ExperienceItem({ item }: ExperienceProps) {
    return (
        <div className="flex bg-white rounded-2xl text-lg px-2 md:px-6 py-3 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
            <div className="text-2xl">{item.emoji}</div>
            <div className="flex flex-col ml-6">
                <h3 className="text-xl font-semibold text-green-800">{item.role}</h3>
                <span className="text-blue-700">{item.company}</span>
                <span>{item.period}</span>
                {/* <ul className="list-disc list-inside mt-2 text-green-900">
                        {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul> */}
            </div>
        </div>
    )
}