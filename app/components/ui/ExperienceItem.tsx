import { Experience } from "@/content/types";
import { Card } from "./Card";

type ExperienceProps = {
  item: Experience;
};

export function ExperienceItem({item}: ExperienceProps) {
    return (
        <Card>
            <div className={`w-[90%] sm:w-170 -left-2 relative ml-6`}>
                <div className="absolute w-fit h-fit rounded-full -left-3.5 text-2xl">💡</div>
                <div className="ml-6">
                    <h3 className="text-xl font-semibold text-green-800">{item.role}</h3>
                    <p className="text-lg text-green-700 flex flex-col sm:flex-row gap-1 sm:flex-wrap">
                        <span className="text-blue-700">{item.company}</span>
                        <span className="hidden sm:block">|</span>
                        <span>{item.period}</span>
                    </p>
                    {/* <ul className="list-disc list-inside mt-2 text-green-900">
                        {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul> */}
                </div>
            </div>
        </Card>
    )
}