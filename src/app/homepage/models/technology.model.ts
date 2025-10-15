export interface Technology {
    name: string;
    title: string;
    title_short: string;
    level: number;
    description: multiLangContent;
    skills: multiLangContent;
    projects: multiLangContent;
    related_technologies: Technology[];
}

type multiLangContent = {[lang:string] : string[]|string}
