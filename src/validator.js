const validator = {
  
  isValid : (cardNumber) => {
    
    let numberReverted = cardNumber.split("").reverse();
  
    let result= [];
    for(let i = 0; i < numberReverted.length ; i++){
        if(i % 2 !== 0){
         result.push(numberReverted[i] * 2);
        }
         else {
        result.push(parseInt(numberReverted[i]));
        }   
    } 
  
    let newArr = [];
    for(let i = 0; i < result.length; i++){
      let arr1;
      let sum12;
      if(result[i]>9){
          arr1 = result[i].toString().split("");
          sum12 = parseInt(arr1[0]) + parseInt(arr1[1]);
        newArr.push(sum12); 
      } else {
        newArr.push((result[i]));
      }
    }
  
    let initial = 0;
    let total = newArr.reduce((sum, current) => sum + current, initial);
 
    if(total % 10 == 0){
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
