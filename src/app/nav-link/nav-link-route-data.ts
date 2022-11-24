/**
 * Route data interface to define a route as a navigation link.
 */
export interface NavLinkRouteData {
  navLinkLabel: string;
  navLinkOrder?: number;
}

export function isNavLinkRouteData(data: any): data is NavLinkRouteData {
  return (
    'navLinkLabel' in data &&
    typeof data.navLinkLabel === 'string' &&
    (!('navLinkOrder' in data) ||
      data.navLinkOrder === undefined ||
      typeof data.navLinkOrder === 'number')
  );
}
