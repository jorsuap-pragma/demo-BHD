import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceReviewComponent } from './face-review.component';

describe('FaceReviewComponent', () => {
  let component: FaceReviewComponent;
  let fixture: ComponentFixture<FaceReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
