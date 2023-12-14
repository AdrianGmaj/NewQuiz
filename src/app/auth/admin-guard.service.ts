import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {


  constructor(private router: Router,
    private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.auth.signedAsAdmin().pipe(
      map(response => {
        if (!response) {
          this.auth.cleanSession();
          return this.router.createUrlTree(['/sign-in'])
        }

        return true;
      })
    )
  }

}
