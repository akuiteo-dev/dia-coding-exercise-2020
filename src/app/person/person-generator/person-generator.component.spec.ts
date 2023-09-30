import {ComponentFixture, TestBed} from "@angular/core/testing";
import {PersonGeneratorComponent} from "./person-generator.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("PersonGeneratorComponent", () => {

  let component: PersonGeneratorComponent;
  let fixture: ComponentFixture<PersonGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ]
    });
    fixture = TestBed.createComponent(PersonGeneratorComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  test('should create', () => {
    expect(component).toBeDefined();
  });

  test.each([1, 545, 900, 1000])("given values between 1 and 1000 (inclusive) when set value in generator count control then valid", (value: number) => {
    // given
    const countControl = component.generator.controls["count"];
    // when
    countControl.setValue(value)
    // then
    expect(component.generator.valid).toBeTruthy();
  });

  test("given value greater than 1000 when set value in generator count control then invalid", () => {
    // given
    const countControl = component.generator.controls["count"];
    // when
    countControl.setValue(1001)
    // then
    expect(component.generator.valid).toBeFalsy();
  });

  test.each([-456, -1, 0])("given values lesser than 1 when set value in generator count control then invalid", (value: number) => {
    // given
    const countControl = component.generator.controls["count"];
    // when
    countControl.setValue(value)
    // then
    expect(component.generator.valid).toBeFalsy();
  });

  test("given value greater than 1000 when set value in generator count control then invalid", () => {
    // given
    const countControl = component.generator.controls["count"];
    // when
    countControl.setValue(1001)
    // then
    expect(component.generator.valid).toBeFalsy();
  });

  test("given value with char when set value in generator count html input element then invalid", () => {
    // given
    const countInputElement: HTMLInputElement = fixture.nativeElement.querySelector('#generatorForm').querySelectorAll('input')[0]
    countInputElement.value = 'A001';
    // when
    countInputElement.dispatchEvent(new Event('input'));
    // then
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.generator.valid).toBeFalsy();
    });
  });

  test("given empty value when set value in generator count html input element then invalid", () => {
    // given
    const countInputElement: HTMLInputElement = fixture.nativeElement.querySelector('#generatorForm').querySelectorAll('input')[0]
    countInputElement.value = '';
    // when
    countInputElement.dispatchEvent(new Event('input'));
    // then
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.generator.valid).toBeFalsy();
    });
  });

  test.each([[false, true], [true, false]])("given all genders when set value true in one and false in the other then valid", (femaleValue: boolean, maleValue: boolean) => {
    // given
    const femaleControl = component.generator.controls["female"];
    const maleControl = component.generator.controls["male"];
    // when
    femaleControl.setValue(femaleValue)
    maleControl.setValue(maleValue)
    // then
    expect(component.generator.valid).toBeTruthy();
  });

  test("given all genders when set value true in all genders then valid", () => {
    // given
    const femaleControl = component.generator.controls["female"];
    const maleControl = component.generator.controls["male"];
    // when
    femaleControl.setValue(true)
    maleControl.setValue(true)
    // then
    expect(component.generator.valid).toBeTruthy();
  });

  test("given all genders when set value false in all genders then invalid", () => {
    // given
    const femaleControl = component.generator.controls["female"];
    const maleControl = component.generator.controls["male"];
    // when
    femaleControl.setValue(false)
    maleControl.setValue(false)
    // then
    expect(component.generator.valid).toBeFalsy();
  });
});
