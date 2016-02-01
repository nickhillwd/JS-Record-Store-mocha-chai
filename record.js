var _=require('lodash');

var Record = function(artist, title, price){
  this.artist = artist.toLowerCase();
  this.title = title.toLowerCase();
  this.price = price;
}

module.exports = Record;