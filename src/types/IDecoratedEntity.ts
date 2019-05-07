import IClass from './IClass';
import IClassDecoration from './IClassDecorations';

export default interface IDecoratedEntity<T = unknown> extends IClass<T> {
  '@@decorations': IClassDecoration;
}
