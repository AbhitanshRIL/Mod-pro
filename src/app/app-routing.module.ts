import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModerationComponent } from './moderation/moderation.component';
import { ModerationFormComponent } from './moderation-form/moderation-form.component';
import { SubmissionTableComponent } from './submission-table/submission-table.component';

const routes: Routes = [
  { path: 'Moderation', component: ModerationComponent },
  { path: '', component: ModerationFormComponent },
  { path: 'Submit', component:SubmissionTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
