import Image from "next/image";
import { Card } from "../ui/Card";
import { AboutMeInfo } from "../../../content/types";

export default function About(  {aboutMe, sectionId, bgColor, baseCSS}: {aboutMe: AboutMeInfo; sectionId: string, bgColor: string, baseCSS: string}  ) {
    return <section id={sectionId} className={`${baseCSS} ${bgColor}`}>
        <Card>
            <div className="py-8 px-2 sm:px-5 max-w-md text-center">
                <h2 className="font-bold flex justify-center items-center mb-4 text-3xl">
                    <span className="animate-wave">👋</span>
                    <span className="mb-2 mr-4">🤓</span>
                    <span className="text-green-700 drop-shadow-2xl mr-2">Hey there!!</span>
                    <span>🎉</span>
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-x-4">
                    <p className="text-gray-800 text-lg">{aboutMe.myself}</p>
                    <Image src="/programmer.png" alt="Shomi Khan" width={96} height={96} className="mt-4 sm:mt-0" />
                </div>
                <p className="text-gray-800 mb-4 text-lg">{aboutMe.passion}</p>
                <p className="text-gray-800 mb-4 text-lg">{aboutMe.hobby}</p>
            </div>
        </Card>
    </section>
}