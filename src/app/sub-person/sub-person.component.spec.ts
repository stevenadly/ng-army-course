import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPersonComponent } from './sub-person.component';

describe('SubPersonComponent', () => {
  let component: SubPersonComponent;
  let fixture: ComponentFixture<SubPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
