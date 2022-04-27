import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrilliantMindsGalleryComponent } from './brilliant-minds-gallery.component';

describe('BrilliantMindsGalleryComponent', () => {
  let component: BrilliantMindsGalleryComponent;
  let fixture: ComponentFixture<BrilliantMindsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrilliantMindsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrilliantMindsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
