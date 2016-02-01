var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;
var _=require('lodash');

var Record = require('./record.js');
var RecordStore = require('./record_store.js');
var RecordCollector = require('./record_collector');

describe('Record', function(){
  beforeEach(function(){
    record1 = new Record("Spice Girls", "Spiceworld", 10.00);
    record2 = new Record("Venga Boys", "The Party Album", 5.00);
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
    record2 = new Record("Venga Boys", "The Party Album", 5.00);
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
  it('should have a till balance of 0 at start', function(){
    assert.equal(store1.balance, 0);
    assert.equal(store2.balance, 0);
    assert.equal(store3.balance, 0);
  });
  it('should have correct values in places after adding records', function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    expect(store1.inventory.length).to.eql(3);
    expect(store1.inventory[2]).to.be.an('object');
    expect(store1.inventory[0]).to.have.property('artist').that.deep.equals('spice girls');
  });
  it('should list out a stores record inventory', function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    store1.listInventory();
    expect(store1.inventory[0]).to.have.property('artist').that.deep.equals('spice girls');
    expect(store1.inventory[1]).to.have.property('artist').that.deep.equals('venga boys');
    expect(store1.inventory[2]).to.have.property('artist').that.deep.equals('daphne and clecste');
    expect(store1.inventory[0]).to.have.property('title').that.deep.equals('spiceworld');
    expect(store1.inventory[1]).to.have.property('title').that.deep.equals('the party album');
    expect(store1.inventory[2]).to.have.property('title').that.deep.equals("we didn't say that");
    // expect(store1.inventory[0]).to.have.property('price').that.deep.equals(parseFloat(10.00).toFixed(2));
    // expect(store1.inventory[1]).to.have.property('price').that.deep.equals(parseFloat(5.00).toFixed(2));
    // expect(store1.inventory[2]).to.have.property('price').that.deep.equals(parseFloat(7.50).toFixed(2));
  });
  it('should be able to search for a record by album title', function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    var testSearch = store1.search("Spiceworld");
    var testSearch2 = store1.search("The Party Album");
    expect(testSearch).to.be.an('object');
    expect(testSearch).to.have.property('title', 'spiceworld');
    expect(testSearch2).to.have.property('title', 'the party album');
  });
  it('should be able to sell a record and bank the money', function(){
    store1.addRecord(record1);
    console.log(store1.inventory.length);
    store1.sell("spiceworld");
    assert.equal(store1.balance, 10.00);
    console.log(store1.balance);
    console.log(store1.inventory.length);
    expect(store1.inventory.length).to.eql(0);
  });
  it('should be able to report total takings', function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    store1.sell("Spiceworld");
    store1.sell("The Party Album");
    store1.sell("We Didn't Say That");
    store1.endOfDayReport();
    assert.equal(store1.balance, 22.50);
  });
})

describe('Record Collector', function(){
  beforeEach(function(){
    jay = new RecordCollector('Jay', 200.00, 'Functino Time!');
  });
  it('should accept 3 parameters; collector name, cash, shifty catch phrase', function(){
    RecordCollector.collectorName = function(){};
    expect(RecordCollector).itself.to.respondTo('collectorName');
    RecordCollector.cash = function(){};
    expect(RecordCollector).itself.to.respondTo('cash');
    RecordCollector.shiftyCatchPhrase = function(){};
    expect(RecordCollector).itself.to.respondTo('shiftyCatchPhrase');
  });
  it('should have a cash balance of £200', function(){
    assert.equal(jay.cash, 200.00);
  });
  it('should be able it buy a record FROM a record store');
  it('should be able to sell a record store one from his collection');
})

















