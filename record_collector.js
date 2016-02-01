var RecordCollector = function(collectorName, cash, shiftyCatchPhrase){
  this.collectorName = collectorName.toLowerCase();
  this.cash = cash.toFixed(2);
  this.shiftyCatchPhrase = shiftyCatchPhrase.toLowerCase();
  this.recordCollection = [];
}

RecordCollector.prototype = {
  buy: function(albumTitle){

  }
}

module.exports = RecordCollector;