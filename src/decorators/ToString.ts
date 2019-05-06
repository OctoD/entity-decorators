import createToType from '../helpers/createToType';
import IConfigurationDefaults from '../types/IConfigurationDefaults';
import StrictTypeError from '../errors/StrictTypeError';
import canHandleNull from '../helpers/canHandleNull';
import canHandleUndefined from '../helpers/canHandleUndefined';
import shouldThrowRequired from '../helpers/shouldThrowRequired';
import RequiredPropertyError from '../errors/RequiredPropertyError';

export interface IToStringConfiguration extends IConfigurationDefaults {
  
}

export default createToType<IToStringConfiguration>(arg => {
  if (arg.config.strict && typeof arg.value !== 'string') {
    throw new StrictTypeError(arg.value, String);
  }

  if (shouldThrowRequired(arg)) {
    throw new RequiredPropertyError(arg.key);
  }
  
  if (canHandleNull(arg) || canHandleUndefined(arg)) {
    return null;
  }

  return String(arg.value);
});
