import { aboutMe, navItems, profile } from '../../utils/constants';
import Image from 'next/image';

const ContactMe = () => {
    return (
        <section id={navItems[4].id} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-yellow-50">
            <div className="bg-white border-2 border-dashed border-red-400 rounded-2xl shadow-lg py-8 px-2 sm:px-5 max-w-lg text-center">
                <p className="text-gray-800 text-lg">{aboutMe.welcome}</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-center gap-5 mt-5">
                        <a href={profile.github.url} target="_blank">
                            <Image src={profile.github.logoUrl} alt="GitHub" width={50} height={50} className="w-20 h-20" />
                        </a>
                        <a href={profile.linkedin.url} target="_blank">
                            <Image src={profile.linkedin.logoUrl} alt="LinkedIn" width={50} height={50} className="w-20 h-20" />
                        </a>
                        <a href={profile.facebook.url} target="_blank">
                            <Image src={profile.facebook.logoUrl} alt="Facebook" width={50} height={50} className="w-20 h-20" />
                        </a>
                        <a href={`mailto:${profile.gmail.url}`}>
                            <Image src={profile.gmail.logoUrl} alt="Gmail" width={50} height={50} className="w-20 h-20" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
