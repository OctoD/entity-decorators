import shouldThrowRequired from '../shouldThrowRequired';

describe(`shouldThrowRequired`, () => {
  it(`Suggest if an error should be thrown if a property is marked as required an it's value is undefined`, () => {
    expect(
      shouldThrowRequired({
        config: {
          required: true,
        },
        entity: class {
          static decoratedMembers = new Map();
        },
        key: `foo`,
        value: undefined,
      })
    ).toBeTruthy();

    expect(
      shouldThrowRequired({
        config: {
          required: true,
        },
        entity: class {
          static decoratedMembers = new Map();
        },
        key: `foo`,
        value: null,
      })
    ).toBeFalsy();

    expect(
      shouldThrowRequired({
        config: {
          required: false,
        },
        entity: class {
          static decoratedMembers = new Map();
        },
        key: `foo`,
        value: undefined,
      })
    ).toBeFalsy();
  });
});
