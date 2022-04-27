import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrilliantMindsComponent } from './brilliant-minds.component';

describe('BrilliantMindsComponent', () => {
  let component: BrilliantMindsComponent;
  let fixture: ComponentFixture<BrilliantMindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrilliantMindsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrilliantMindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
