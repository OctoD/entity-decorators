export default interface IClass<T = unknown> {
  new (... args: any[]): T;
  prototype: T;
}
