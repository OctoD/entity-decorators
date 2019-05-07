import ToClass from '../ToClass';
import ToString from '../ToString';
import { validateEntity } from '../../helpers/validateEntity';

describe(`ToClass`, () => {
  it(`Builds and validate a class`, () => {
    class classA {
      @ToString()
      bar: number = 1000;
    }
    
    class classB {
      @ToClass({
        Type: classA
      })
      instanceOfA!: classA
    }

    const decorated = validateEntity(classB, new classB());

    expect(decorated.instanceOfA).not.toBeUndefined();
    expect(decorated.instanceOfA.bar).toBe(`1000`);
  })
});
