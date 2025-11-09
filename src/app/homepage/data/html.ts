import { Technology } from "../models/technology.model";
import { BOOTSTRAP } from "./bootstrap";
import { CSS3 } from "./css";
import { TYPESCRIPT } from "./typescript";
import { PHP } from "./php";

export const HTML : Technology = {
  "name": "html",
  "title": "HTML 5",
  "title_short": "HTML5",
  "level": 3,
  "description": {
    "en": "",
    "fr": ""
  },
  "skills": {
    "en": [],
    "fr": []
  },
  "projects": {
    "en": [],
    "fr": []
  },
  "related_technologies": [ BOOTSTRAP, CSS3, TYPESCRIPT, PHP ]
}
