type ValidatorFunction = <T extends object, Key extends keyof T>(arg: T, key: Key) => boolean;

export default ValidatorFunction;
