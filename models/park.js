const Park = function(name, ticketPrice, collection){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = collection;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collection.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
  this.collection.pop;
};

Park.prototype.removeAllDinosaurs = function () {
  let ammountOfDinosaurs = this.collection.length;
  this.collection.splice(0, ammountOfDinosaurs);
};

// Park.prototype.findPopularDinosaur = function () {
//   let popularDinosaur = this.collection.
//   this.collection
// };

// Park.prototype.findDinosaursOfSpecies = function (species) {
//
// };

module.exports = Park;
