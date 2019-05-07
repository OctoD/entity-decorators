import { IClass } from '..';
import StrictTypeError from '../errors/StrictTypeError';
import { build } from '../helpers/build';
import canHandleNullOrUndefined from '../helpers/canHandleNullOrUndefined';
import createToType from '../helpers/createToType';
import IConfigurationDefaults from '../types/IConfigurationDefaults';
import IDecoratedEntity from '../types/IDecoratedEntity';

export interface IToClassConfiguration extends IConfigurationDefaults {
  Type: IClass;
}

export default createToType<IToClassConfiguration>(arg => {
  if (arg.config.strict && !arg.config.nullable && typeof arg.value !== 'object') {
    throw new StrictTypeError(arg.value, arg.config.Type);
  }

  if (arg.config.strict && arg.config.nullable && arg.value !== null && typeof arg.value !== 'object') {
    throw new StrictTypeError(arg.value, arg.config.Type);
  }

  if (canHandleNullOrUndefined(arg)) {
    return null;
  }

  return build(arg.config.Type as IDecoratedEntity<any>, arg.value as any);
});
