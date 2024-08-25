//Destructuring in js refers to assaigning the values of an array to another varaibles
let NAMES=['Aryan','Ashim','Anya']
let [Name1,Name2,Name3]=NAMES //here the value of NAMES array is assigned to 3 varaibles
console.log(Name1,Name2,Name3)

const Char={
    Name:'luffy',
    aura:10,
    age:30
}
const {Name: luffyname,...rest}=Char
console.log(luffyname)
console.log(rest)

//concat is used to merge two arrays into a new different array
let arr1=[1,2,2,4]
let arr2=[2,1,4,2]
let arr3=arr1.concat(arr2)
console.log(arr3)