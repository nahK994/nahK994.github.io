// Navigation Items
export interface NavItem {
    id: string;
    label: string;
    icon: string;
};

export interface HeroInfo {
    title: string;
    subTitle: string;
};

// About Me Section
export interface AboutMeInfo {
    myself: string;
    passion: string;
    hobby: string;
    welcome: string;
};

// Social Profile Links
export interface SocialProfile {
    url: string;
    logoUrl: string;
};

export interface Profile {
    github: SocialProfile;
    facebook: SocialProfile;
    linkedin: SocialProfile;
    gmail: SocialProfile;
    whatsapp: {
        number: string;
        logoUrl: string;
    };
};

// Skill Categories
export interface SkillItem {
    name: string;
    logo: string;
};

export interface SkillCategory {
    language: SkillItem[];
    backend: SkillItem[];
    frontend: SkillItem[];
    tools: SkillItem[];
};

// Experience Section
export interface Experience {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
};
