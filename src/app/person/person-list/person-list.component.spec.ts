import {ComponentFixture, TestBed} from "@angular/core/testing";
import {PersonListComponent} from "./person-list.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("PersonListComponent", () => {

  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeDefined();
  });

});
