export interface Project{
  name: string,
  technology: string,
  description: multiLangContent,
  links: Link[],
  images?: string[],
}

interface Link{
  name: string,
  url: string,
}

type multiLangContent = {[lang:string] : string[]|string}
