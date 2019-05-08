import ToDate from '../ToDate';
import { validateEntity } from '../../helpers/validateEntity';

describe(`ToDate`, () => {
  it(`converts string or number to a Date instance`, () => {
    const date = new Date();

    class TestClass {
      @ToDate()
      test: string = date.toJSON();
      @ToDate()
      test2: number = date.getTime();
    }

    const decorated = validateEntity(TestClass, new TestClass());

    expect(decorated.test).toBeDefined()
    expect(decorated.test2).toBeDefined()
    expect(decorated.test as any instanceof Date).toBeTruthy();
    expect(decorated.test2 as any instanceof Date).toBeTruthy();
  });

  it(`will throw if in strict and a member is not an instance of Date`, () => {
    const date = new Date();

    class Failure {
      @ToDate({
        strict: true,
      })
      test: string = date.toJSON();
    }

    class Success {
      @ToDate({
        strict: true,
      })
      test = new Date();
    }

    expect(() => validateEntity(Failure, new Failure())).toThrowError();
    expect(() => validateEntity(Success, new Success())).not.toThrowError();
  });

  it(`will throw if in strict and nullable and a member is not an instance of Date or null`, () => {
    const date = new Date();

    class Failure {
      @ToDate({
        strict: true,
        nullable: true,
      })
      test: string = date.toJSON();
    }

    class Success {
      @ToDate({
        strict: true,
        nullable: true,
      })
      test = new Date();

      @ToDate({
        strict: true,
        nullable: true,
      })
      test2 = null;
    }

    expect(() => validateEntity(Failure, new Failure())).toThrowError();
    expect(() => validateEntity(Success, new Success())).not.toThrowError();

    const decorated = validateEntity(Success, new Success());

    expect(decorated.test instanceof Date).toBeTruthy();
    expect(decorated.test2).toBeNull();
  });
});
