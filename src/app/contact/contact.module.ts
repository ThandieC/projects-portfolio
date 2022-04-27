import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  { path: '', component: ContactComponent },
  { path: '**', component: ContactComponent },
];

@NgModule({
  declarations: [ContactComponent],
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule, ContactComponent],
})
export class ContactModule {}
