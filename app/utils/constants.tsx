const isDev = process.env.NODE_ENV === 'development';

export const navItems = [
    { id: "", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "🙋‍♂️" },
    { id: "skills", label: "Skills", icon: "🧩" },
    { id: "experiences", label: "Experiences", icon: "💡" },
    { id: "contact-me", label: "Contact", icon: "☎️" },
];

export const hero = {
    title: "Hi, I’m Shomi Khan",
    subTitle: "Software Engineer | Curious Soul 🤔💭 | Python Charmer 🐍 | Golang Alchemist 🦫"
}

export const aboutMe = {
    myself: "I'm Shomi Khan, backend focused full-stack software engineer 🦫🖥️🐍 from Bangladesh 🇧🇩.",
    passion: "🌥️ Enthusiastic about building cloud-native solutions, 🧑‍💻 writing clean code, ⚙️ diving into low-level systems, 🤖 automating everything possible",
    hobby: "Apart from coding, I’m an anime fan ⛩️, former cyclist 🚴, and hobbyist photographer 📸",
    welcome: "I love to chat 🗨️ rather than talk. If you ping me with a 'hi', I'll be happy to chat with you more! 😊"
}

export const profile = {
    github: {
        url: "https://github.com/nahK994",
        logoUrl: `${isDev ? '/' : ''}github.png`
    },
    facebook: {
        url: "https://www.facebook.com/shomi.khan1",
        logoUrl: `${isDev ? '/' : ''}facebook.png`
    },
    linkedin: {
        url: "https://linkedin.com/in/shomikhan",
        logoUrl: `${isDev ? '/' : ''}linkedin.png`
    },
    gmail: {
        url: "shomikhan043@gmail.com",
        logoUrl: `${isDev ? '/' : ''}gmail.png`
    },
    whatsapp: {
        number: "+8801676498001",
        logoUrl: `${isDev ? '/' : ''}whatsapp.png`
    }
}

export const skill = {
    language: [
        {
            name: "Python",
            logo: `${isDev ? '/' : ''}python.png`
        },
        {
            name: "Golang",
            logo: `${isDev ? '/' : ''}golang.png`
        },
        {
            name: "TypeScript",
            logo: `${isDev ? '/' : ''}typescript.png`
        },
        {
            name: "C++",
            logo: `${isDev ? '/' : ''}c++.png`
        },
        {
            name: "Bash",
            logo: `${isDev ? '/' : ''}bash.png`
        }
    ],
    backend: [
        {
            name: "Gin",
            logo: `${isDev ? '/' : ''}gin.png`
        },
        {
            name: "Django",
            logo: `${isDev ? '/' : ''}django.png`
        },
        {
            name: "FastAPI",
            logo: `${isDev ? '/' : ''}fastapi.png`
        },
        {
            name: "PostgreSQL",
            logo: `${isDev ? '/' : ''}postgresql.png`
        }
    ],
    frontend: [
        {
            name: "Nextjs",
            logo: `${isDev ? '/' : ''}nextjs.png`
        },
        {
            name: "Angular",
            logo: `${isDev ? '/' : ''}angular.png`
        },
        {
            name: "TailwindCSS",
            logo: `${isDev ? '/' : ''}tailwind-css.png`
        },
        {
            name: "HTML",
            logo: `${isDev ? '/' : ''}html.png`
        }
    ],
    tools: [
        {
            name: "Docker",
            logo: `${isDev ? '/' : ''}docker.png`
        },
        {
            name: "Linux",
            logo: `${isDev ? '/' : ''}linux.png`
        },
        {
            name: "AWS",
            logo: `${isDev ? '/' : ''}aws.png`
        },
        {
            name: "Redis",
            logo: `${isDev ? '/' : ''}redis.png`
        },
        {
            name: "Pydentic",
            logo: `${isDev ? '/' : ''}pydentic.png`
        },
        {
            name: "Kafka",
            logo: `${isDev ? '/' : ''}kafka.png`
        },
        {
            name: "Git",
            logo: `${isDev ? '/' : ''}git.png`
        }
    ]
};


export const experiences = [
    {
        company: "GroupyFy Inc.",
        role: "Backend Software Engineer",
        period: "Nov 2023 - Present",
        responsibilities: [
            "Created and managed RESTful APIs",
            "Designed and optimized database queries",
            "Managed asynchronous tasks and cron jobs",
            "Integrated Stripe payment method",
            "Collaborated with frontend team",
            "Set up development environments",
            "Deployed on AWS"
        ]
    },
    {
        company: "Hubar Tech Limited",
        role: "Software Engineer",
        period: "Feb 2023 - May 2023",
        responsibilities: [
            "Created and documented RESTful APIs",
            "Improved API performence",
        ]
    },
    {
        company: "SELISE Digital Platforms",
        role: "Jr. Software Engineer",
        period: "Apr 2020 - Dec 2022",
        responsibilities: [
            "Migrated full project from Python2 to Python3",
            "Developed Enterprise frontend web app",
            "Created shared UI modules for flexibility and reusability"
        ]
    },
    {
        company: "Samsung R&D Institute Bangladesh (SRBD)",
        role: "Intern",
        period: "Aug 2018 - Jan 2019",
        responsibilities: [
            "Developed existing application by identifying areas for modification",
            "Learnt and built basic Tizen application"
        ]
    }
];