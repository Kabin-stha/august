const intro=['i','a','who' ,'when']
const copyarr=[...intro]//here the three dots is the spread opreator which has spreaded the elements of array intro into the copyarr
console.log(copyarr)
console.log(...copyarr)

//Rest is used to collecting all the remaining elements of an array
const [a,...rest]=[1,2,3,4]
console.log(a)
console.log(...rest)