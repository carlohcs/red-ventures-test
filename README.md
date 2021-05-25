# red-ventures-test
Acceptance test from Red Ventures

Please read my considerations.

## Considerations

- The API is incomplete:
    - Property "pet" is not returned;
        - It was provided a fallback through "options" property to template.
- Icon "high-sun.svg" doesn't exist in files - only layout.
    - It was provided a fallback to "low-sun.svg".
- Tablet layout has not provided. It was provided a behavior closest to mobile behavior.

## Additional

Added some unit tests

```
$ npm run test
```

And some end-to-end tests (run server and tests together)

```
$ npm run run:e2e:tests
```
