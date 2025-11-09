import { Technology } from "../models/technology.model";
import { BOOTSTRAP } from "./bootstrap";
import { CSS3 } from "./css";
import { HTML } from "./html";
import { TYPESCRIPT } from "./typescript";

export const ANGULAR : Technology = {
  "name": "angular",
  "title": "Angular",
  "title_short": "Angular",
  "level": 2,
  "description": {
    "en": "blabla en anglais",
    "fr": "blabla en français"
  },
  "skills": {
    "en": [],
    "fr": []
  },
  "projects": {
    "en": [
      "This website",
      "A project for the company EFA that uses their own component. A good understanding of component and modules was required, as well as a good management of API calls."
    ],
    "fr": [
      "Ce site",
      "Un projet pour l'entreprise EFA, utilisant leur propres composants. Ce projet nécéssitait une boone compréhension des modules et des composants, ainsi qu'une bonne gestion d'appels API."
    ]
  },
  "related_technologies": [BOOTSTRAP, CSS3, TYPESCRIPT, HTML]
}
