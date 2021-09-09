import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LajinhaComponent } from './lajinha.component';

describe('LajinhaComponent', () => {
  let component: LajinhaComponent;
  let fixture: ComponentFixture<LajinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LajinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LajinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
