import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestrouterComponent } from './testrouter.component';

describe('TestrouterComponent', () => {
  let component: TestrouterComponent;
  let fixture: ComponentFixture<TestrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestrouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
