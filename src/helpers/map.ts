import IClass from '../types/IClass';
import IDecoratedEntity from '../types/IDecoratedEntity';
import { build } from './build';

export default function map<T extends object>(Type: IClass<T>, item: unknown): T {
  return build(Type as IDecoratedEntity<T>, item as T);
}
