import IConfigurationDefaults from './IConfigurationDefaults';
import IDecoratedEntity from './IDecoratedEntity';

export interface IMapperFunctionArg<TConfiguration extends IConfigurationDefaults<T> = {}, T = unknown> {
  config: TConfiguration;
  entity: IDecoratedEntity;
  key: string;
  value: unknown;
}

type MapperFunction<TConfiguration extends IConfigurationDefaults<T> = {}, T = unknown> = (argument: IMapperFunctionArg<TConfiguration, T>) => unknown;

export default MapperFunction;
