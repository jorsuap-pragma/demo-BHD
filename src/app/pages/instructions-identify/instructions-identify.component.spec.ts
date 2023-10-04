import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsIdentifyComponent } from './instructions-identify.component';

describe('InstructionsIdentifyComponent', () => {
  let component: InstructionsIdentifyComponent;
  let fixture: ComponentFixture<InstructionsIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsIdentifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionsIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
