const products = [
  {product: 'banana', price: '2'},
  {product: 'mango', price: 6},
  {product: 'potato', price: ' '},
  {product: 'avocado', price: '8'},
  {product: 'coffee', price: 10},
  {product: 'tea', price: ''},
]

/* Use forEach to console.log each product name to the console. */
const productNames = products.forEach((product) => console.log(product.product))

/* Use filter to filter out products that have a name longer than 5 characters */
console.log(products.filter((product) => product.product.length <= 5))

/* Using both filter and map. Convert all prices that 
are strings to numbers, and remove all products from 
the array that do not have prices. 
After this has been done then use reduce to calculate the
 combined price of all remaining products. */
const totalPrice = products
  .filter((product) => product.price !== '' && !isNaN(parseInt(product.price)))
  .map((product) => ({...product, price: parseInt(product.price)}))
  .reduce((total, product) => total + product.price, 0)

console.log(totalPrice)

/* Use reduce to concatenate all product names to 
create the following string:
banana, mango, potato, avocado, coffee and tea. */
const concateProductNames = (acc, product, index) => {
  if (index === products.length - 1) {
    return `${acc} and  ${product.product}`
  }

  return `${acc}, ${product.product}`
}
console.log(products.reduce(concateProductNames))

/* Use reduce to calculate both the highest and lowest-priced items.
 The names should be returned as the following string:
  Highest: coffee. Lowest: banana. */

/* Using only Object.entries and reduce recreate the object with the 
exact same values. However, the following object keys should 
be changed in the new array: product should be changed to name
price should be changed to cost */

const keysChanged = products.reduce((acc, product) => acc)
