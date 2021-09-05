/* 

==============
Algorithm name
==============

Counting Sort

===========
Description
===========

Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.

To use counting sort algorithm, array must only contain integers, and it is assumed that the minimum and maximum values are already known.

=========
Algorithm
=========

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                                ||
|| countingSort(array, size)                                      ||
||   max <- find largest element in array                         ||
||   initialize count array with all zeros                        ||
||   for j <- 0 to size                                           ||
||     find the total count of each unique element and            ||
||     store the count at jth index in count array                ||
||   for i <- 1 to max                                            ||
||     find the cumulative sum and store it in count array itself ||
||   for j <- size down to 1                                      ||
||     restore the elements to array                              ||
||     decrease count of each element restored by 1               ||
||                                                                ||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

========================
Counting Sort Complexity
========================

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
Counting Sort Implementation 
=============================
*/

const countingSort = (arr, min, max) => {
  let i = min;
  let j = 0;
  let len = arr.length;
  let count = [];

  for (i; i <= max; i++) {
    count[i] = 0;
  }

  for (i = 0; i < len; i++) {
    count[arr[i]] += 1;
  }

  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }

  return arr;
};

/* Read more at: https://www.programiz.com/dsa/counting-sort */
