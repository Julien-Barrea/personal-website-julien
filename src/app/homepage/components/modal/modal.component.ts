import { Component, computed, input, signal } from "@angular/core";
import { Technology } from "../../models/technology.model";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";

@Component({
  standalone: true,
  selector: 'app-modal-technology',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [TranslocoModule]
})
export class ModalComponent{
  technologyInput = input.required<Technology|null>({alias: "technology"});
  _technology = signal<Technology|null>(null);
  useSignal = false;
  currLang = this.translocoService.getActiveLang();

  technology = computed(() => {
    const tech = this._technology();
    const techInput = this.technologyInput();

    if(tech && this.useSignal){
      this.useSignal = false
      return tech
    }
    return techInput
  });

  constructor(private translocoService: TranslocoService) {}

  get description(){
    return this.technology()?.description[this.currLang] || this.technology()?.description["en"]
  }

  get skills(){
    let skills = this.technology()?.skills?.[this.currLang]
    if(!skills?.length){
      skills = this.technology()?.skills?.["en"]
    }
    return skills || []
  }

  get projects(){
    let projects = this.technology()?.projects?.[this.currLang]
    if(!projects?.length){
      projects = this.technology()?.projects?.["en"]
    }
    return projects || []
  }

  setTechnology(technology : Technology){
    this.useSignal = true
    this._technology.set(technology)
  }
}
