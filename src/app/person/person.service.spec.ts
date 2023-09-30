import {fakeAsync, TestBed} from "@angular/core/testing";
import {Person} from "./person";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonService} from "./person.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

const PERSONS: Person[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "REESE",
    email: "john@reese.com",
    gender: "Male"
  },
  {
    id: 2,
    firstName: "Harold",
    lastName: "FINCH",
    email: "harold@finch.com",
    gender: "Male"
  },
  {
    id: 3,
    firstName: "Joss",
    lastName: "CARTER",
    email: "joss@carter.com",
    gender: "Female"
  }
];

const DEFAULT_CONFIG = {
  count: 3,
  male: true,
  female: true
};

describe("PersonService", () => {

  let component: PersonListComponent;
  let personService: PersonService;
  let httpClientMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PersonListComponent,
      ],
      imports: [
        HttpClientTestingModule,
      ]
    });
    component = TestBed.inject(PersonListComponent);
    personService = TestBed.inject(PersonService);
    httpClientMock = TestBed.inject(HttpTestingController);
  });

  test('should create PersonListComponent', () => {
    expect(component).toBeDefined();
  });

  test("should provide a list of 3 persons", fakeAsync(() => {

    expect(personService.getPersons).toBeTruthy();

    personService.getPersons(DEFAULT_CONFIG).subscribe();
    httpClientMock.expectOne("/assets/data/persons.json", 'GET').flush(PERSONS);

    personService.getPersons(DEFAULT_CONFIG).subscribe(element => {
      expect(element.length).toBe(1);
      expect(element).toEqual(PERSONS);
    });

  }));

});
