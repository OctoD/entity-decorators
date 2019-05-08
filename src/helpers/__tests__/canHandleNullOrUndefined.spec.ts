import canHandleNullOrUndefined from '../canHandleNullOrUndefined';
import { decorationsToken } from '../getClassDecorations';

describe(`canHandleNullOrUndefined`, () => {
  test(`It checks if a value is null or undefined and the member is nullable`, () => {
    expect(canHandleNullOrUndefined({
      config: {
        nullable: false,
      },
      entity: class {
        static [decorationsToken] = new Map();
      } as any,
      key: ``,
      value: null
    })).toBeFalsy();

    expect(canHandleNullOrUndefined({
      config: {
        nullable: false,
      },
      entity: class {
        static [decorationsToken] = new Map();
      } as any,
      key: ``,
      value: undefined
    })).toBeFalsy();

    expect(canHandleNullOrUndefined({
      config: {
        nullable: true,
      },
      entity: class {
        static [decorationsToken] = new Map();
      } as any,
      key: ``,
      value: null
    })).toBeTruthy();

    expect(canHandleNullOrUndefined({
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
