## Introduction

This is a client-side JavaScript boilerplate that can be built and pushed to a CDN or to any static hosting solution like Surge, S3 etc.

It's the new and much simplified version of [the boilerplate](https://github.com/ShippableBoilerplates/react-spa-clientside-cdn) I've used for the last two years. I'm going with the minimalist route, removing all complexities that are not warranted.

## The Stack

-   Transpiling with Babel using `preset-env` and `@babel/plugin-proposal-class-properties`.
-   Bundling, live reloading by `parcel.js`. Webpack and configs are gone.
-   CSS-in-JS library `glamor` is replaced by `SASS`, with the good ol' indented syntax.
-   `Pug` has been dropped since templating is not an issue with SPAs.

## Installation:

-   Prerequisites: `node` and `npm`

#### Clone the repo:

```bash
git clone https://github.com/levsthings/clientside-toolchain
rm -rf .git && git init
```

#### Install dependencies:

```bash
npm i
```

## Usage:

#### Development mode with hot reloading:

```
npm run dev
```

#### Bundling in production mode:

```
npm run build
```

### Additional Commands

`to be added`

### Testing

`to be added`

### Linters

-   `eslint` --> Governed by `.eslintrc`
-   `sass-lint` --> Governed by `.sasslintrc`
-   `husky` and `lint-staged` for running linters on SASS and JavaScript files before committing.

### Companion Extensions for VSCode

-   `eslint`
-   `sass-lint`
-   `prettier` -> With `eslint` integration `enabled`.
