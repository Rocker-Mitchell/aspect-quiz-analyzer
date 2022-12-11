import {isNavLinkRouteData} from './nav-link-route-data';

describe('isNavLinkRouteData', () => {
  it('should handle undefined navLink as valid', () => {
    expect(isNavLinkRouteData({dummy: 'dummy'}))
      .withContext('expected property not set to be valid')
      .toBeTrue();
    expect(isNavLinkRouteData({navLink: undefined}))
      .withContext('expected property explicitly set as undefined to be valid')
      .toBeTrue();
  });

  it('should handle navLink not being an object as invalid', () => {
    expect(isNavLinkRouteData({navLink: 'dummy'})).toBeFalse();
  });

  it('should handle undefined label as invalid', () => {
    expect(isNavLinkRouteData({navLink: {}}))
      .withContext('expected property not set to be invalid')
      .toBeFalse();
    expect(isNavLinkRouteData({navLink: {label: undefined}}))
      .withContext(
        'expected property explicitly set as undefined to be invalid'
      )
      .toBeFalse();
  });

  it('should handle label not being a string as invalid', () => {
    expect(isNavLinkRouteData({navLink: {label: 2}})).toBeFalse();
  });

  it('should handle label being a string as valid', () => {
    expect(isNavLinkRouteData({navLink: {label: '2'}})).toBeTrue();
  });

  it('should handle undefined order as valid', () => {
    expect(isNavLinkRouteData({navLink: {label: 'label'}}))
      .withContext('expected property not set to be valid')
      .toBeTrue();
    expect(isNavLinkRouteData({navLink: {label: 'label', order: undefined}}))
      .withContext('expected property explicitly set as undefined to be valid')
      .toBeTrue();
  });

  it('should handle order not being a number as invalid', () => {
    expect(
      isNavLinkRouteData({navLink: {label: 'label', order: '2'}})
    ).toBeFalse();
  });

  it('should handle order being a number as valid', () => {
    expect(
      isNavLinkRouteData({navLink: {label: 'label', order: 2}})
    ).toBeTrue();
  });
});
