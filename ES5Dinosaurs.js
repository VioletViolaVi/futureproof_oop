// set up blueprint
function Dinosaur(name, species, age) {
  // properties
  this.name = name;
  this.species = species;
  this.age = age;
  // methods
  this.speak = function () {
    console.log(`${this.name} is a fearsome ${this.species}!`);
  };
}

// talking directly to prototype
// if changed here it changes for all other instances (below)
Dinosaur.prototype.feed = function (food) {
  console.log(`The ${this.species} feasts on the helpless ${food}!`);
};

// Instantiating dinosaurs
const dino1 = new Dinosaur("Skeggy", "Skeggosaurus", 1);
const dino2 = new Dinosaur("Pukka", "Tyrannosaurs", 9);

// Interact with dinosaurs
dino1.speak();
dino2.speak();

console.log("AAAA:", dino1.name);
console.log("AAAA:", dino2.name);

dino1.feed("grape");
dino2.feed("Skeggy");

console.log("BBBB:", dino1.feed);
console.log("BBBB:", dino2.feed);
