import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragBallComponent } from './drag-ball.component';

describe('DragBallComponent', () => {
  let component: DragBallComponent;
  let fixture: ComponentFixture<DragBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragBallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
