
let calculateButton = document.querySelector('#calculateButton')
let resetButton = document.querySelector('#resetButton')
let result = document.querySelector('#result')

let heightInput = document.querySelector('#inputHeight')
let widthInput = document.querySelector('#inputWidth')
let lengthInput = document.querySelector('#inputLength')
let overlapInput = document.querySelector('#inputOverlap')

console.log(calculateButton)

calculateButton.addEventListener('click', (e)=>{
  result.classList.remove('d-none')

  height = parseFloat(heightInput.value)
  width = parseFloat(widthInput.value)
  length = parseFloat(lengthInput.value)
  overlap = parseFloat(overlapInput.value)

  outputLength = 2*width + 2*height + overlap
  outputWidth = 1*length + 1*height + overlap

  result.innerHTML = `Cut your wrapping paper to ${outputLength} x ${outputWidth}`
})

resetButton.addEventListener('click', (e)=>{
  heightInput.value = 1
  widthInput.value = 1
  lengthInput.value = 1
  overlapInput.value = 1.5
  result.classList.add('d-none')
})
