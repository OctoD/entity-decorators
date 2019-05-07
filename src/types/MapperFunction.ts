import IConfigurationDefaults from './IConfigurationDefaults';
import IDecoratedEntity from './IDecoratedEntity';

export interface IMapperFunctionArg<TConfiguration extends IConfigurationDefaults> {
  config: TConfiguration;
  entity: IDecoratedEntity;
  key: string | symbol;
  value: unknown;
}

type MapperFunction<TConfiguration extends IConfigurationDefaults> = (argument: IMapperFunctionArg<TConfiguration>) => unknown;

export default MapperFunction;
