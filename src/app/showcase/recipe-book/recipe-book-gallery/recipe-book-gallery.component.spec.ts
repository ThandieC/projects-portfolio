import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookGalleryComponent } from './recipe-book-gallery.component';

describe('RecipeBookGalleryComponent', () => {
  let component: RecipeBookGalleryComponent;
  let fixture: ComponentFixture<RecipeBookGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBookGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
