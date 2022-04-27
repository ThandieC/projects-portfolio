import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcDaycareComponent } from './bbc-daycare.component';

describe('BbcDaycareComponent', () => {
  let component: BbcDaycareComponent;
  let fixture: ComponentFixture<BbcDaycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbcDaycareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcDaycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
