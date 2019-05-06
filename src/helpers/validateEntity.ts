import IDecoratedEntity from '../types/IDecoratedEntity';
import { IFullyDecoratedProperty } from '../types/IDecoratedProperty';

export function validateEntity<T extends object>(EntityConstructor: IDecoratedEntity, entity: T): T {
  const keys = Object.keys(entity);

  for (let i = 0; i < keys.length; i++) {
    if (EntityConstructor.decoratedMembers[keys[i]] === undefined) {
      continue;
    }

    const property = EntityConstructor.decoratedMembers[keys[i]] as IFullyDecoratedProperty;

    entity[keys[i]] = property.mapper.mapper({
      config: property.mapper.config,
      entity: EntityConstructor,
      key: keys[i],
      value: entity[keys[i]],
    });
  }

  return entity;
}
