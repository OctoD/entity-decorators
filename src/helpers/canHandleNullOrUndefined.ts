import canHandleNull from './canHandleNull';
import canHandleUndefined from './canHandleUndefined';
import IConfigurationDefaults from '../types/IConfigurationDefaults';
import { IMapperFunctionArg } from '../types/MapperFunction';

export default function canHandleNullOrUndefined<T extends IConfigurationDefaults<Z>, Z>(arg: IMapperFunctionArg<T, Z>) {
  return canHandleNull(arg) || canHandleUndefined(arg);
}
