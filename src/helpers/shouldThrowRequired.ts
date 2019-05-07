import IConfigurationDefaults from '../types/IConfigurationDefaults';

import { IMapperFunctionArg } from '../types/MapperFunction';

export default function shouldThrowRequired<T extends IConfigurationDefaults>(arg: IMapperFunctionArg<T>) {
  return arg.config.required && arg.value === undefined;
}
