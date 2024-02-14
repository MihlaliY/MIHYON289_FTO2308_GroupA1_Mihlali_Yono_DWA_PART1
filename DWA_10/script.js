const STEPS = 1
const MIN = -10
const MAX = 10

const tallyCountNumber = document.querySelector(
  '[data-set= "tallyCountNumber"]'
)
const add = document.querySelector('[data-set="addition"]')
const subtract = document.querySelector('[data-set="subtraction"]')
const reset = document.querySelector('[data-set="reset"]')

const addButtonhandler = () => {
  const newValue = parseInt(tallyCountNumber.value) + STEPS
  tallyCountNumber.value = newValue
  if (subtract.disabled === true) {
    subtract.disabled = false
  }

  if (newValue >= MAX) {
    add.disabled = true
  }
}

const subtractButtonhandler = () => {
  const newValue = parseInt(tallyCountNumber.value) - STEPS
  tallyCountNumber.value = newValue
  if (add.disabled === true) {
    add.disabled = false
  }

  if (newValue <= MIN) {
    subtract.disabled = true
  }
}

const resetHandler = () => {
  const resetValue = 0
  tallyCountNumber.value = resetValue
  if (add.disabled === true) {
    add.disabled = false
  }

  if (subtract.disabled === true) {
    subtract.disabled = false
  }

  alert('The counter has been reset')
}

add.addEventListener('click', addButtonhandler)
subtract.addEventListener('click', subtractButtonhandler)
reset.addEventListener('click', resetHandler)
