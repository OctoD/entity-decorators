import MapperFunction from './MapperFunction';
import IConfigurationDefaults from './IConfigurationDefaults';
import IDecoratedEntity from './IDecoratedEntity';

export default interface IMapper<TConfiguration extends IConfigurationDefaults = {}> {
  config: TConfiguration;
  entity: IDecoratedEntity;
  mapper: MapperFunction<TConfiguration>;
}
