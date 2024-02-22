const provinces = [
  'Western Cape',
  'Gauteng',
  'Northern Cape',
  'Eastern Cape',
  'KwaZulu-Natal',
  'Free State',
]
const names = [
  'Ashwin',
  'Sibongile',
  'Jan-Hendrik',
  'Sifso',
  'Shailen',
  'Frikkie',
]

/* Use forEach to console log each name to the console. */
names.forEach((name) => console.log(name))

/* Use forEach to console log each name with a matching province 
(for example Ashwin (Western Cape) */
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))
/* Using map loop over all province names and turn the string to
 all uppercase. Log the new array to the console. */

const provincesToUpperCase = provinces.map((province) => {
  const newArr = province.toUpperCase()
  return newArr
})
console.log(provincesToUpperCase)

/* Create a new array with map that has the 
amount of characters in each name.  
The result should be: [6, 9, 11, 5, 7, 7]*/

const newArr = names.map((name) => name.length)

console.log(newArr)

/* Using toSorted to sort all provinces alphabetically. */

console.log(provinces.toSorted())

/* Use filter to remove all provinces that have the word Cape in them.
 After filtering the array, return the amount of provinces left.
 The final value should be 3 */

const removeCape = provinces.filter((province) => !province.includes('Cape'))

console.log(removeCape.length)

/* Create a boolean array by using map and some to determine 
whether a name contains an S character. 
The result should be [true, true, false, true, true, false] */

const hasSArr = names.map((name) => name.toLowerCase().includes('s'))

console.log(hasSArr)

/* Using only reduce, turn the above into an object 
that indicates the province of an individual. */

const createObject = (accumulator, name, province) => {
  accumulator[name] = provinces[province]
  return accumulator
}

const newObj = names.reduce(createObject, {})
console.log(newObj)
