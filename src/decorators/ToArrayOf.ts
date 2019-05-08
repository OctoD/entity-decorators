import createToType from '../helpers/createToType';
import IClass from '../types/IClass';
import IConfigurationDefaults from '../types/IConfigurationDefaults';
import StrictTypeError from '../errors/StrictTypeError';

export interface IToArrayOfConfig extends IConfigurationDefaults {

}

export default function ToArrayOf(Type: IClass, config?: IToArrayOfConfig): PropertyDecorator {
  return function (object, key) {
    createToType<IToArrayOfConfig>(arg => {
      if (
        arg.config.strict 
        && !arg.config.nullable 
        && !Array.isArray(arg.value)
      ) {
        throw new StrictTypeError(arg.value, Array);
      }

      if (
        arg.config.strict 
        && arg.config.nullable 
        && arg.value !== null 
        && !Array.isArray(arg.value)
      ) {
        throw new StrictTypeError(arg.value, Array);
      }

      if (!Array.isArray(arg.value)) {
        return [];
      }

    })(config)(object, key);
  }
}
