import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsactiveComponent } from './isactive.component';

describe('IsactiveComponent', () => {
  let component: IsactiveComponent;
  let fixture: ComponentFixture<IsactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
