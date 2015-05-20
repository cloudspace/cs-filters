# cs-filters

A node module containing various namespace
filters and data transforms.

For the Angular 1.X implementation of this code, see here.

## Current filters

- collections
  - **start-from:** slices an array for use in pagination
- measurements
  - **bytes** returns a number of bytes into a specific format
  - **bandwidth** returns bandwidth in bytes
  - **kilocase** returns a number in standard kilocase (K, M, G, T, P, E, Z, Y)

## Usage

Every filter function is namespaced and accessible through a
public interface object.

```javascript
var PublicInterface = {
  'Measurements': {
    'Bytes':     Bytes,
    'Bandwidth': Bandwidth,
    'KiloCase':  KiloCase
  },
  'Collections': {
    'StartFrom': StartFrom
  }
};
```

## Develop

`npm install jasmine-node -g`

`npm install`

### Test

`jasmine-node spec`
