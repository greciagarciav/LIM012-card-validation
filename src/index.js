import validator from './validator.js';

const btnVerifyCardNum = document.getElementById('btn-verifing');
const cleanInputCard = document.getElementById('card-number');

document.getElementById('card-number').addEventListener('input', (e) =>{
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

btnVerifyCardNum.addEventListener('click', () => {
 
  let card =  document.getElementById('card-number').value;
  let validatorNumber = validator.isValid(card);
  let maskifyNumber = validator.maskify(card);
  let showResult = document.getElementById('card-result');
  let validResult =  `<p>${maskifyNumber}, es válida.</p>`;
  let invalidResult = `<p> ${maskifyNumber}, no es válida.</p>`;

    if(card == ''){
      document.getElementById('tip').innerHTML = `Complete este campo`;
      document.getElementById('tip').classList.add('tool-tip');
      document.getElementById('card-number').value = '';
    // } else if (card.length !== 16){
    //   document.getElementById('tip').innerHTML = `Ingrese 16 digitos`;
    //   document.getElementById('tip').classList.add('tool-tip');
    //   document.getElementById('card-number').value = '';
    } else if (validatorNumber == true) {
      showResult.innerHTML = validResult;
      document.getElementById('card-result').classList.add('square');
      document.getElementById('card-result').classList.add('ctn-result');
      document.getElementById('card-result').style.backgroundColor = '#38B955';
      document.getElementById('card-number').value = '';
    } else {
      showResult.innerHTML = invalidResult;
      document.getElementById('card-result').classList.add('square');
      document.getElementById('card-result').classList.add('ctn-result');
      document.getElementById('card-result').style.backgroundColor = '#DD5D5D';
      document.getElementById('card-number').value = '';
    }
});

cleanInputCard.addEventListener('keypress', () => {
  document.getElementById('card-result').innerHTML = ``;
  document.getElementById('tip').innerHTML = ``;
  document.getElementById('tip').classList.remove('tool-tip');
  document.getElementById('card-result').classList.remove('square');
  document.getElementById('card-result').classList.remove('ctn-result');
});
