import { HeroInfo } from "../../../content/types";

export default function Hero({hero, githubUrl, sectionId, bgColor, baseCSS}: {hero: HeroInfo, githubUrl: string, sectionId: string, bgColor: string, baseCSS: string}) {
    return <section id={sectionId} className={`${baseCSS} ${bgColor}`}>
        <div className="text-center flex flex-col items-center animate-fadeIn fadeIn px-4 sm:px-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-700">
                {hero.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 animate-fade-in-up text-gray-800">
                {hero.subTitle}
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
                <a
                    href={githubUrl} target="_blank"
                    className="bg-yellow-50 text-green-500 px-6 py-3 rounded-2xl text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                    View My Work
                </a>
                <a
                    href="ShomiKhan_Resume.pdf" target="_blank"
                    className="bg-yellow-50 text-green-500 px-6 py-3 rounded-2xl text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                    Resume
                </a>
            </div>
        </div>
    </section>

}