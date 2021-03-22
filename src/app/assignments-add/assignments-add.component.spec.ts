import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsAddComponent } from './assignments-add.component';

describe('AssignmentsAddComponent', () => {
  let component: AssignmentsAddComponent;
  let fixture: ComponentFixture<AssignmentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
