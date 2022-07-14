// blueprint definition
class Dinosaur {
  // this function is called when a new one is created
  constructor(name, species, age, diet) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.diet = diet;
  }

  // other methods
  feed(food) {
    console.log(`The ${this.species} species chomps on a nutritious ${food}! `);
  }

  // the roar method
  roar() {
    console.log(`The ${this.name} species roars!`);
  }
}

class CarnivorousDinosaur extends Dinosaur {
  constructor(name, species, age) {
    super(name, species, age, "carnivorous");
  }

  feed(food) {
    console.log(`The ${this.species} devours pitiful ${food}! `);
  }
}

// create Dinosaurs
const dino1 = new Dinosaur("Rex", "pterodactyl", 3000000, "pescetarian");
const dino2 = new CarnivorousDinosaur("Rex", "velociraptor", 3000000);
const dino3 = new CarnivorousDinosaur("Rex", "tryrannosaurus", 3000000, "fish");

dino1.feed("fish");
dino1.roar();

dino2.feed("fish");
dino2.roar();

console.log(dino1 instanceof Dinosaur);
console.log(dino1 instanceof CarnivorousDinosaur);
