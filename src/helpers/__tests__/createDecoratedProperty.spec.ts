import createDecoratedProperty from '../createDecoratedProperty';
import getClassDecorations from '../getClassDecorations';

describe(`createDecoratedProperty`, () => {
  it(`Creates a decoratedMembers property on a class constructor if is not defined`, () => {
    const instance = new class Test {};

    createDecoratedProperty(instance, `foo`);

    expect(getClassDecorations(instance.constructor as any)).toHaveProperty(`decoratedMembers`);
    expect(getClassDecorations(instance.constructor as any).decoratedMembers instanceof Map).toBeTruthy();
  });

  it(`Creates a decorated property in decoratedMembers on a class constructor if is not defined`, () => {
    const instance = new class Test { };

    createDecoratedProperty(instance, `foo`);

    expect(getClassDecorations(instance.constructor as any).decoratedMembers.get(`foo`)).toBeDefined();
    expect(getClassDecorations(instance.constructor as any).decoratedMembers.get(`foo`)).toHaveProperty(`key`);
  });
});
