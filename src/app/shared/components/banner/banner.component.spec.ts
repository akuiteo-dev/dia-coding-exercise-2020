import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BannerComponent} from './banner.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BannerComponent,
      ],
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test("should render title in a h1 tag", () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toEqual(component.title);
  });
});
