let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  saveCalculation();
  displayCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-display')
    .innerHTML = calculation;
}
  

document.querySelector('.js-number-1')
  .addEventListener('click', () => {
    updateCalculation('1');
  });

document.querySelector('.js-number-2')
  .addEventListener('click', () => {
    updateCalculation('2');
  });

document.querySelector('.js-number-3')
  .addEventListener('click', () => {
    updateCalculation('3');
  });

document.querySelector('.js-number-4')
  .addEventListener('click', () => {
    updateCalculation('4');
  });

document.querySelector('.js-number-5')
  .addEventListener('click', () => {
    updateCalculation('5');
  });

document.querySelector('.js-number-6')
  .addEventListener('click', () => {
    updateCalculation('6');
  });

document.querySelector('.js-number-7')
  .addEventListener('click', () => {
    updateCalculation('7');
  });

document.querySelector('.js-number-8')
  .addEventListener('click', () => {
    updateCalculation('8');
  });

document.querySelector('.js-number-9')
  .addEventListener('click', () => {
    updateCalculation('9');
  });

document.querySelector('.js-number-0')
  .addEventListener('click', () => {
    updateCalculation('0');
  });

document.querySelector('.js-number-plus')
  .addEventListener('click', () => {
    updateCalculation('+');
  });

document.querySelector('.js-number-minus')
  .addEventListener('click', () => {
    updateCalculation('-');
  });

document.querySelector('.js-number-multiply')
  .addEventListener('click', () => {
    updateCalculation('*');
  });

document.querySelector('.js-number-divide')
  .addEventListener('click', () => {
    updateCalculation('/');
  });

document.querySelector('.js-number-dot')
  .addEventListener('click', () => {
    updateCalculation('.');
  });

document.querySelector('.js-number-equal')
  .addEventListener('click', () => {
    calculation = eval(calculation);
    saveCalculation();
    displayCalculation();
  });

document.querySelector('.js-clear')
  .addEventListener('click', () => {
    calculation = '';
    saveCalculation();
    displayCalculation();
  });



