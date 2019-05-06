import createToType from '../helpers/createToType';
import IConfigurationDefaults from '../types/IConfigurationDefaults';
import StrictTypeError from '../errors/StrictTypeError';
import RequiredPropertyError from '../errors/RequiredPropertyError';
import shouldThrowRequired from '../helpers/shouldThrowRequired';
import canHandleNull from '../helpers/canHandleNull';
import canHandleUndefined from '../helpers/canHandleUndefined';

export interface IToNumberConfiguration extends IConfigurationDefaults {
  
}

export default createToType<IToNumberConfiguration>(arg => {
  if (arg.config.strict && typeof arg.value !== 'number') {
    throw new StrictTypeError(arg.value, Number);
  }

  if (shouldThrowRequired(arg)) {
    throw new RequiredPropertyError(arg.key);
  }

  if (canHandleNull(arg) || canHandleUndefined(arg)) {
    return null;
  }
  
  return Number(arg.value);
});
