import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietRequestsComponent } from './pages/diet-requests/diet-requests.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SubmitDietPlanComponent } from './pages/submit-diet-plan/submit-diet-plan.component';
import { SubmitInbodyComponent } from './pages/submit-inbody/submit-inbody.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'submit-inbody', component: SubmitInbodyComponent },
  { path: 'diet-plan-request', component: DietRequestsComponent },
  { path: 'submit-diet-plan/:id/:userId', component: SubmitDietPlanComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
