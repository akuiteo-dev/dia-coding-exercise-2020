import {Component} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink
  ],
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  title = "coding-test";

}
