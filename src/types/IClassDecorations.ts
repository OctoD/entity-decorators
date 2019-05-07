import IDecoratedProperty from './IDecoratedProperty';

export default interface IClassDecoration {
  decoratedMembers: Map<string | symbol, IDecoratedProperty>;
  strict?: boolean;
}