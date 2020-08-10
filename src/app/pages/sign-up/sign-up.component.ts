import { Component, OnInit } from '@angular/core';
import { SignUpApiService, SignUpData, SignUpErrorResponse, SignUpResponse } from 'src/app/pages/sign-up/sign-up.api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.const';

export enum SIGN_UP_FORM_VALUES {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password'
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [
    SignUpApiService
  ]
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public SIGN_UP_FORM_VALUES = SIGN_UP_FORM_VALUES;
  public submitted = false;
  public loading = false;
  public responseErrorText: string;

  constructor(private readonly signUpApiService: SignUpApiService,
              private readonly fb: FormBuilder,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.submit(this.signUpForm.getRawValue());
  }

  private submit(data: SignUpData) {
    this.loading = true;
    this.signUpApiService.doSignUp(data)
      .subscribe(
        (response: SignUpResponse) => {
          this.loading = false;
          this.router.navigate([APP_ROUTES.GREETING]);
        },
        (errorResponse: SignUpErrorResponse) => {
          this.loading = false;
          this.responseErrorText = errorResponse.error.errors.pop().message;
          console.warn(errorResponse);
        }
      );
  }

  public controlHasError(formControlName: SIGN_UP_FORM_VALUES): boolean {
    return this.signUpForm.get(formControlName).invalid;
  }

  private initForm() {
    this.signUpForm = this.fb.group({
      [SIGN_UP_FORM_VALUES.FIRST_NAME]: [
        null,
        Validators.compose(
          [
            Validators.required
          ]
        )
      ],
      [SIGN_UP_FORM_VALUES.LAST_NAME]: [
        null,
        Validators.compose(
          [
            Validators.required
          ]
        )
      ],
      [SIGN_UP_FORM_VALUES.EMAIL]: [
        null,
        Validators.compose(
          [
            Validators.required,
            Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
          ]
        )
      ],
      [SIGN_UP_FORM_VALUES.PASSWORD]: [
        null,
        Validators.compose(
          [
            Validators.required
          ]
        )
      ],
    });
    return this;
  }

}
