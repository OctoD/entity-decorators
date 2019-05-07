import ToBoolean from '../ToBoolean';
import { validateEntity } from '../../helpers/validateEntity';

describe(`ToBoolean`, () => {
  it(`Decorates a member, and will return it's boolean value`, () => {
    class Test {
      @ToBoolean()
      foo: string = ``;
      @ToBoolean()
      bar: string = `123`;
      @ToBoolean()
      baz: number = -1;
      @ToBoolean()
      helloworld: number = 0;
    }

    const decorated = validateEntity(Test, new Test());

    expect((decorated.foo as any) === false).toBeTruthy()
    expect((decorated.bar as any) === true).toBeTruthy()
    expect((decorated.baz as any) === true).toBeTruthy()
    expect((decorated.helloworld as any) === false).toBeTruthy()
  });
});
