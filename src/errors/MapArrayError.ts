import { IClass } from '..';
import StrictTypeError from './StrictTypeError';

export default class MapArrayError extends StrictTypeError {
  public name = `MapArrayError`;
  
  public constructor(Type: IClass, arg: unknown) {
    super(Type, arg);
  }
}