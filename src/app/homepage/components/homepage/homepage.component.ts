import { Component } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { PageComponent } from "../../../shared/components/page/page.component";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
  standalone: true,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports: [PageComponent, MatIconModule, TranslocoModule]
})
export class HomepageComponent{
  strengths = ['meticulous', 'punctual', 'pragmatic', 'conscientious', 'structured', 'problem_solving'];
  technologies = [
    { name: 'angular', title: 'Angular', title_short: 'Angular'},
    { name: 'java', title: 'Java', title_short: 'Java'},
    { name: 'c', title: 'C', title_short: 'C'},
    { name: 'cpp', title: 'C++', title_short: 'C++'},
    { name: 'csharp', title: 'C#', title_short: 'C#'},
    { name: 'sql', title: 'MySQL, PostgreSQL, Oracle SQL, ...', title_short: 'SQL'},
    { name: 'html', title: 'HTML 5', title_short: 'HTML5'},
    { name: 'css', title: 'CSS 3', title_short: 'CSS3'},
    { name: 'bootstrap', title: 'Bootstrap', title_short: 'Bootstrap'},
    { name: 'uml', title: 'Unified Modelling Language', title_short: 'UML'},
    { name: 'php', title: 'PHP', title_short: 'PHP'},
    { name: 'git', title: 'Git (Gitlab/Github)', title_short: 'Git'},
    { name: 'python', title: 'Python', title_short: 'Python'},
    { name: 'javascript', title: 'Javascript / Typescript', title_short: 'Javascript / TS'},
    { name: 'docker', title: 'Docker', title_short: 'Docker'},
    { name: 'aws', title: 'Amazon Web Service', title_short: 'AWS'},
    { name: 'terraform', title: 'Terraform (Open Tofu)', title_short: 'Terraform'},
    { name: 'mongo', title: 'Mongo DB', title_short: 'MongoDB'}
  ];

}
