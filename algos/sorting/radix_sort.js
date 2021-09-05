/* 

==============
Algorithm name
==============

Radix Sort

===========
Description
===========

Radix sort is a sorting algorithm that sorts the elements by first grouping the individual digits of the same place value. Then, sort the elements according to their increasing/decreasing order.

Suppose, we have an array of 8 elements. First, we will sort elements based on the value of the unit place. Then, we will sort elements based on the value of the tenth place. This process goes on until the last significant place.

=========
Algorithm
=========

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                                        ||
|| radixSort(array)                                                       ||
||   d <- maximum number of digits in the largest element                 ||
||   create d buckets of size 0-9                                         ||
||   for i <- 0 to d                                                      ||
||     sort the elements according to ith place digits using countingSort ||
||                                                                        ||
|| countingSort(array, size)                                              ||
||   max <- find largest element in array                                 ||
||   initialize count array with all zeros                                ||
||   for j <- 0 to size                                                   ||
||     find the total count of each unique element and                    ||
||     store the count at jth index in count array                        ||
||   for i <- 1 to max                                                    ||
||     find the cumulative sum and store it in count array itself         ||
||   for j <- size down to 1                                              ||
||     restore the elements to array                                      ||
||     decrease count of each element restored by 1                       ||
||                                                                        ||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

=====================
Radix Sort Complexity
=====================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                                O(n+k) ||
||--------------------------------------------||
|| Worst                               O(n+k) ||
||--------------------------------------------||
|| Average                             O(n+k) ||
||============================================||

||============================================||
|| Space Complexity                    O(max) ||
||============================================||

 */

/* 
=============================
Radix Sort Implementation 
=============================
*/

const countingSort = (arr, min, max) => {
  let i = min;
  let j = 0;
  let len = arr.length;
  let count = [];

  //Store the frequency
  for (i; i <= max; i++) {
    count[i] = 0;
  }

  //Accumulate the frequency
  for (i = 0; i < len; i++) {
    count[arr[i]] += 1;
  }

  //Sort based on frequency
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }

  return arr;
};

const radixSort = (arr) => {
  //Get the max element
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  //Sort the array using counting sort
  for (let i = 1; parseInt(max / i) > 0; i *= 10) {
    countingSort(arr, min, max, arr.length, i);
  }

  return arr
};

/* Read more at: https://www.programiz.com/dsa/counting-sort */
