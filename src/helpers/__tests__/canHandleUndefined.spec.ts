import canHandleUndefined from '../canHandleUndefined';
import { decorationsToken } from '../getClassDecorations';

describe(`canHandleUndefined`, () => {
  test(`It checks if a value is undefined and the member is nullable`, () => {
    expect(canHandleUndefined({
      config: {
        nullable: false,
      },
      entity: class {
        static [decorationsToken] = new Map();
      } as any,
      key: ``,
      value: undefined
    })).toBeFalsy();

    expect(canHandleUndefined({
      config: {
        nullable: true,
      },
      entity: class {
        static [decorationsToken] = new Map();
      } as any,
      key: ``,
      value: undefined
    })).toBeTruthy();
  });
});
