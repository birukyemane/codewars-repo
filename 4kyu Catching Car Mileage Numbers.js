
function isInteresting(number, awesomePhrases) {
    // Go to town!
    let includes = (num) => awesomePhrases.includes(num);
    if(includes(number)) return 2;
    if(includes(number+1) || includes(number+2)) return 1;
    let strNum = String(number).split('');
    let StrNumOne = String(number+1).split('');
    let StrNumTwo = String(number+2).split('');
   
    // check if digit is the same number
    if(sameNum(strNum)) return 2;
    else if(sameNum(StrNumOne) || sameNum(StrNumTwo)) return 1;
    // any digit followed by all zeros  
    if(followZeros(number)) return 2;
    else if(followZeros(number+1) || followZeros(number+2)) return 1
    //The digits are sequential i.e, incrementing or decrementing
    if(sequential( zeroCheck(strNum))) return 2;
    else if(sequential(zeroCheck(StrNumOne)) || sequential(zeroCheck(StrNumTwo))) return 1;  
    // The digits are a palindrome
    if(isPalindrom(strNum)) return 2;
    else if(isPalindrom(StrNumOne) || isPalindrom(StrNumTwo)) return 1;
    return 0;
  } 
  
  // checks if digits are three or more
  let digitsChecked = (num) => {
   return num.length >=3;
  }
  
  // Every digit is the same number
  let sameNum = (num) => {
    if(!digitsChecked(num)) return false; 
    for(let i=0; i<=num.length-2;i++) {
      if(num[i]!==num[i+1]) return false;
    }
     return true;
  }
  
  // checks if Any digit followed by all zero
  let followZeros = num=> {
    if(!digitsChecked(String(num))) return false;
    return /^[\d][0]+$/.test(String(num))
  }
  
  // checks 0 should come after 9 or 0 should come after 1. 
  
  let zeroCheck = (num)=> {
    console.log('inside zero check',num.includes('0'))
    if(num.includes('0')) { 
      let index = num.indexOf('0');
      if( num[index-1]=='1'|| num[index-1]=='9'){ // if right format slice array except zero for sequence check
         return num.slice(0,num.length-1); 
      }
      else return null;// if wrong format return null. means no need to further check sequences
    }
    else return num; // if no zero return the number as it is 
  }
  
  let sequential = (nums) => {
    if(nums==null) return false; // if num is null means zero is not right fomrmat so no need to check
    if(!digitsChecked(nums)) return false;
    // find difference between last and first numbers in sequence. and add the difference to each number in 
    // the sequence while incrementing or decrementing the differnce. ex. 1234 difference is 3 add it to 
    // each number in sequence while decrementing it. 1+3,2+2+3+1,4+0 we have 4444 so this passes. for decreasing 
    // incrment rather than decrement the difference 
    let result 
    let diff= nums[nums.length-1]-nums[0];
    if(diff > 0) result = nums.map((num,index)=>Number(num)+diff-index);
    else result = nums.map((num,index)=>Number(num)+diff+index);
    return sameNum(result);
  }
  
  let isPalindrom = (num)=>{
    console.log(num,num.length)
    if(!digitsChecked(num)) return false;
    let middle = Math.round((num.length-1)/2);
    let starting = num.slice(0,middle+1).join('');
    let ending = num.slice(middle).reverse().join('');
    console.log(starting,'and', ending)
    return starting == ending
  }