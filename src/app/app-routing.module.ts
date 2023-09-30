import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: "personnes",
    loadChildren: () => import("./person/person.module").then(m => m.PersonModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "personnes"
  },
  {
    path: "apropos",
    loadComponent: () => import("./about/about.component").then(m => m.AboutComponent)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

