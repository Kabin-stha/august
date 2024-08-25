//Splice is used to modify elements in the original array
let NAMES = [{ Name: "Kabin" }, { Name: "Aryan" }, { Name: "Ashim" }];
const Removed = NAMES.splice(0, 1); //0 is where the counting starts and 1 is the index of the data to be reomved
console.log(Removed);
console.log(NAMES);

//Slice is used to create a new different array after modifying the original array
let FAMES= [{ Name: "Kabin" }, { Name: "Aryan" }, { Name: "Ashim" }];
const sliced=FAMES.slice(1,2);//1 is the starting index here and 2 is the value to be choffed off
console.log(sliced);
console.log(FAMES )//it will print the original array with out any changes

