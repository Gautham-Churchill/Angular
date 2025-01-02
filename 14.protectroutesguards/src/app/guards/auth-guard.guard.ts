import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { session } from '../utils/session';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const protectedRoute: string[] = ['/about', '/dashboard'];
  return protectedRoute.includes(state.url) && !session ? router.navigate(['/']) : true;
};
