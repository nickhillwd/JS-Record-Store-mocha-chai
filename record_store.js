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
  },
  search: function(albumTitle){
    for(record of this.inventory){
      var condition = record.title === (albumTitle.toLowerCase()) ? record : "No Such Album";
      console.log('Artist:     '+record.artist);
      console.log('Title:      '+record.title);
      console.log('Price:      '+record.price);
      console.log('-'.repeat(50));
      return condition;
    }
  },
  sell: function(record){
    
  }
}

module.exports = RecordStore;