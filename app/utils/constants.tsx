export const navItems = [
    { id: "", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "🙋‍♂️" },
    { id: "skills", label: "Skills", icon: "🧩" },
    { id: "experiences", label: "Experiences", icon: "💡" },
    // { id: "blogs", label: "Bolgs", icon: "✍️" },
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
        logoUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
    facebook: {
        url: "https://www.facebook.com/shomi.khan1",
        logoUrl: "https://cdn-icons-png.flaticon.com/512/174/174848.png"
    },
    linkedin: {
        url: "https://linkedin.com/in/shomikhan",
        logoUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
    }
}

const isDev = process.env.NODE_ENV === 'development';

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
            "Managed asynchronous tasks and created cron jobs",
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
            "Migrating full project from Python3 to Python3",
            "Developing Enterprise frontend web app",
            "Making different shared modules so that these can adapt business requirements easily and increase reusability"
        ]
    },
    {
        company: "Samsung R&D Institute Bangladesh (SRBD)",
        role: "Intern",
        period: "Aug 2018 - Jan 2019",
        responsibilities: [
            "Developing existing application by identifying areas for modification",
            "Learning and builting basic Tizen application"
        ]
    }
];