import IDecoratedEntity from '../types/IDecoratedEntity';
import IDecoratedProperty from '../types/IDecoratedProperty';

/**
 * @export
 * @param {Object} target
 * @param {string} key
 * @returns {IDecoratedProperty}
 */
export default function createDecoratedProperty(target: Object, key: string | symbol): IDecoratedProperty {
  const decoratedEntity = target.constructor as IDecoratedEntity;
  
  if (!decoratedEntity.decoratedMembers) {
    decoratedEntity.decoratedMembers = new Map();
  }

  if (!decoratedEntity.decoratedMembers.has(key)) {
    decoratedEntity.decoratedMembers.set(key, {
      key,
    });
  }

  return decoratedEntity.decoratedMembers.get(key)!;
}