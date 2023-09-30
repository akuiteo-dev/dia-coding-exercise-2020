import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {GenerationConfig} from "./generation-config";
import {Person} from "./person";
import {GenderEnum} from "../shared/enums/gender.enum";

@Injectable({
  providedIn: "root"
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getPersons(config: GenerationConfig): Observable<Person[]> {
    return this.http.get<Person[]>("/assets/data/persons.json")
      .pipe(
        map((response: Person[]) => {
          // TODO : Move the filters to the backend for better performance
          response = this.filterGender(response, config.male, GenderEnum.MALE);
          response = this.filterGender(response, config.female, GenderEnum.FEMALE);
          return this.filterCount(response, config.count);
        })
      );
  }

  private filterGender(response: Person[], keepGender: boolean, gender: GenderEnum): Person[] {
    return response.filter((response: Person) => (!keepGender) ? response.gender != gender : true);
  }

  private filterCount(response: Person[], count: number): Person[] {
    return response.slice(0, count)
  }
}
