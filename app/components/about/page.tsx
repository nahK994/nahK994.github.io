import Image from "next/image";
import { aboutMe, navItems, profile } from "../../utils/constants";

export default function About() {
    return <section id={navItems[1].id} className="flex justify-center items-center h-screen font-mono px-3 bg-gradient-to-b to-green-50 from-yellow-50 text-gray-900">
        <div
            className="bg-white border-2 border-dashed border-red-400 rounded-2xl shadow-lg py-8 px-2 sm:px-5 max-w-lg text-center opacity-0 animate-fadeIn">
            <h2 className="font-bold flex justify-center items-center mb-4 text-3xl">
                <span className="animate-wave">👋</span>
                <span className="mb-2 mr-4">🤓</span>
                <span className="text-red-400 drop-shadow-2xl mr-2">Hey there!!</span>
                <span>🎉</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-x-4">
                <p className="text-gray-800 text-lg">{aboutMe.myself}</p>
                <Image src="/programmer.png" alt="Shomi Khan" width={96} height={96} className="mt-4 sm:mt-0" />
            </div>
            <p className="pr-3 text-gray-800 mb-4 text-lg">{aboutMe.passion}</p>
            <p className="pr-3 text-gray-800 mb-4 text-lg">{aboutMe.hobby}</p>
            <p className="text-gray-800 text-lg">{aboutMe.welcome}</p>
            <div className="flex justify-center gap-5 mt-5">
                <a href={profile.github.url} target="_blank">
                    <Image src={profile.github.logoUrl} alt="GitHub" width={32} height={32} className="w-8 h-8" />
                </a>
                <a href={profile.linkedin.url} target="_blank">
                    <Image src={profile.linkedin.logoUrl} alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
                </a>
                <a href={profile.facebook.url} target="_blank">
                    <Image src={profile.facebook.logoUrl} alt="Facebook" width={32} height={32} className="w-8 h-8" />
                </a>
            </div>
        </div>
    </section>
}