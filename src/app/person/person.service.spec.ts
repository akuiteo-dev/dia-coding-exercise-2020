import {fakeAsync, TestBed} from "@angular/core/testing";
import {Person} from "./person";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonService} from "./person.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {GenderEnum} from "../shared/enums/gender.enum";

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

  test("given PERSONS dataset with DEFAULT_CONFIG when getPersons then return 3 persons", fakeAsync(() => {
    //given
    //when
    personService.getPersons(DEFAULT_CONFIG).subscribe(element => {
      // then
      expect(element.length).toBe(3);
      expect(element).toEqual(PERSONS);
    });
    httpClientMock.expectOne("/assets/data/persons.json", 'GET').flush(PERSONS);
    httpClientMock.verify();
  }));

  test("given PERSONS dataset with config count 1 when getPersons then return 1 person", fakeAsync(() => {
    // given
    const config = {
      count: 1,
      male: true,
      female: true,
    };
    // when
    personService.getPersons(config).subscribe(element => {
      // then
      expect(element.length).toBe(1);
    });
    httpClientMock.expectOne("/assets/data/persons.json", 'GET').flush(PERSONS);
    httpClientMock.verify();
  }));

  test("given PERSONS dataset with config male false when getPersons then return 1 person female", fakeAsync(() => {
    // given
    const config = {
      count: 3,
      male: false,
      female: true,
    };
    // when
    personService.getPersons(config).subscribe(element => {
      // then
      expect(element.length).toBe(1);
      element.forEach((elem) => expect(elem.gender).toBe(GenderEnum.FEMALE))
    });
    httpClientMock.expectOne("/assets/data/persons.json", 'GET').flush(PERSONS);
    httpClientMock.verify();
  }));

  test("given PERSONS dataset with config female false when getPersons then return 2 persons male", fakeAsync(() => {
    // given
    const config = {
      count: 3,
      male: true,
      female: false,
    };
    // when
    personService.getPersons(config).subscribe(element => {
      // then
      expect(element.length).toBe(2);
      element.forEach((elem) => expect(elem.gender).toBe(GenderEnum.MALE))
    });
    httpClientMock.expectOne("/assets/data/persons.json", 'GET').flush(PERSONS);
    httpClientMock.verify();
  }));

});
