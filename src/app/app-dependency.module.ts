import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const APP_DEPENDENCY = [
  // angular dependencies
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
];

@NgModule({
  imports: APP_DEPENDENCY,
  exports: APP_DEPENDENCY
})
export class AppDependencyModule {
}
