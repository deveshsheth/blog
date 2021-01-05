import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfeaturedComponent } from './isfeatured.component';

describe('IsfeaturedComponent', () => {
  let component: IsfeaturedComponent;
  let fixture: ComponentFixture<IsfeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsfeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
