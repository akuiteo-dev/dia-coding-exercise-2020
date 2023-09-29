import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { PersonGeneratorComponent } from "./person-generator/person-generator.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonRoutingModule } from "./person-routing.module";
import { PersonService } from "./person.service";

@NgModule({
	declarations: [
		PersonListComponent,
		PersonGeneratorComponent
	],
	imports: [
		CommonModule,
		PersonRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatTableModule,
		ReactiveFormsModule
	]
})
export class PersonModule {
	static forRoot(): ModuleWithProviders<PersonModule> {
		return {
			ngModule: PersonModule,
			providers: [
				PersonService
			]
		};
	}
}
