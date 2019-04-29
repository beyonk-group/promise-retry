<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

## Promise Retry

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/promise-retry.svg?style=shield)](https://circleci.com/gh/beyonk-adventures/promise-retry)

Retryable promise utility for the browser

## Why

There are a few similar modules out there, mostly abandonware, few with tests.

## Usage

Install the module:

```bash
npm install --save-dev @beyonk/promise-retry
```

Use it in your code:

```js
// defaults
const retries = 5
const intervalBetweenRetries = 1000

const myFunction = async function () { ...blah }

retry(
  myFunction,
  retries,
  intervalBetweenRetries
)
```

## Running Tests

```bash
npm test
```

## Credits

* Code adapted from [this gist](https://gist.github.com/briancavalier/842626#gistcomment-2703073), and corrected.
