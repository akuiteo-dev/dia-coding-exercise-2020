import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GenerationConfig } from "./generation-config";
import { Person } from "./person";

@Injectable({
	providedIn: "root"
})
export class PersonService {

	constructor(private http: HttpClient) {
	}

	getPersons(config: GenerationConfig): Observable<Person[]> {
		return this.http.get<Person[]>("/assets/data/persons.json");
	}
}
