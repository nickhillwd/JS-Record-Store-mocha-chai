var Record = function(artist, title, price){
  this.artist = artist.toLowerCase();
  this.title = title.toLowerCase();
  this.price = parseInt(price);
}

module.exports = Record;