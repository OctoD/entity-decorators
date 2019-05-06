function getTypeOf(Type: unknown): string {
  return Object.prototype.toString.call(Type)
}

export default class StrictTypeError extends Error {
  public name = `StrictTypeError`;
  
  public constructor(Type: unknown, ToType: unknown) {
    super(`Cannot convert ${getTypeOf(Type)} to ${getTypeOf(ToType)}`);
  }
}