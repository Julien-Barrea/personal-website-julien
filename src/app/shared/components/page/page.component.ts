import { Component, computed, DestroyRef, inject, signal } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  imports: [ TranslocoModule, NgbModule, RouterModule]
})
export class PageComponent{
  destroyRef = inject(DestroyRef);
  curLang = signal("gb");
  availableLangs = computed( () => {
    return ["gb", "fr", "de", "lu"].filter( lang => lang !== this.curLang() );
  })

  constructor(private translocoService: TranslocoService, private router: Router) {}

  ngOnInit() {
    this.translocoService.langChanges$.pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((lang) => {
      this.curLang.set(lang === 'en' ? 'gb' : lang);
    });
  }

  ngAfterViewInit() {
    const id = this.router.url.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("active");
      element.classList.add("border-bottom");
    }
  }

  public changeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }

}
