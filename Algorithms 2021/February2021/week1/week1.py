# Friday February 12------------------------------------------------
# Print the sum of the array's elements as a single integer.
def simpleArraySum(ar):
    sum = 0
    for i in range(len(ar)):
        sum = sum + ar[i]

    return sum


thislist = [1, 2, 3, 4, 5, 6, 7]
simpleArraySum(thislist)


# Complete the aVeryBigSum function below.
def aVeryBigSum(ar):
    sum = 0
    for i in range(len(ar)):
        sum = sum + ar[i]
    return sum
