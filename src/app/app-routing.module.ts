import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModerationComponent } from './moderation/moderation.component';
// import { ModerationFormComponent } from './moderation-form/moderation-form.component';
import { SubmissionTableComponent } from './submission-table/submission-table.component';
import { KycFormComponent } from './kyc-form/kyc-form.component';
const routes: Routes = [
  { path: 'm', component: ModerationComponent },
  {path:'', component:KycFormComponent},
 
  { path: 'Submit', component:SubmissionTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
