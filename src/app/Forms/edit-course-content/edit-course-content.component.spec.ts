import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseContentComponent } from './edit-course-content.component';

describe('EditCourseContentComponent', () => {
  let component: EditCourseContentComponent;
  let fixture: ComponentFixture<EditCourseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
