import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { APP_ROUTES } from 'src/app/app.const';
import { GreetingComponent } from 'src/app/pages/greeting/greeting.component';

const routes: Routes = [
  {path: APP_ROUTES.SIGN_UP, component: SignUpComponent},
  {path: APP_ROUTES.GREETING, component: GreetingComponent},
  {path: '**', redirectTo: APP_ROUTES.SIGN_UP}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
