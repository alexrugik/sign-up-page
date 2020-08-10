import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpError {
  detail: string;
  message: string;
  path: string;
  type: string;
}

export interface SignUpErrorResponse {
  error: {
    errors: SignUpError[]
  };
}

export interface SignUpResponse {
  message: string;
  token: string;
}

@Injectable()
export class SignUpApiService {
  constructor(private readonly http: HttpClient) {
  }

  doSignUp(data: SignUpData): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>('https://api.raisely.com/v3/signup', {
      campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
      data
    });
  }
}
