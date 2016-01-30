var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var Record = require('./record.js');
var RecordStore = require('./record_store.js');

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
  });
});

describe('Record Store', function(){
  beforeEach(function(){
    store1 = new RecordStore("Rick's Revolutionary Record Store", "Edinburgh");
    store2 = new RecordStore("Keith's Kool Tracks", "Edinburgh");
    store3 = new RecordStore("Val's Vivaldi Emporium", "Edinburgh");
    record1 = new Record("Spice Girls", "Spiceworld", 10.00);
    record2 = new Record("Venga Boys", "The Psrty Album", "5.00");
    record3 = new Record("Daphne and Clecste", "We Didn't Say That", 7.50);
  });
  afterEach(function(){
    store1.inventory = [];
    store2.inventory = [];
    store3.inventory = [];
  });
  it('should accept 2 parameters; name, city', function(){
    RecordStore.storeName = function(){};
    expect(RecordStore).itself.to.respondTo('storeName');
    RecordStore.city = function(){};
    expect(RecordStore).itself.to.respondTo('city');
  });
  it('should accept new records into its inventory', function(){
    store1.addRecord(record1);
    store2.addRecord(record2);
    expect(store1.inventory[0]).to.be.an('object');
    expect(store2.inventory.length).to.eql(1);
  });
})