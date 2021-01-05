import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListblogsComponent } from './listblogs.component';

describe('ListblogsComponent', () => {
  let component: ListblogsComponent;
  let fixture: ComponentFixture<ListblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
