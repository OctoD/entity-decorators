import { IMapperFunctionArg } from '../types/MapperFunction';
import IConfigurationDefaults from '../types/IConfigurationDefaults';

export default function canHandleUndefined<T extends IConfigurationDefaults>(arg: IMapperFunctionArg<T>) {
  return arg.config.nullable && arg.value === undefined;
}
