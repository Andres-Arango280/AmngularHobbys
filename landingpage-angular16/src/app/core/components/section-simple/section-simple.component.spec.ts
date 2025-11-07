import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSimpleComponent } from './section-simple.component';

describe('SectionSimpleComponent', () => {
  let component: SectionSimpleComponent;
  let fixture: ComponentFixture<SectionSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSimpleComponent]
    });
    fixture = TestBed.createComponent(SectionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
