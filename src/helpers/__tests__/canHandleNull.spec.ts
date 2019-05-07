import canHandleNull from '../canHandleNull';

describe(`canHandleNull`, () => {
  test(`It checks if a value is null and the member is nullable`, () => {
    expect(canHandleNull({
      config: {
        nullable: false,
      },
      entity: class {
        static decoratedMembers = new Map();
      },
      key: ``,
      value: null
    })).toBeFalsy();

    expect(canHandleNull({
      config: {
        nullable: true,
      },
      entity: class {
        static decoratedMembers = new Map();
      },
      key: ``,
      value: null
    })).toBeTruthy();
  });
});
