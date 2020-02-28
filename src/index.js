// eslint-disable-next-line import/extensions
import validator from './validator.js';

const btnVerifyCardNum = document.getElementById('btn-verifing');
const cleanInputCard = document.getElementById('card-number');

document.getElementById('card-number').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

btnVerifyCardNum.addEventListener('click', () => {
  const card = document.getElementById('card-number').value;
  const validatorNumber = validator.isValid(card);
  const maskifyNumber = validator.maskify(card);
  const showResult = document.getElementById('card-result');
  const validResult = `<p>${maskifyNumber}, es válido.</p>`;
  const invalidResult = `<p> ${maskifyNumber}, no es válido.</p>`;

  if (card === '') {
    document.getElementById('tip-msg').innerHTML = 'Complete este campo';
    document.getElementById('tip-msg').classList.add('tool-tip');
    document.getElementById('card-number').value = '';
    // } else if (card.length !== 16){
    //   document.getElementById('tip-msg').innerHTML = `Ingrese 16 digitos`;
    //   document.getElementById('tip-msg').classList.add('tool-tip');
    //   document.getElementById('card-number'). = '';
  } else if (validatorNumber === true) {
    showResult.innerHTML = validResult;
    document.getElementById('card-result').classList.add('ctn-guide');
    document.getElementById('card-result').classList.add('ctn-result');
    document.getElementById('card-result').style.backgroundColor = '#38B955';
    document.getElementById('card-number').value = '';
  } else {
    showResult.innerHTML = invalidResult;
    document.getElementById('card-result').classList.add('ctn-guide');
    document.getElementById('card-result').classList.add('ctn-result');
    document.getElementById('card-result').style.backgroundColor = '#DD5D5D';
    document.getElementById('card-number').value = '';
  }
});

cleanInputCard.addEventListener('keypress', () => {
  document.getElementById('card-result').innerHTML = '';
  document.getElementById('tip-msg').innerHTML = '';
  document.getElementById('tip-msg').classList.remove('tool-tip');
  document.getElementById('card-result').classList.remove('ctn-guide');
  document.getElementById('card-result').classList.remove('ctn-result');
});
