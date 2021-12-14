<a href="https://beyonk.com">
    <br />
    <br />
    <img src="https://user-images.githubusercontent.com/218949/144224348-1b3a20d5-d68e-4a7a-b6ac-6946f19f4a86.png" width="198" />
    <br />
    <br />
</a>

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
