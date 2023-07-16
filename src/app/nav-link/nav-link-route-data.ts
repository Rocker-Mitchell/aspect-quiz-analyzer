import {Data, Route} from '@angular/router';

/**
 * Route data interface to define a route with a navigation link.
 */
export interface NavLinkRouteData extends Data {
  navLink?: {
    label: string;
    order?: number;
  };
}

export function isNavLinkRouteData(
  data: Data
): data is Required<NavLinkRouteData> {
  if (data.navLink === undefined) {
    return false;
  }
  if (
    data.navLink.label === undefined ||
    typeof data.navLink.label !== 'string'
  ) {
    return false;
  }
  if (
    data.navLink.order !== undefined &&
    typeof data.navLink.order !== 'number'
  ) {
    return false;
  }
  return true;
}

/**
 * Interface to intersect with `Route` to add support for navigation link data.
 *
 * e.g. set type as `Route & WithNavLinkRouteData`.
 */
export interface WithNavLinkRouteData extends Route {
  data?: NavLinkRouteData;
}
