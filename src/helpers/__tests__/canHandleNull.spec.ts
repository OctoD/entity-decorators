import canHandleNull from '../canHandleNull';
import { decorationsToken } from '../getClassDecorations';

describe(`canHandleNull`, () => {
  test(`It checks if a value is null and the member is nullable`, () => {
    expect(canHandleNull({
      config: {
        nullable: false,
      },
      entity: class {
        static [decorationsToken] = new Map();
      } as any,
      key: ``,
      value: null
    })).toBeFalsy();

    expect(canHandleNull({
      config: {
        nullable: true,
      },
      entity: class {
        static [decorationsToken] = new Map();
      } as any,
      key: ``,
      value: null
    })).toBeTruthy();
  });
});
