import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModerationComponent } from './moderation/moderation.component';
import { ModerationFormComponent } from './moderation-form/moderation-form.component';
import { SubmissionTableComponent } from './submission-table/submission-table.component';

const routes: Routes = [
  { path: 'F', component: ModerationComponent },
  { path: '', component: ModerationFormComponent },
  { path: 'S', component:SubmissionTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
