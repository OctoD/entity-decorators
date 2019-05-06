import createToType from '../helpers/createToType';
import IConfigurationDefaults from '../types/IConfigurationDefaults';
import shouldThrowRequired from '../helpers/shouldThrowRequired';
import RequiredPropertyError from '../errors/RequiredPropertyError';
import canHandleNullOrUndefined from '../helpers/canHandleNullOrUndefined';
import StrictTypeError from '../errors/StrictTypeError';

export interface IToBooleanConfig extends IConfigurationDefaults {

}

export default createToType<IToBooleanConfig>(arg => {
  if (arg.config.strict && typeof arg.value !== 'boolean') {
    throw new StrictTypeError(arg.value, Boolean);
  }
  
  if (shouldThrowRequired(arg)) {
    throw new RequiredPropertyError(arg.key);
  }

  if (canHandleNullOrUndefined(arg)) {
    return null;
  }

  return Boolean(arg.value);
});
