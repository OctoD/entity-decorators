import IDecoratedEntity from '../types/IDecoratedEntity';

export default function Strict(): ClassDecorator {
  return function (TargetClass) {
    const decoratedEntity = TargetClass as unknown as IDecoratedEntity;
    decoratedEntity.strict = true;
  }
}
