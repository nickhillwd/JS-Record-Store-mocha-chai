var RecordStore = function(storeName, city){
  this.storeName = storeName.toLowerCase();
  this.city = city.toLowerCase();
  this.inventory = [];
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  }
}

module.exports = RecordStore;