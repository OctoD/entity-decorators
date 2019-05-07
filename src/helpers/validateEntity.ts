import IDecoratedEntity from '../types/IDecoratedEntity';
import { IFullyDecoratedProperty } from '../types/IDecoratedProperty';
import { IClass } from '..';
import getClassDecorations from './getClassDecorations';

export function validateEntity<T extends object>(EntityConstructor: IClass<T>, entity: T): T {
  const decorations = getClassDecorations(EntityConstructor);
  const decoratedMembers = decorations.decoratedMembers;

  for (const [key, property] of decoratedMembers.entries()) {
    const value = (entity as any)[key];
    
    (entity as any)[key] = (property as IFullyDecoratedProperty).mapper.mapper({
      config: Object.assign((property as IFullyDecoratedProperty).mapper.config, {
        strict: decorations.strict,
      }),
      entity: EntityConstructor as IDecoratedEntity,
      key,
      value,
    });
  }

  return entity;
}
