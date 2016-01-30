var _=require('lodash');

var RecordStore = function(storeName, city){
  this.storeName = storeName.toLowerCase();
  this.city = city.toLowerCase();
  this.inventory = [];
  this.balance = 0
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  listInventory: function(){
    for(record of this.inventory){
      console.log('Artist:     '+record.artist);
      console.log('Title:      '+record.title);
      console.log('Price:      '+record.price);
      console.log('-'.repeat(50));
    }
  }
}

module.exports = RecordStore;