import {Component} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
}
