import canHandleNullOrUndefined from '../canHandleNullOrUndefined';

describe(`canHandleNullOrUndefined`, () => {
  test(`It checks if a value is null or undefined and the member is nullable`, () => {
    expect(canHandleNullOrUndefined({
      config: {
        nullable: false,
      },
      entity: class {
        static decoratedMembers = new Map();
      },
      key: ``,
      value: null
    })).toBeFalsy();

    expect(canHandleNullOrUndefined({
      config: {
        nullable: false,
      },
      entity: class {
        static decoratedMembers = new Map();
      },
      key: ``,
      value: undefined
    })).toBeFalsy();

    expect(canHandleNullOrUndefined({
      config: {
        nullable: true,
      },
      entity: class {
        static decoratedMembers = new Map();
      },
      key: ``,
      value: null
    })).toBeTruthy();

    expect(canHandleNullOrUndefined({
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
