import IDecoratedProperty from '../types/IDecoratedProperty';
import getClassDecorations from './getClassDecorations';

/**
 * @export
 * @param {Object} target
 * @param {string} key
 * @returns {IDecoratedProperty}
 */
export default function createDecoratedProperty(target: Object, key: string | symbol): IDecoratedProperty {
  const decoratedEntity = getClassDecorations(target.constructor as any);

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