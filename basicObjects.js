const dinosaur = {
  name: "Dippy",
  species: "Diplodocus",
  age: 27,
  speak: function () {
    console.log(`Hi my name is ${this.name}!`);
  },
};

const dinosaur2 = {
  name: "Hortensia",
  species: "Pterodactyl",
  age: 23,
  speak: function () {
    console.log(`Hi my name is ${this.name}!`);
  },
};

dinosaur.speak();
dinosaur2.speak();
