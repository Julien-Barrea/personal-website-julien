
import { Component } from "@angular/core";
import { PageComponent } from "../../../shared/components/page/page.component";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { PROJECTS } from "../../data/projects";

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ PageComponent, ProjectCardComponent ]
})
export class ProjectsComponent{
  projects = PROJECTS
}
