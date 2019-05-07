import MapperFunction from '../types/MapperFunction';
import createDecoratedProperty from './createDecoratedProperty';
import { IDecoratedPropertyWithMapper } from '../types/IDecoratedProperty';
import IConfigurationDefaults from '../types/IConfigurationDefaults';
import IDecoratedEntity from '../types/IDecoratedEntity';
import { decorationsToken } from './getClassDecorations';

export default function createToType<TConfiguration extends IConfigurationDefaults = IConfigurationDefaults>(mapper: MapperFunction<TConfiguration>): (config?: TConfiguration) => PropertyDecorator {
  return function(config: TConfiguration = <TConfiguration> {}) {
    return function(target, key) {
      const decoratedProperty = createDecoratedProperty(target, key) as IDecoratedPropertyWithMapper;

      if (decoratedProperty.mapper !== undefined) {
        throw new Error(`Key ${String(key)} is already decorated with a mapper decorator`);
      }

      if (config.nullable !== undefined && decoratedProperty.nullable === undefined) {
        decoratedProperty.nullable = config.nullable;
      }

      if (config.required !== undefined && decoratedProperty.required === undefined) {
        decoratedProperty.required = config.required;
      }

      if (config.strict !== undefined) {
        decoratedProperty.strict = config.strict;
      } else if ((target.constructor as IDecoratedEntity)[decorationsToken].strict) {
        decoratedProperty.strict = true;
      }

      decoratedProperty.mapper = {
        entity: target.constructor as IDecoratedEntity,
        config,
        mapper: mapper as any,
      };
    }
  }
}
