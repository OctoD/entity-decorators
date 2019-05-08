import getClassDecorations from '../helpers/getClassDecorations';
import IDecoratedEntity from '../types/IDecoratedEntity';

export default function Strict(): ClassDecorator {
  return function (TargetClass) {
    const decoratedEntity = getClassDecorations(TargetClass as unknown as IDecoratedEntity);
    decoratedEntity.strict = true;
  }
}
