
import { Component } from "@angular/core";
import { PageComponent } from "../../../shared/components/page/page.component";

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ PageComponent ]
})
export class ContactComponent{

}
