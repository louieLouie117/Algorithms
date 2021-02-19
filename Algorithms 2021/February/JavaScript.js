// Friday February 12------------------------------------------------

// Print the sum of an array //
const simpleArraySum = (ar) =>{
    var sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum = sum + ar[i];
    }
     return sum;
}

let thisList = [1,2,4,5,6,7,8]

simpleArraySum(thisList)



// Complete the aVeryBigSum function below. //
const aVeryBigSum = (ar) => {
    var sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum = sum + ar[i];  
    }
    
  return sum;

}

var bigNum = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
aVeryBigSum(bigNum);


// Reversed String //
function solution(str){
    var newWord = "";
  
    for(var i = str.length - 1; i >= 0; i--){
      console.log(str[i]);
      newWord += str[i]
    
    }
    return newWord; 
  
}

Test.assertEquals(solution('world'), 'dlrow')



// Saturday February 13------------------------------------------------

// Shortest Word //
function findShort(s){
  
  let wordArray = s.split(' '); // split by space
  let shortestWord = Infinity; // compare by infinity.

  for(var i = 0; i < wordArray.length; i++){
    
    console.log(wordArray[i], ":", wordArray[i].length);
    
    if(wordArray[i].length < shortestWord){
      shortestWord = wordArray[i].length;
    }
    
  }
  
  console.log("new array")
  console.log(wordArray)

  return shortestWord;
  
}

// Detect Pangram-----------------

var string = "The quick brown fox jumps over the lazy dog."
function isPangram(string){
  
  string = string.toLowerCase(); 

  let pangram = "abcdefghigklmnopqrstuvwxyz"
  
//   let word = string.split("");
  
  for(let i = 0; i < pangram.length; i++){
      console.log(pangram[i])
    if(string.indexOf(pangram.charAt(i)) === -1){
    
      console.log(string.indexOf(pangram.charAt(i)))
      
      return false
    }
    
  }
  
  return true
  

}