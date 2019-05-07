import IMapper from './IMapper';
import IConfigurationDefaults from './IConfigurationDefaults';

export default interface IDecoratedProperty {
  key: string | symbol;
}

export interface IDecoratedPropertyWithMapper extends IDecoratedProperty {
  mapper: IMapper<IConfigurationDefaults>;
}

export interface IFullyDecoratedProperty extends 
  IDecoratedProperty, 
  IDecoratedPropertyWithMapper { }
