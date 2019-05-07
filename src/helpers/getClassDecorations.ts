import { IClass } from '..';
import IClassDecoration from '../types/IClassDecorations';

export const decorationsToken = `@@decorations`;

export default function getClassDecorations(Class: IClass): IClassDecoration {
  if ((Class as any)[decorationsToken] === undefined) {
    (Class as any)[decorationsToken] = <IClassDecoration> {
      decoratedMembers: new Map(),
      strict: false,
    };
  }

  return (Class as any)[decorationsToken];
}