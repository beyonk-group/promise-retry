'use strict'

module.exports = function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    return fn()
      .then(resolve)
      .catch(error => {
        if (retriesLeft === 0) {
          reject(error)
          return
        }
        setTimeout(() => {
          retry(fn, retriesLeft - 1, interval)
            .then(resolve, reject)
        }, interval)
      })
  })
}
