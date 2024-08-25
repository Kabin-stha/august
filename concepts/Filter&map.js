//Mapping converts one array into another new different array using methods or modifications
//FILTERING is just selection process where we filter the items that dont match our conditions

const NAMES=[
    {id:1,Name:"kabin" },
    {id:2,Name:"Ashim" },
    {id:3,Name:"Aryan" },]
   
const upperData= NAMES.map(el=>el.Name.toUpperCase());//el=>el is used to convert the elements using the targated function without any changes in data type
console.table(upperData)
const Reprised= NAMES.filter(el=>el.Name.length===5);//we are using Name insted of NAMES because we are checking the Name duhh not the id or the entire arse array
console.table(Reprised)
