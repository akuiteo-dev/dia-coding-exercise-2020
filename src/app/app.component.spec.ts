import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AppComponent", () => {

	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
			]
		});
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	test('should create', () => {
		expect(component).toBeDefined();
	});

	test("should render title in a h1 tag", () => {
		const h1 = fixture.nativeElement.querySelector('h1');
		expect(h1.textContent).toEqual(component.title);
	});

});
