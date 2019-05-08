import Strict from '../Strict';
import { decorationsToken } from '../../helpers/getClassDecorations';

describe(`Strict`, () => {
  it(`Decorates a class`, () => {
    @Strict()
    class Foo {
      
    }
    
    expect((Foo as any)).toBeDefined();
    expect((Foo as any)[decorationsToken].strict).toBeTruthy();
  });
});
