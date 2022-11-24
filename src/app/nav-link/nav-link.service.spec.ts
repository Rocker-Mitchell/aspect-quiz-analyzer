import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {NavLinkService} from './nav-link.service';

@Component({selector: 'app-one-stub', template: ''})
class OneStubComponent {}

@Component({selector: 'app-two-stub', template: ''})
class TwoStubComponent {}

describe('NavLinkService', () => {
  let service: NavLinkService;

  const setup = (routes: Routes = []) => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [NavLinkService],
    });
    service = TestBed.inject(NavLinkService);
  };

  it('should be created', () => {
    setup();
    expect(service).toBeTruthy();
  });

  it('should generate navigation links from router config', () => {
    setup([
      {
        path: 'one',
        component: OneStubComponent,
        data: {
          navLinkLabel: 'Route One',
        },
      },
      {
        path: 'two',
        component: TwoStubComponent,
        data: {
          navLinkLabel: 'Route Two',
        },
      },
    ]);
    const navLinks = service.getNavLinks();
    expect(navLinks).toEqual([
      {path: 'one', label: 'Route One'},
      {path: 'two', label: 'Route Two'},
    ]);
  });

  it('should filter to route configs with navigation link data', () => {
    setup([
      {
        path: 'one',
        component: OneStubComponent,
      },
      {
        path: 'two',
        component: TwoStubComponent,
        data: {
          navLinkLabel: 'Route Two',
        },
      },
    ]);
    const navLinks = service.getNavLinks();
    expect(navLinks).toEqual([{path: 'two', label: 'Route Two'}]);
  });

  it('should order navigation links', () => {
    setup([
      {
        path: 'two',
        component: TwoStubComponent,
        data: {
          navLinkLabel: 'Route Two',
          navLinkOrder: 2,
        },
      },
      {
        path: 'one',
        component: OneStubComponent,
        data: {
          navLinkLabel: 'Route One',
          navLinkOrder: 1,
        },
      },
    ]);
    const navLinks = service.getNavLinks();
    expect(navLinks).toEqual([
      {path: 'one', label: 'Route One'},
      {path: 'two', label: 'Route Two'},
    ]);
  });

  it('should prefer sorting navigation links with order before unordered links', () => {
    setup([
      {
        path: 'one',
        component: OneStubComponent,
        data: {
          navLinkLabel: 'Route One',
        },
      },
      {
        path: 'two',
        component: TwoStubComponent,
        data: {
          navLinkLabel: 'Route Two',
          navLinkOrder: 2,
        },
      },
    ]);
    const navLinks = service.getNavLinks();
    expect(navLinks).toEqual([
      {path: 'two', label: 'Route Two'},
      {path: 'one', label: 'Route One'},
    ]);
  });

  it('should handle navigation links with explicitly undefined order', () => {
    setup([
      {
        path: 'one',
        component: OneStubComponent,
        data: {
          navLinkLabel: 'Route One',
          navLinkOrder: undefined,
        },
      },
      {
        path: 'two',
        component: TwoStubComponent,
        data: {
          navLinkLabel: 'Route Two',
          navLinkOrder: 2,
        },
      },
    ]);
    const navLinks = service.getNavLinks();
    expect(navLinks).toEqual([
      {path: 'two', label: 'Route Two'},
      {path: 'one', label: 'Route One'},
    ]);
  });
});
