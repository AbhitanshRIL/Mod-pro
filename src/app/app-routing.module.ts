// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ModerationComponent } from './moderation/moderation.component';
// import { ModerationFormComponent } from './moderation-form/moderation-form.component';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule { 
//   {path:'', component: ModerationComponent},
//   {path:'Form', component: ModerationFormComponent}
// }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModerationComponent } from './moderation/moderation.component';
import { ModerationFormComponent } from './moderation-form/moderation-form.component';

const routes: Routes = [
  { path: '', component: ModerationComponent },
  { path: 'Form', component: ModerationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
