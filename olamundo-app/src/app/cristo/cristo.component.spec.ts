import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CristoComponent } from './cristo.component';

describe('CristoComponent', () => {
  let component: CristoComponent;
  let fixture: ComponentFixture<CristoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CristoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CristoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
