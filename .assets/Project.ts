import {Skill} from "@/object/UserProfile";

export interface Project {
    banner: string
    name: string
    tags: string[]
    contents: Object[]
}

export interface Content {
    title: string
    type: string
}

export interface BasicText extends Content {
    text: string
}

export interface ImageText extends Content {
    text: string
    image: string
}

export interface BigImageText extends Content {
    text: string
    image: string
}

export interface Title extends Content {
    description: string
    icon: string
    tags: []
}

export interface ProjectSkill extends Content {
    text: string
    skills: Skill[]
}

export interface Contributor extends Content {
    contributors: [{
        icon: string
        name: string
        tags: string[]
    }]
}

export interface ExternalLinks extends Content {
    links: [
        {
            icon: string
            name: string
            link: string
        }
    ]
}
