import createToType from '../createToType';
import IDecoratedEntity from '../../types/IDecoratedEntity';
import { IFullyDecoratedProperty } from '../../types/IDecoratedProperty';
import getClassDecorations from '../getClassDecorations';

describe(`createToType`, () => {
  it(`Creates a property decorator`, () => {
    expect(typeof createToType(() => {})).toBe(`function`);
  });

  it(`Can decorate an object property`, () => {
    const decorator = createToType(() => {});

    class Foo {
      @decorator({
        nullable: true,
        required: true,
        strict: true,
      })
      foo!: string;
    };

    expect(getClassDecorations(Foo)).toHaveProperty(`decoratedMembers`);

    const instance = new Foo();
    const decoratedProperty = getClassDecorations(Foo).decoratedMembers.get(`foo`)! as IFullyDecoratedProperty;

    expect(instance.foo).toBeUndefined();
    expect(decoratedProperty).toBeDefined();
    expect(decoratedProperty.key).toBe(`foo`);
    expect(decoratedProperty.nullable).toBeTruthy();
    expect(decoratedProperty.required).toBeTruthy();
    expect(decoratedProperty.strict).toBeTruthy();
    expect(decoratedProperty.mapper).toBeDefined();
    expect(decoratedProperty.mapper.config).toBeDefined();
    expect(decoratedProperty.mapper.entity).toBeDefined();
    expect(decoratedProperty.mapper.mapper).toBeDefined();
    expect(typeof decoratedProperty.mapper.mapper).toBe(`function`);
  });
});
