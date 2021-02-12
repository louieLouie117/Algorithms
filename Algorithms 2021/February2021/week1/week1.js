// Friday February 12------------------------------------------------
// Print the sum of an array
const simpleArraySum = (ar) =>{
    var sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum = sum + ar[i];
    }
     return sum;
}

let thisList = [1,2,4,5,6,7,8]

simpleArraySum(thisList)



// Complete the aVeryBigSum function below.
const aVeryBigSum = (ar) => {
    var sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum = sum + ar[i];  
    }
    
  return sum;

}

var bigNum = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
aVeryBigSum(bigNum);

