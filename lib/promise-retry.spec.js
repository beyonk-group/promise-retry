'use strict'

const retry = require('./promise-retry')
const { expect } = require('code')

describe('#retry()', () => {
  context('promise resolves', () => {
    it('no errors', async () => {
      await expect(
        retry(async function () {})
      ).not.to.reject()
    })
  })

  context('promise rejects', () => {
    it('rejects with error message', async () => {
      await expect(
        retry(async function () {
          throw new Error('Some Error')
        }, 5, 1)
      ).to.reject(Error, 'Some Error')
    })

    it('tries five times', async () => {
      let ctr = 1
      await retry(
        async function () {
          ctr = ctr + 1
          if (ctr === 5) {
            return true
          }
          throw new Error('Should retry')
        }
      , 5, 10)
      expect(ctr).to.equal(5)
    })

    it('waits 10ms between attempts', async () => {
      let ctr = 1
      const time = new Date().getMilliseconds()
      await retry(
        async function () {
          ctr = ctr + 1
          if (ctr === 5) {
            return true
          }
          throw new Error('Should retry')
        }
      , 5, 10)
      expect (
        new Date().getMilliseconds() - time
      ).to.be.about(30, 10)
    })
  })
})
