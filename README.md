Entity decorators
=================

[![Build Status](https://travis-ci.org/OctoD/entity-decorators.svg?branch=master)](https://travis-ci.org/OctoD/entity-decorators)

TypeScript entities decorators.

## Install

```bash
npm i entity-decorators

# or with yarn

yarn add entity-decorators
```

## Decorators

#### Strict

This is a class decorator, enforces a strict validation upon class members

#### ToArrayOf

This is a member decorator which converts an array of values to another one

#### ToBoolean

This is a member decorator which converts a value to it's bitwise value

#### ToDate

This is a member decorator which converts a value to a Date

#### ToClass

This is a member decorator which converts a nested object to a decorated class

#### ToNumber

This is a member decorator which converts a member to a number

#### ToString

This is a member decorator which converts a member to a string

## Methods

#### map

Converts a single object to an instance of a decorated class

```typescript
map(ClassConstructor, objectToConvert)
```

#### mapArrayOf

Converts an array of objects to an array of decorated classes instances

```typescript
mapArrayOf(ClassConstructor, arrayToConvert)
```

## Examples

#### Validating an entity or an array of them

```typescript
import decorators from 'entity-decorators';

@decorators.Strict()
class UserDetails {
  @decorators.ToNumber()
  public age: number;

  @decorators.ToString()
  public name: string;

  @decorators.ToString()
  public surname: string;

  @decorators.ToString()
  public phone: string;
}

class User {
  @decorators.ToString({
    required: true,
  })
  public username: string;

  @decorators.ToString({
    required: true,
  })
  public email: string;

  @decorators.ToClass({
    nullable: true,
    Type: UserDetails,
  })
  public baz: UserDetails;
}

export function list() {
  return fetch(`example-list-of-records.json`)
    .then(response => response.json())
    .then(payload => {
      return decorators.mapArrayOf(User, payload);
    });
}

export function single() {
  return fetch(`example-of-entity.json`)
    .then(response => response.json())
    .then(payload => {
      return decorators.map(User, payload);
    });
}
```
