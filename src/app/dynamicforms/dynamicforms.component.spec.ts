import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformsComponent } from './dynamicforms.component';

describe('DynamicformsComponent', () => {
  let component: DynamicformsComponent;
  let fixture: ComponentFixture<DynamicformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
