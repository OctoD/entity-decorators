import canHandleUndefined from '../canHandleUndefined';

describe(`canHandleUndefined`, () => {
  test(`It checks if a value is undefined and the member is nullable`, () => {
    expect(canHandleUndefined({
      config: {
        nullable: false,
      },
      entity: class {
        static decoratedMembers = new Map();
      },
      key: ``,
      value: undefined
    })).toBeFalsy();

    expect(canHandleUndefined({
      config: {
        nullable: true,
      },
      entity: class {
        static decoratedMembers = new Map();
      },
      key: ``,
      value: undefined
    })).toBeTruthy();
  });
});
