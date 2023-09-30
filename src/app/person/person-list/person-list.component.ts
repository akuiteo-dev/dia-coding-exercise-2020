import {Component} from "@angular/core";
import {GenerationConfig} from "../generation-config";
import {Person} from "../person";
import {PersonService} from "../person.service";
import {MatTableDataSource} from "@angular/material/table";
import {tap} from "rxjs";

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

  private _dataLoading = false;

  get dataLoading(): boolean {
    return this._dataLoading;
  }

  generate(config: GenerationConfig) {
    this._dataLoading = true;
    this.personService.getPersons(config)
      .pipe(tap(() => this._dataLoading = false))
      .subscribe(value => this.dataSource.data = value);
  }
}
