import IConfigurationDefaults from '../types/IConfigurationDefaults';

import { IMapperFunctionArg } from '../types/MapperFunction';

export default function shouldThrowRequired<T extends IConfigurationDefaults<Z>, Z>(arg: IMapperFunctionArg<T, Z>) {
  return arg.config.required && typeof arg.value === undefined;
}
