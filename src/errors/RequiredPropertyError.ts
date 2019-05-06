export default class RequiredPropertyError extends Error {
  public name = `RequiredPropertyError`;
  
  public constructor(key: string) {
    super(`Required property ${key} cannot be undefined`);
  }
}
