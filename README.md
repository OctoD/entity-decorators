# HttpDecorators

TypeScript entities isomorphic HTTP decorators

## Install

```bash
npm i entity-decorators

# or with yarn

yarn add entity-decorators
```

## Examples

#### Validating an entity

```typescript
import decorators from 'entity-decorators';

class MyEntity {
  @decorators.ToString()
  public foo: string;

  @decorators.ToNumber()
  public bar: number;

  @decorators.ToDate()
  public baz: Date;
}

export function list() {
  return fetch(`example-list-of-records.json`)
    .then(response => response.json())
    .then(payload => {
      return decorators.mapArrayOf(MyEntity, payload);
    });
}

export function single() {
  return fetch(`example-of-entity.json`)
    .then(response => response.json())
    .then(payload => {
      return decorators.map(MyEntity, payload);
    });
}
```
