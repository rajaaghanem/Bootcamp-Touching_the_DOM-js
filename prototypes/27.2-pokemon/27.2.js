function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

let charmander = new Pokemon("Charmander", "Fire", ["fire", "stone"]);
let chikorita = new Pokemon("Chikorita", "flying", ["grass", "water"]);
let clefable = new Pokemon("Clefable", "Fairy", ["Electric", "Rock"]);


// A method called callPokemon that will print the following: “I choose you, <pokemon name></pokemon>

Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you, ${this.name}`);
}

clefable.callPokemon();

// A method called attack that takes one parameter, an attack number, that will print the specific attack method from the pokemonAttackList
// array as the following: “<pokemon name> used <attack method>”

Pokemon.prototype.attack = function(num){
    console.log(`${this.name} used ${this.attackList[num]}`);
}

chikorita.attack(1);