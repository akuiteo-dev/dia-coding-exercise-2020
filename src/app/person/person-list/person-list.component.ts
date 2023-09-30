import {Component} from "@angular/core";
import {GenerationConfig} from "../generation-config";
import {Person} from "../person";
import {PersonService} from "../person.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.scss"]
})
export class PersonListComponent {

  displayedColumns: string[] = ["id", "firstName", "lastName", "gender", "email"];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>([]);

  constructor(private personService: PersonService) {
  }

  generate(config: GenerationConfig) {
    this.personService.getPersons(config).subscribe(value => this.dataSource.data = value);
  }
}
