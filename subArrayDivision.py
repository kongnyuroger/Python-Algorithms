# THis algorithm divides an array in subarrays of length m given that the sum of
# values in the subarray is equal to a certain number d where s is length of original array
def birthday(s, d, m):
     count = 0
     for i in range(len(s) - m + 1):
          if sum(s[i:i+m]) == d:
               count += 1
     print(count)
birthday([2,2,1,3,2],4,2)

#this algorithm sum up two elements of an array an check if it is multiple of a certain number K.
# n is length of array
def divisibleSumPairs(n, k, ar):
    count = 0
    for i in range(n):  
        for j in range(i + 1, n):             
             if (ar[i] + ar[j]) % k == 0:
                  count += 1
    print(count) 

divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])