import {Injectable} from '@angular/core';
import {Route, Router} from '@angular/router';
import {NavLink} from './nav-link';
import {isNavLinkRouteData, NavLinkRouteData} from './nav-link-route-data';

interface NavLinkRoute {
  path: string;
  data: NavLinkRouteData;
}

function isNavLinkRoute(route: Route): route is NavLinkRoute {
  return (
    route.path !== undefined &&
    route.data !== undefined &&
    isNavLinkRouteData(route.data)
  );
}

/**
 * Generator of navigation links from router configuration.
 */
@Injectable({
  providedIn: 'root',
})
export class NavLinkService {
  constructor(private readonly router: Router) {}

  /**
   * Get navigation links defined from router configuration.
   * @returns Array of navigation link objects, sorted with any specified ordering.
   */
  public getNavLinks(): NavLink[] {
    return this.router.config
      .filter(isNavLinkRoute)
      .sort((a, b) => {
        const aOrder = a.data.navLinkOrder;
        const bOrder = b.data.navLinkOrder;
        if (!bOrder) {
          return !aOrder ? 0 : -1;
        } else if (!aOrder) {
          return 1;
        }
        return aOrder - bOrder;
      })
      .map((route) => ({path: route.path, label: route.data.navLinkLabel}));
  }
}
