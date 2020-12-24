const btnAdd = document.querySelector('#add')
const btnSub = document.querySelector('#sub')

const input = document.querySelector('input')

btnAdd.addEventListener('click', () => {
  if (input.value < Math.pow(2, 32)) {
    input.value = parseInt(input.value) + 1
  } else { window.alert('Seriamente?') };
})

btnSub.addEventListener('click', () => {
  if (input.value > -Math.pow(2, 32)) {
    input.value = parseInt(input.value) - 1
  } else { window.alert('Problemi di insonnia?') };
})
