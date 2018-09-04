const Park = function(name, ticketPrice, collection, visitors){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = collection;
  this.visitors = visitors;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collection.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
  this.collection.pop();
};

Park.prototype.removeAllDinosaurs = function () {
  let ammountOfDinosaurs = this.collection.length;
  this.collection.splice(0, ammountOfDinosaurs);
};

Park.prototype.findPopularDinosaur = function () {
  this.collection.sort(function(obj1, obj2){
    return obj2.guestsAttractedPerDay - obj1.guestsAttractedPerDay
  });
  return this.collection[0];
};

Park.prototype.findDinosaursOfSpecies = function (speciesSearch) {
  const foundDinosaurs = [];
  for ( var dinosaur of this.collection ) {
    if (dinosaur.species === speciesSearch) {
      foundDinosaurs.push(dinosaur);
    }
  }
  return foundDinosaurs;
};

Park.prototype.visitorsPerDay = function () {
  let visitors = 0;
  for ( var dinosaur of this.collection ) {
    (visitors += dinosaur.guestsAttractedPerDay)
  }
  return visitors;
};

Park.prototype.visitorsPerYear = function () {
  let visitors = (this.visitorsPerDay() * 365);
  return visitors;
};

Park.prototype.revenuePerYear = function () {
  let revenue = (this.visitorsPerYear() * this.ticketPrice)
  return revenue;
};

module.exports = Park;
