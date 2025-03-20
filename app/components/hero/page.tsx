import { hero, navItems, profile } from "../../utils/constants";

export default function Hero() {
    return <section id={navItems[0].id} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-yellow-50">
        <div className="text-center flex flex-col items-center animate-fadeIn fadeIn px-4 sm:px-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-700">
                {hero.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 animate-fade-in-up text-gray-800">
                {hero.subTitle}
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
                <a
                    href={profile.github.url} target="_blank"
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