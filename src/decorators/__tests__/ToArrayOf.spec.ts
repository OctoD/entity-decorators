import ToArrayOf from '../ToArrayOf';
import ToNumber from '../ToNumber';
import { validateEntity } from '../../helpers/validateEntity';

describe(`ToArrayOf`, () => {
  it(`Converts an array of types to another array of other types`, () => {
    class CastToMe {
      @ToNumber()
      bar!: string;
    }
    
    class Test {
      @ToArrayOf(CastToMe, {})
      public test: CastToMe[] = [{
        bar: `100`
      }]
    }

    const decorated = validateEntity(Test, new Test());

    expect(Array.isArray(decorated.test)).toBeTruthy();
    expect(decorated.test.length).toBe(1);
    expect(decorated.test[0].bar).toBe(100);
  });

  it(`will throw if in strict and a member is not an instance of Array`, () => {
    class CastedTo {
      @ToNumber()
      bar!: string;
    }
    
    class Success {
      @ToArrayOf(CastedTo, { strict: true }) 
      public test: CastedTo[] = [{
        bar: `100`
      }]
    }

    class Fail {
      @ToArrayOf(CastedTo, { strict: true }) 
      public test!: CastedTo[];
    }

    expect(() => validateEntity(Fail, new Fail())).toThrowError();
    expect(() => validateEntity(Success, new Success())).not.toThrowError();
  });

  it(`will throw if in strict and nullable and a member is not an instance of Array or null`, () => {
    class CastedTo {
      @ToNumber()
      bar!: string;
    }
    
    class Success {
      @ToArrayOf(CastedTo, { strict: true, nullable: true }) 
      public test: CastedTo[] | null = null;
    }

    class Fail {
      @ToArrayOf(CastedTo, { strict: true, nullable: true }) 
      public test!: CastedTo[];
    }

    expect(() => validateEntity(Fail, new Fail())).toThrowError();
    expect(() => validateEntity(Success, new Success())).not.toThrowError();
  });
});
