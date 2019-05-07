import createToType from '../createToType';
import { validateEntity } from '../validateEntity';

describe(`validateEntity`, () => {
  it(`validates and parse an entity`, () => {
    const mockValidator = jest.fn(config => {
      if (typeof config.value === 'string') {
        return config.value.length;
      }

      if (typeof config.value === 'number') {
        return config.value;
      }

      return 0;
    });
    const decorator = createToType(mockValidator);
    const barvalue = `hello world`;
    
    class Entity {
      @decorator()
      public foo!: number;
      @decorator()
      public bar: string = barvalue;
    }
    
    expect(() => validateEntity(Entity, new Entity())).not.toThrowError();
    expect(mockValidator).toBeCalled();
    expect(mockValidator).toBeCalledTimes(2);

    const validated = validateEntity(Entity, new Entity());

    expect(validated.bar).toBeDefined();
    expect(validated.foo).toBeDefined();
    expect(validated.bar).toBe(barvalue.length);
    expect(validated.foo).toBe(0);
  });
});
