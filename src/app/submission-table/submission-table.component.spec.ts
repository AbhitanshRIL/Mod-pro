import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionTableComponent } from './submission-table.component';

describe('SubmissionTableComponent', () => {
  let component: SubmissionTableComponent;
  let fixture: ComponentFixture<SubmissionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionTableComponent]
    });
    fixture = TestBed.createComponent(SubmissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
