import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfeaturedComponent } from './readfeatured.component';

describe('ReadfeaturedComponent', () => {
  let component: ReadfeaturedComponent;
  let fixture: ComponentFixture<ReadfeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
