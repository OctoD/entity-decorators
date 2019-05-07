import ToNumber from '../ToNumber';
import { validateEntity } from '../../helpers/validateEntity';

describe(`ToNumber`, () => {
  it(`Converts to number`, () => {
    const date = new Date();
    
    class Test {
      @ToNumber()
      foo: number = 10;
      @ToNumber()
      bar: string = `123`;
      @ToNumber()
      baz: Date = date;
    }

    const decorated = validateEntity(Test, new Test());

    expect(decorated.foo).toBe(10);
    expect(decorated.bar).toBe(123);
    expect(decorated.baz).toBe(date.getTime());
  });

  it(`can be nullable`, () => {
    class Foo {
      @ToNumber({
        nullable: true,
      })
      bar = null;
    }

    const decorated = validateEntity(Foo, new Foo());

    expect(decorated.bar).toBe(null);
  });

  it(`Will throw if required and the decorated member is undefined`, () => {
    class Foo {
      @ToNumber({
        required: true,
      })
      bar = undefined;
    }

    expect(() => validateEntity(Foo, new Foo())).toThrowError();
  });

  it(`will throw if strict and a type different from number is set`, () => {
    class Bar {
      @ToNumber({
        strict: true,
      })
      helloworld = `123`;
    }

    expect(() => validateEntity(Bar, new Bar())).toThrowError();
  });

  it(`will throw if strict and nullable and a type different from number or null is set`, () => {
    class WillDieBadly {
      @ToNumber({
        strict: true,
      })
      helloworld = `123`;
    }

    class TyrionLannister {
      @ToNumber({
        strict: true,
        nullable: true,
      })
      helloworld = null;
    }

    expect(() => validateEntity(WillDieBadly, new WillDieBadly())).toThrowError();
    expect(() => validateEntity(TyrionLannister, new TyrionLannister())).not.toThrowError();
  });
});
