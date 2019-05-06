import IClass from './types/IClass';
import MapArrayError from './errors/MapArrayError';
import { validateEntity } from './helpers/validateEntity';
import IDecoratedEntity from './types/IDecoratedEntity';

export function build<T extends object>(Type: IDecoratedEntity<T>, ... args: unknown[]): T {
  return validateEntity(Type, new Type(...args));
}

export function map<T extends object>(Type: IClass<T>, item: unknown): T {
  return build(Type as IDecoratedEntity<T>);
}

export function mapArrayOf<T extends object>(Type: IClass<T>, items: unknown[]): T[] {
  if (Object.prototype.toString.call(items) !== '[object Array]') {
    throw new MapArrayError(Type, items);
  }
  
  return items.map(item => build(Type as IDecoratedEntity<T>, item));
}

export {
  IClass,
}

export default {
  map,
  mapArrayOf,
}
