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

// Diagonal Difference