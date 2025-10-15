import { Component, signal } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { PageComponent } from "../../../shared/components/page/page.component";
import { TranslocoModule } from "@jsverse/transloco";
import { ModalComponent } from "../modal/modal.component";
import { Technology } from "../../models/technology.model";
import { TECHNOLOGIES } from "../data/technologies";

@Component({
  standalone: true,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports: [PageComponent, MatIconModule, TranslocoModule, ModalComponent]
})
export class HomepageComponent{
  selectedTechno = signal<Technology|null>(null);
  strengths = ['meticulous', 'punctual', 'pragmatic', 'conscientious', 'structured', 'problem_solving'];
  technologies : Technology[] = TECHNOLOGIES;

  setSelectedTechno(technology: Technology) {
    this.selectedTechno.set(technology);
  }
}
