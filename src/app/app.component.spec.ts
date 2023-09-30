import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "./app.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {TranslateModule} from "@ngx-translate/core";

describe("AppComponent", () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeDefined();
  });

});
