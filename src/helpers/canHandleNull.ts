import { IMapperFunctionArg } from '../types/MapperFunction';
import IConfigurationDefaults from '../types/IConfigurationDefaults';

export default function canHandleNull<T extends IConfigurationDefaults<Z>, Z>(arg: IMapperFunctionArg<T, Z>) {
  return arg.config.nullable && arg.value === null;
}
