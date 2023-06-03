declare namespace jasmine {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Matchers<T> {
    /**
     * Expect the actual value is not `null` and not `undefined`.
     */
    toBeAnything(): void;
  }
}
