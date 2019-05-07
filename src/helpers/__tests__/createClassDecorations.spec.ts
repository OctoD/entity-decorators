import getClassDecorations from '../getClassDecorations';

describe(`createClassDecorations`, () => {
  it(`gets the decoration object on a class`, () => {
    class Test {

    }

    expect(getClassDecorations(Test)).toBeDefined();
  });
});
