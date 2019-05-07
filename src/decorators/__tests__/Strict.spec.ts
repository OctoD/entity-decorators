import Strict from '../Strict';

describe(`Strict`, () => {
  it(`Decorates a class`, () => {
    @Strict()
    class Foo {
      
    }
    
    expect((Foo as any)).toBeDefined();
    expect((Foo as any).strict).toBeTruthy();
  });
});
