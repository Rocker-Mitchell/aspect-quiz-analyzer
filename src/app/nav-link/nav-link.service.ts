import {Injectable} from '@angular/core';
import {Route, Router} from '@angular/router';
import {NavLink} from './nav-link';
import {isNavLinkRouteData, NavLinkRouteData} from './nav-link-route-data';

interface NavLinkRoute extends Route {
  path: string;
  data: Required<NavLinkRouteData>;
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
   * @returns Array of navigation link objects, sorted by order if set.
   */
  public getNavLinks(): NavLink[] {
    return this.router.config
      .filter(isNavLinkRoute)
      .sort((a, b) => {
        const aOrder = a.data.navLink.order;
        const bOrder = b.data.navLink.order;
        if (bOrder === undefined) {
          // a should come first if defined
          return aOrder !== undefined ? -1 : 0;
        } else if (aOrder === undefined) {
          // b should come first since it's defined
          return 1;
        }
        return aOrder - bOrder;
      })
      .map((route) => ({path: route.path, label: route.data.navLink.label}));
  }
}
