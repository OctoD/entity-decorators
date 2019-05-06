import createDecoratedProperty from '../helpers/createDecoratedProperty';

export default function Required(): PropertyDecorator {
  return function (target, key) {
    const property = createDecoratedProperty(target, key);

    property.required = true;
  }
}
