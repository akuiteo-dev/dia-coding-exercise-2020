import {Component} from "@angular/core";
import {AboutRoutingModule} from "./about-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    AboutRoutingModule,
  ],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
}
