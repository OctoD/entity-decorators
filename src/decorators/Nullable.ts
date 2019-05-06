import createDecoratedProperty from '../helpers/createDecoratedProperty';

export default function Nullable(): PropertyDecorator {
  return function (target, key) {
    const decoratedProperty = createDecoratedProperty(target, key);

    decoratedProperty.nullable = true;
  }
}