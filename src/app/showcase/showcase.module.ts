import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';
import { BbcDaycareComponent } from './bbc-daycare/bbc-daycare.component';
import { BbcGalleryComponent } from './bbc-daycare/bbcgallery/bbcgallery.component';
import { BrilliantMindsComponent } from './brilliant-minds/brilliant-minds.component';
import { BrilliantMindsGalleryComponent } from './brilliant-minds/brilliant-minds-gallery/brilliant-minds-gallery.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeBookGalleryComponent } from './recipe-book/recipe-book-gallery/recipe-book-gallery.component';
import { MaterialModule } from '../material-icons.module';

const showcaseRoutes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
  },
  {
    path: 'bbcgallery',
    component: BbcGalleryComponent,
  },

  {
    path: 'brilliant-minds-gallery',
    component: BrilliantMindsGalleryComponent,
  },
  { path: 'recipe-book-gallery', component: RecipeBookGalleryComponent },
  {
    path: '**',
    component: ShowcaseComponent,
  },
];
@NgModule({
  declarations: [
    ShowcaseComponent,
    BbcDaycareComponent,
    BbcGalleryComponent,
    BrilliantMindsComponent,
    BrilliantMindsGalleryComponent,
    RecipeBookComponent,
    RecipeBookGalleryComponent,
  ],
  imports: [MaterialModule, RouterModule.forChild(showcaseRoutes)],
  exports: [RouterModule],
})
export class ShowcaseModule {}
