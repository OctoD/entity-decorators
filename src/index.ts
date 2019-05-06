import IClass from './types/IClass';
import MapArrayError from './errors/MapArrayError';
import IDecoratedEntity from './types/IDecoratedEntity';
import { build } from './helpers/build';

export function map<T extends object>(Type: IClass<T>, item: unknown): T {
  return build(Type as IDecoratedEntity<T>, item as T);
}

export function mapArrayOf<T extends object>(Type: IClass<T>, items: unknown[]): T[] {
  if (Object.prototype.toString.call(items) !== '[object Array]') {
    throw new MapArrayError(Type, items);
  }
  
  return items.map(item => build(Type as IDecoratedEntity<T>, item as T));
}

export {
  IClass,
}

export default {
  map,
  mapArrayOf,
}
