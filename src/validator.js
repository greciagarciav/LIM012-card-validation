const validator = {
  
  isValid : (cardNumber) => {
    
    let arrCardNumberReverted = cardNumber.split('').reverse();
  
    let arrCardNumberToSum= [];
    for(let i = 0; i < arrCardNumberReverted.length ; i++){
        if(i % 2 !== 0){
         let oddCnreverted = arrCardNumberReverted[i] * 2;
          if (oddCnreverted > 9){
            let arrOddCnreverted = oddCnreverted.toString().split('');
            let sumArrOdd = parseInt(arrOddCnreverted[0]) + parseInt(arrOddCnreverted[1]);
            arrCardNumberToSum.push(sumArrOdd);
          }else{
            arrCardNumberToSum.push(oddCnreverted);
          }
        }
         else {
        arrCardNumberToSum.push(parseInt(arrCardNumberReverted[i]));
        }   
    } 
  
    let initial = 0;
    let totalSumCardNumber = arrCardNumberToSum.reduce((sum, current) => sum + current, initial);
    
    if(totalSumCardNumber%10==0){
      return true;
    } else {
      return false;
    }
  },

  maskify : (creditCardNumber) => {

    let arrCreditCardNumber = creditCardNumber.split("");
    let maskedCreditCardNumber = '';
  
    for(let i = 0; i < arrCreditCardNumber.length; i++){
      if(i < arrCreditCardNumber.length - 4){
        maskedCreditCardNumber += '#';
      } else {
        maskedCreditCardNumber += arrCreditCardNumber[i];
      }
    }
    return maskedCreditCardNumber;
  },
};

export default validator;
