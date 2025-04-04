import { text } from "stream/consumers";
import { AboutMeInfo, Experience, HeroInfo, NavItem, Profile, SkillCategory, SocialProfile, Welcome } from "./types";

const isDev = process.env.NODE_ENV === 'development';

export const navItems: NavItem[] = [
    { id: "", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "🙋‍♂️" },
    { id: "skills", label: "Skills", icon: "🧩" },
    { id: "experiences", label: "Experiences", icon: "💡" },
    { id: "contact-me", label: "Contact", icon: "☎️" },
];

export const hero: HeroInfo = {
    title: "Hi, I’m Shomi Khan",
    subTitle: "Software Engineer | Curious Soul 🤔💭 | Python Charmer 🐍 | Golang Alchemist 🦫"
}

export const aboutMe: AboutMeInfo = {
    myself: "I'm Shomi Khan, backend focused full-stack software engineer 🦫🖥️🐍 from Bangladesh 🇧🇩.",
    passion: "🌥️ Enthusiastic about building cloud-native solutions, ⚙️ diving into low-level systems, 🤖 automating everything possible",
    hobby: "Apart from coding, I’m an anime fan ⛩️, former cyclist 🚴, and hobbyist photographer 📸",
}

export const profile: Profile = {
    github: {
        url: "https://github.com/shomi-khan",
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

export const skill: SkillCategory = {
    language: {
        label: "Programming Languages",
        items: [
            { name: "Python", logo: `${isDev ? '/' : ''}python.png` },
            { name: "Golang", logo: `${isDev ? '/' : ''}golang.png` },
            { name: "TypeScript", logo: `${isDev ? '/' : ''}typescript.png` },
            { name: "C++", logo: `${isDev ? '/' : ''}c++.png` },
            { name: "Bash", logo: `${isDev ? '/' : ''}bash.png` }
        ]
    },
    backend: {
        label: "Backend",
        items: [
            { name: "Gin", logo: `${isDev ? '/' : ''}gin.png` },
            { name: "Django", logo: `${isDev ? '/' : ''}django.png` },
            { name: "FastAPI", logo: `${isDev ? '/' : ''}fastapi.png` }
        ]
    },
    database: {
        label: "Database",
        items: [
            { name: "PostgreSQL", logo: `${isDev ? '/' : ''}postgresql.png` },
            { name: "Redis", logo: `${isDev ? '/' : ''}redis.png` }
        ]
    },
    frontend: {
        label: "Frontend",
        items: [
            { name: "Next.js", logo: `${isDev ? '/' : ''}nextjs.png` },
            { name: "Angular", logo: `${isDev ? '/' : ''}angular.png` },
            { name: "TailwindCSS", logo: `${isDev ? '/' : ''}tailwind-css.png` },
            { name: "HTML", logo: `${isDev ? '/' : ''}html.png` }
        ]
    },
    devops: {
        label: "DevOps & Cloud",
        items: [
            { name: "Docker", logo: `${isDev ? '/' : ''}docker.png` },
            { name: "AWS", logo: `${isDev ? '/' : ''}aws.png` },
            { name: "Nginx", logo: `${isDev ? '/' : ''}nginx.png` }
        ]
    },
    api: {
        label: "API & Communication",
        items: [
            { name: "REST APIs", logo: null },
            { name: "gRPC", logo: null },
            { name: "RabbitMQ", logo: `${isDev ? '/' : ''}rabbitmq.png` }
        ]
    },
    tools: {
        label: "Tools",
        items: [
            { name: "Git", logo: `${isDev ? '/' : ''}git.png` },
            { name: "VSCode", logo: `${isDev ? '/' : ''}vscode.png` },
            { name: "Postman", logo: `${isDev ? '/' : ''}postman.png` },
            { name: "Swagger", logo: `${isDev ? '/' : ''}swagger.png` }
        ]
    }
};




export const experiences: Experience[] = [
    {
        company: "GroupyFy Inc.",
        role: "Backend Software Engineer",
        period: "Nov 2023 - Present",
        responsibilities: [
            "Developed and maintained RESTful APIs with Django",
            "Designed database schemas and managed cached data",
            "Managed asynchronous tasks and cron jobs",
            "Integrated payment systems (Stripe)",
            "Migrated frontend from React to Nextjs",
            "Collaborated with frontend dev to ensure seamless functionality",
            "Set up development environments",
            "Deployed the application on AWS"
        ]
    },
    {
        company: "Hubar Tech Limited",
        role: "Software Engineer",
        period: "Feb 2023 - May 2023",
        responsibilities: [
            "Created RESTful APIs",
        ]
    },
    {
        company: "SELISE Digital Platforms",
        role: "Jr. Software Engineer",
        period: "Apr 2020 - Dec 2022",
        responsibilities: [
            "Developed Enterprise frontend web app with Angular",
            "Created shared UI modules for flexibility and reusability",
            "Trained and gave necessary guidelines to junior teammates",
            "Migrated full project from Python2 to Python3",
            "Developed and maintailed RESTful APIs with Django"
        ]
    },
    {
        company: "Samsung R&D Institute Bangladesh (SRBD)",
        role: "Intern",
        period: "Aug 2018 - Jan 2019",
        responsibilities: [
            "Learnt and built basic Tizen application"
        ]
    }
];

export const welcome: Welcome = {
    text: "I love to chat 🗨️ rather than talk. If you ping me with a 'hi', I'll be happy to chat with you more! 😊"
}