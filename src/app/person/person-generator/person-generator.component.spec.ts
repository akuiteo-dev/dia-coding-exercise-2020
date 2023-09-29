import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PersonGeneratorComponent } from "./person-generator.component";
import { RouterTestingModule } from "@angular/router/testing";

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
	});
	
	it('should create', () => {
		expect(component).toBeDefined();
	});

});
