export default class RequiredPropertyError extends Error {
  public name = `RequiredPropertyError`;
  
  public constructor(key: string | symbol) {
    super(`Required property ${String(key)} cannot be undefined`);
  }
}
