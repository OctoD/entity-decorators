import IMapper from './IMapper';

export default interface IDecoratedProperty {
  key: string | symbol;
  nullable?: boolean;
  required?: boolean;
  strict?: boolean;
}

export interface IDecoratedPropertyWithMapper extends IDecoratedProperty {
  mapper: IMapper;
}

export interface IFullyDecoratedProperty extends 
  IDecoratedProperty, 
  IDecoratedPropertyWithMapper { }
