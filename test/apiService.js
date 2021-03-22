var expect = require('chai').expect
var apiService = require('../lib/apiService')

describe('Core API Service', () => {
  describe('Rate API Service', () => {
    it.skip('should make an api request to get rates'),
      () => {
        var date = '2021-03-18'
        var rates = apiService.getHistoricalRate(date)
        expect(rates).to.include('base')
      }
  })
})
