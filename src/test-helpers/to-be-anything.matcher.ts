export function toBeAnything(
  util: jasmine.MatchersUtil
): jasmine.CustomMatcher {
  return {
    compare: function <T>(actual: T): jasmine.CustomMatcherResult {
      const pass = util.equals(actual, jasmine.anything());

      const ppActual = util.pp(actual);
      const message = pass
        ? `Expected ${ppActual} to not be anything (aka null or undefined).`
        : `Expected ${ppActual} to be anything (aka not null and not undefined).`;

      return {pass, message};
    },
  };
}
