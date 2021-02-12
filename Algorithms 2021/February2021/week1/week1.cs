// Friday February 12------------------------------------------------
// Print the sum of an array
static int simpleArraySum(int[] ar)
{
    int sum = 0;
    for (int i = 0; i < ar.Length; i++)
    {
        sum = sum + ar[i];
    }
    return sum;
}

int[] thisList = { 1, 2, 4, 5, 6 };
simpleArraySum(thisList);



// Complete the aVeryBigSum function below.
static long aVeryBigSum(long[] ar)
{
    long sum = 0;
    for (long i = 0; i < ar.Length; i++)
    {
        sum = sum + ar[i];

    }
    return sum;

}

// Reversed String
// for this solution two thing to recall is that you need to loop in revers and +=
public static class Kata
{
  public static string Solution(string str) 
  {
    
    string newWord = "";
    for (int i = str.Length -1 ; i >= 0 ; i--){
      Console.WriteLine(str[i]);
      newWord += str[i];

    }
    
    return newWord;
    
    
    throw new NotImplementedException("TODO: Kata.Solution(string) => string");
    
    
  }
}