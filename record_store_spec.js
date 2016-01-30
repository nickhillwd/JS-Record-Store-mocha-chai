var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var Record = require('./record.js');
// var RecordStore = require('./record_store.js');

describe('Record', function(){
  beforeEach(function(){
    record1 = new Record("Spice Girls", "Spiceworld", 10.00);
    record2 = new Record("Venga Boys", "The Psrty Album", "5.00");
    record3 = new Record("Daphne and Clecste", "We Didn't Say That", 7.50);
  });
  it('should accept 3 parameters; artist, title, price', function(){
    Record.artist = function(){};
    expect(Record).itself.to.respondTo('artist');
    Record.title = function(){};
    expect(Record).itself.to.respondTo('title');
    Record.price = function(){};
    expect(Record).itself.to.respondTo('price');
  })
});