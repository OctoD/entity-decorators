import IConfigurationDefaults from '../types/IConfigurationDefaults';
import createToType from '../helpers/createToType';
import StrictTypeError from '../errors/StrictTypeError';
import canHandleNullOrUndefined from '../helpers/canHandleNullOrUndefined';

export interface IToDateConfiguration extends IConfigurationDefaults {

}

function isValidDate(arg: unknown): boolean {
  if (typeof arg !== 'number' && typeof arg !== 'string' && !(arg instanceof Date)) {
    return false;
  }
  
  return !isNaN(new Date(arg).getDate());
}

export default createToType<IToDateConfiguration>(arg => {
  if (arg.value instanceof Date) {
    return arg.value;
  }

  if (arg.config.strict && !arg.config.nullable && !(arg.value instanceof Date)) {
    throw new StrictTypeError(arg.value, Date);
  }

  if (
    arg.config.strict 
    && arg.config.nullable 
    && arg.value !== null 
    && !(arg.value instanceof Date)
  ) {
    throw new StrictTypeError(arg.value, Date);
  }

  if (canHandleNullOrUndefined(arg)) {
    return null;
  }

  if (isValidDate(arg.value)) {
    return new Date(arg.value as any);
  }
});
