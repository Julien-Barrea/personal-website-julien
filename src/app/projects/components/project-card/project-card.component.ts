
import { Component, input } from "@angular/core";
import { Project } from "../../model/project.model";
import { TranslocoService } from "@jsverse/transloco";

@Component({
  standalone: true,
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [  ]
})
export class ProjectCardComponent{
  project = input.required<Project>()
  currLang = this.translocoService.getActiveLang();

  constructor(private translocoService: TranslocoService) {}

  get description(){
    return this.project()?.description[this.currLang] || this.project()?.description["en"]
  }
}
