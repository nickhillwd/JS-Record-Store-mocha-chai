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
  print: function(whatToPrint){
    if(whatToPrint === "No Such Album"){
      console.log(whatToPrint);
    }else{
      console.log('Artist:     '+whatToPrint.artist);
      console.log('Title:      '+whatToPrint.title);
      console.log('Price:      '+whatToPrint.price);
      console.log('-'.repeat(50));
    }
  },
  listInventory: function(){
    for(record of this.inventory){
      this.print(record);    }
  },
  search: function(albumTitle){
    // try{
    //   for(record of this.inventory){
    //     if(albumTitle.toLowerCase() === record.title){
    //       this.print(record);
    //       return record;
    //     }else{
    //       continue;
    //     }
    //   }
    // }catch(record){
    //   if (record instanceof undefined){
    //     console.log(record);
    //     return "No such Record";
    //   }
    // }   
      for(record of this.inventory){
        console.log("FOR LOOP = " + albumTitle.toLowerCase() + " " + record.title);
        if(albumTitle.toLowerCase().trim() === record.title.toLowerCase().trim()){
          this.print(record);
          return record;
        }
      }
 
  },
  sell: function(recordTitle){
    record = this.search(recordTitle);
    this.balance += record.price
    for(var i = 0; i < this.inventory.length; i++){
      if(i.title === recordTitle){
      this.inventory.splice(i, 1);
      }
    }
  },
  endOfDayReport: function(){
    console.log("Total Takings " + Date.now() + ": £" + parseInt(this.balance).toFixed(2));
  }
}

module.exports = RecordStore;




// var condition = record.title === (albumTitle.toLowerCase()) ? record : "No Such Album";












