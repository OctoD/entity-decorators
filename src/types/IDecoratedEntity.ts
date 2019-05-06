import IClass from './IClass';
import IDecoratedProperty from './IDecoratedProperty';

export default interface IDecoratedEntity<T = unknown> extends IClass<T> {
  decoratedMembers: Map<string | symbol, IDecoratedProperty>;
  strict?: boolean;
}
