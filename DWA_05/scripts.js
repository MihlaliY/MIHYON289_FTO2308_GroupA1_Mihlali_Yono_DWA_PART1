const form = document.querySelector('[data-form]')
const result = document.querySelector('[data-result]')

/**
 * An event handler function that evaluates and divides two inputs entered by the user;
 * divident and divider. Both these values should be whole numbers in order
 * for the division to work.
 * The function has a try block to catch errors caused by entry of the incorrect values in the inputs
 * @param {Event} event - The event of submitting the form
 */
const wholeNumberDivisionHandler = (event) => {
  event.preventDefault()
  const entries = new FormData(event.target)
  const {dividend, divider} = Object.fromEntries(entries)

  try {
    if (dividend === '' || divider === '') {
      result.innerText =
        'Division not performed. Both values are required in inputs. Try again'
    } else if (dividend > 0 && divider < 0) {
      result.innerText =
        'Division not performed. Invalid number provided. Try again'
      throw new SyntaxError(
        'Division not performed. Invalid number provided. Try again'
      )
    } else if (isNaN(dividend) || isNaN(divider)) {
      document.querySelector('body').innerText =
        'Something critical went wrong. Please reload the page'
      throw new SyntaxError('Value entered is not a number')
    } else {
      result.innerText = Math.floor(dividend / divider)
    }
  } catch (e) {
    console.log(e)
  }
}
form.addEventListener('submit', wholeNumberDivisionHandler)
