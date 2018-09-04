const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Triceratops', 'herbivore', 30);
    dinosaur3 = new Dinosaur('Brontosaurus', 'herbivore', 20);
    dinosaur4 = new Dinosaur('Brontosaurus', 'herbivore', 10);

    dinos = [dinosaur2, dinosaur1, dinosaur3]

    park = new Park('Jurassic Park', 10, dinos)
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collection;
    assert.strictEqual(actual, dinos);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur4);
    const actual = park.collection.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur();
    const actual = park.collection.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.findPopularDinosaur();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur4);
    const actual = park.findDinosaursOfSpecies('Brontosaurus');
    assert.deepStrictEqual(actual, [dinosaur3, dinosaur4]);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.removeAllDinosaurs();
    const actual = park.collection.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to calculate the visitors per day', function() {
    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 100);
  });

  it('should be able to calculate the visitors per year', function() {
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 36500);
  });

  it('should be able to calculate the revenue from ticket sales per year', function() {
    const actual = park.revenuePerYear();
    assert.strictEqual(actual, 365000);
  });

});
