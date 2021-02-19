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

# Reversed Strings
# for this solution two thing to recall is that you need to loop in revers and +=


def solution(string):
    newWord = ""
    for i in range(len(string) - 1, -1, -1):
        newWord += string[i]
        print(string[i])
    return newWord


# Saturday February 13------------------------------------------------

# Shortest Word #
def find_short(s):
    wordArray = s.split(' ')  # split by space
    shortestWord = float('inf')  # infinity

    for i in range(len(wordArray)):
        print(wordArray[i], ":", len(wordArray[i]))

        if len(wordArray[i]) < shortestWord:
            shortestWord = len(wordArray[i])

    return shortestWord  # l: shortest word length
