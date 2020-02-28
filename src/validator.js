const validator = {
  isValid: (string) => {
    // Manipulación de strings
    const string2 = string.split('').reverse().join('');
    let sum = 0;
    for (let i = 0; i < string2.length; i += 1) {
      if (i % 2 !== 0) {
        const oddNum = parseInt(string2.charAt(i), 10) * 2;
        if (oddNum > 9) {
          const arr = oddNum.toString().split('');
          const arrSum = parseInt(arr[0], 10) + parseInt(arr[1], 10);
          sum += arrSum;
        } else {
          sum += parseInt(oddNum, 10);
        }
      } else {
        sum += parseInt(string2.charAt(i), 10);
      }
    }

    if (sum % 10 === 0) {
      return true;
    }
    return false;
    /* Manipulación de arrays
    const arrStrings = string.split('').reverse();
    const arrNum = [];
    for (let i = 0; i < arrStrings.length; i += 1) {
      if (i % 2 !== 0) {
        const num = parseInt(arrStrings[i], 10) * 2;
        if (num > 9) {
          const arrOddNum = num.toString().split('');
          const sum = parseInt(arrOddNum[0], 10) + parseInt(arrOddNum[1], 10);
          arrNum.push(sum);
        } else {
          arrNum.push(num);
        }
      } else {
        arrNum.push(parseInt(arrStrings[i], 10));
      }
    }
    const initial = 0;
    const totalSumCardNumber = arrNum.reduce((sum, current) => sum + current, initial);
    if (totalSumCardNumber % 10 === 0) {
      return true;
    }
    return false; */
  },

  maskify: (string) => {
    // Manipulación de strings
    let stringResult = '';
    for (let i = 0; i < string.length; i += 1) {
      if (i < string.length - 4) {
        stringResult += '#';
      } else {
        stringResult += string.charAt(i);
      }
    }
    return stringResult;
    /* Manipulación de arrays
    const arr = string.split('');
    let stringResult = '';
    for (let i = 0; i < arr.length; i += 1) {
      if (i < arr.length - 4) {
        stringResult += '#';
      } else {
        stringResult += arr[i];
      }
    }
    return stringResult; */
  },
};

export default validator;
