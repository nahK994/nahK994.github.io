import { HeroInfo } from "../../../content/types";

export default function Hero({hero, githubUrl, sectionId, bgColor, baseCSS}: {hero: HeroInfo, githubUrl: string, sectionId: string, bgColor: string, baseCSS: string}) {
    const btnStyle = "text-blue-600 bg-white rounded-2xl text-lg font-semibold px-6 py-3 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300";

    return <section id={sectionId} className={`${baseCSS} ${bgColor}`}>
        <div className="text-center flex flex-col items-center animate-fadeIn fadeIn px-4 sm:px-0">
            <div className="text-3xl md:text-5xl font-bold flex justify-center items-center mb-16">
                <span className="animate-wave">👋</span>
                <span className="mb-2 mr-4">🤓</span>
                <span className="text-green-700 drop-shadow-2xl mr-2">Hey there!!</span>
                <span>🎉</span>
            </div>
            <div className="font-semibold text-2xl md:text-3xl mb-4 text-gray-700">
                {hero.title}
            </div>
            <div className="text-lg md:text-2xl mb-4 text-gray-700">
                {hero.subTitle1}
            </div>
            <div className="text-lg md:text-2xl mb-8 text-gray-700">
                {hero.subTitle2}
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                <a
                    href={githubUrl} target="_blank"
                    className={`${btnStyle}`}
                >
                    My Github Profile
                </a>
                <a
                    href="ShomiKhan_Resume.pdf" target="_blank"
                    className={`${btnStyle}`}
                >
                    Resume
                </a>
            </div>
        </div>
    </section>

}