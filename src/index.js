import validator from './validator.js';

const btnVerifyCardNum = document.getElementById('btn-verifing');
const maskifyNumber = document.getElementById('card-number');
const cleanInputCard = document.getElementById('card-number');

maskifyNumber.addEventListener('keyup', (e) => {
//  alert('hola');
});

btnVerifyCardNum.addEventListener('click', () => {
 
  let card =  document.getElementById('card-number').value;
  let validatorNumber = validator.isValid(card);
  let showResult = document.getElementById('card-result');
  let validResult =  `<div class="square card-result-valid"><p>${ card}, es válida.</p></div>`;
  let invalidResult = `<div class="square card-result-invalid"><p> ${ card}, no es válida.</p></div>`;

    if(card == ''){
      document.getElementById('tip').innerHTML = `Complete este campo`;
      document.getElementById('tip').classList.add('tool-tip');
      document.getElementById('card-number').value = '';
    } else if (card.length !== 16){
      document.getElementById('tip').innerHTML = `Ingrese 16 digitos`;
      document.getElementById('tip').classList.add('tool-tip');
      document.getElementById('card-number').value = '';
    } else if (validatorNumber == true) {
      showResult.innerHTML = validResult;
      document.getElementById('card-number').value = '';
    } else {
      showResult.innerHTML = invalidResult;
      document.getElementById('card-number').value = '';
    }
});

cleanInputCard.addEventListener('keypress', () => {
  document.getElementById('card-result').innerHTML = ``;
  document.getElementById('tip').innerHTML = ``;
  document.getElementById('tip').classList.remove('tool-tip');
})


console.log(validator);
