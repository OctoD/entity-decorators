import ToString from '../ToString';
import { validateEntity } from '../../helpers/validateEntity';
import RequiredPropertyError from '../../errors/RequiredPropertyError';

describe(`ToString`, () => {
  it(`Converts to string every value passed`, () => {
    class Test {
      @ToString()
      foobar: number = 0;
      @ToString()
      barbaz: number[] = [1, 2, 3];
      @ToString()
      helloworld = null;
      @ToString()
      undefined = undefined;
    }

    const decorated = validateEntity(Test, new Test());

    expect(decorated.foobar).toBe(`0`);
    expect(decorated.barbaz).toBe(`1,2,3`);
    expect(decorated.helloworld).toBe(``);
    expect(decorated.undefined).toBe(``);
  });

  it(`Can be nullable`, () => {
    class Test {
      @ToString({
        nullable: true,
      })
      helloworld = null;
    }

    const decorated = validateEntity(Test, new Test());

    expect(decorated.helloworld).toBe(null);
  });

  it(`Can be required`, () => {
    class Test {
      @ToString({
        required: true,
      })
      helloworld = undefined;
    }

    expect(() => validateEntity(Test, new Test())).toThrowError();
  });

  it(`throws if set to strict and a type different from string is used`, () => {
    class WillFail {
      @ToString({
        strict: true,
      })
      helloworld = null;
    }

    class WillSucceed {
      @ToString({
        strict: true,
      })
      helloworld = `null`;
    }

    expect(() => validateEntity(WillFail, new WillFail())).toThrowError();
    expect(() => validateEntity(WillSucceed, new WillSucceed())).not.toThrowError();
  });

  it(`throws if set to strict and nullable and a type different from string or null is used`, () => {
    class WillFail {
      @ToString({
        strict: true,
      })
      helloworld = null;
    }

    class WillSucceed {
      @ToString({
        strict: true,
        nullable: true,
      })
      helloworld = null;
    }

    expect(() => validateEntity(WillFail, new WillFail())).toThrowError();
    expect(() => validateEntity(WillSucceed, new WillSucceed())).not.toThrowError();
  });
});
