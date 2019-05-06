import canHandleNull from './canHandleNull';
import canHandleUndefined from './canHandleUndefined';
import IConfigurationDefaults from '../types/IConfigurationDefaults';
import { IMapperFunctionArg } from '../types/MapperFunction';

export default function canHandleNullOrUndefined<T extends IConfigurationDefaults>(arg: IMapperFunctionArg<T>) {
  return canHandleNull(arg) || canHandleUndefined(arg);
}
