# Tiny Functional Web App

Avert your eyes! This is a toy repo to play around with some new (new to me at least) libraries, microframeworks, and build tools that loosely fit these themes:

* THEME-1: Tiny output bundle (<50 kb)
* THEME-2: Extremely low effort dev setup
* THEME-3: Functional patterns (mostly for state management)
* THEME-4: Comprehensive test coverage

*Some compromises were made to reach these ends: only modern browsers are supported. However, there will be a bias towards picking libraries that support polyfills to add support for older browser targets.*

## Dependencies

Review the package.json for more info, but some of the primary dependencies are:

* [Hyperapp](https://github.com/hyperapp/hyperapp) - "JavaScript micro-framework for building web applications" (a la [React](https://reactjs.org/) + [Unstated](https://github.com/jamiebuilds/unstated)).
* [Ramda](https://ramdajs.com) - "A practical functional library for JavaScript programmers."

## TODOs

* [ ] Tests (maybe something like [Cypress](https://cypress.io)?) (THEME-4).
* [ ] Bundle size calculator/breakdown tool (THEME-1).
* [ ] Explore [Rambda](https://github.com/selfrefactor/rambda) which is [11.6 kB minified](https://bundlephobia.com/result?p=rambda) compared to [77 kB for Ramda](https://bundlephobia.com/result?p=ramda) (THEME-1).
* [ ] Explore Webpack 4, which is now aiming for zero config, allowing it to fit THEME-2.
