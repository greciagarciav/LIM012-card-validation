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

    let num = creditCardNumber.split("");
    let result="";
  
    for(var i = 0; i < num.length; i++){
     if(i < (num.length - 4)){
       result +="#";
     } else {
       result += creditCardNumber[i];
     }
    }
    return result;
  },
};

export default validator;
