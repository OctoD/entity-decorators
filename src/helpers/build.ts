import { validateEntity } from './validateEntity';
import IDecoratedEntity from '../types/IDecoratedEntity';

export function build<T extends object>(Type: IDecoratedEntity<T>, data: T): T {
  return validateEntity(Type, Object.assign(new Type(), data));
}
