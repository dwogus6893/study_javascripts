//형식 let animal = {key:value,key:value,key:value}
let animal = {name:"juju", species:"cat"};
//object는 key와value로 만들어져있음.
// console.log(animal.species);
console.log(animal.name);

let animal_keys = Object.keys(animal);

for(let key of animal_keys){

console.log(`${key}:${animal[key]}`);   // animal['name'],
}


console.log();

const animals_obj = [  //object 내에 list로 묶은거
    // { name: "dog", species: "canine" },
     animal,
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];


