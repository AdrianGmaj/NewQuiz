import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  logIn(value: LogInValue) {
    return this.http.post<LoginResponse>('/api/auth/signin', value)
      .pipe(
        tap((response) => {
          if (response.success) {
            localStorage.setItem('token', response.access_token)
            localStorage.setItem('role', response.role.toString())
          }
        })
      )
    }

    isSignedAsAdmin() {
      return localStorage.getItem('role') === AuthRole.SIGNED_ADMIN.toString()
    }

    signedAsAdmin():Observable<boolean> {
      return this.http.get<boolean>('/api/auth/signedin-admin', this.getAuthOptions())
    }

    getAuthOptions() {
      return {
        headers: {
          'Authorization': `Bearer ${this.getToken()}`
        }
      }
    }

    getToken(): string | null {
      return localStorage.getItem('token')
    }

    cleanSession(): void {
      localStorage.clear();
    }

    signOut() {
      return this.http.post('/api/auth/signout', {})
        .pipe(
          tap(() => {
            this.cleanSession();
          })
        )
    }
}


interface LogInValue {
  email: string;
  password: string
}

interface LoginResponse {
  access_token: string;
  role: number;
  success: boolean
}

enum AuthRole {
  NOT_SIGNED = 0,
  SIGNED_USER = 1,
  SIGNED_ADMIN = 2,
}