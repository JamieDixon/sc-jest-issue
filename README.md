## Styled components Jest issue

components.js exports a default component that is being tested in App.test.js

If a named export is added to components.js, the existing jest test fails because the classnames are adjusted.

## How to test

Run `yarn test` to see the passing test.

Uncomment the line exporting `Bar` in components.js.

Run `yarn test` again to see a failing test.
