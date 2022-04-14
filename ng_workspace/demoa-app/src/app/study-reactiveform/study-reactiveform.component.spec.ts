import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyReactiveformComponent } from './study-reactiveform.component';

describe('StudyReactiveformComponent', () => {
  let component: StudyReactiveformComponent;
  let fixture: ComponentFixture<StudyReactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyReactiveformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
