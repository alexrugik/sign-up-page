import { NgModule } from '@angular/core';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { AppDependencyModule } from 'src/app/app-dependency.module';

@NgModule({
  imports: [
    AppDependencyModule
  ],
  declarations: [
    SignUpComponent
  ],
})
export class SignUpModule {
}
