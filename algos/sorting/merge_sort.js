/* 

==============
Algorithm name
==============

Merge Sort

===========
Description
===========

Merge Sort is one of the most popular sorting algorithms that is based on the principle of Divide and Conquer Algorithm.

Here, a problem is divided into multiple sub-problems. Each sub-problem is solved individually. Finally, sub-problems are combined to form the final solution.

=========
Algorithm
=========

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                         ||
|| MergeSort(A, p, r):                                     ||
||   if p > r                                              ||
||     return                                              ||
||   q = (p+r)/2                                           ||
||   mergeSort(A, p, q)                                    ||
||   mergeSort(A, q+1, r)                                  ||
||   merge(A, p, q, r)                                     ||
||                                                         ||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

The merge Step of Merge Sort

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                        ||
|| Have we reached the end of any of the arrays?          ||
||   No:                                                  ||
||     Compare current elements of both arrays            ||
||     Copy smaller element into sorted array             ||
||     Move pointer of element containing smaller element ||
||   Yes:                                                 ||
||     Copy all remaining elements of non-empty array     ||
||                                                        ||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

=========================
Merge Sort Complexity
=========================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                            O(n*log n) ||
||--------------------------------------------||
|| Worst                           O(n*log n) ||
||--------------------------------------------||
|| Average                         O(n*log n) ||
||============================================||

||============================================||
|| Space Complexity                O(n)       ||
||============================================||

 */

/* 
=============================
Merge Sort Implementation 
=============================
*/

const merge = (left, right) => {
  let arr = [];

  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
};

const mergeSort = (array) => {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);

  return merge(mergeSort(left), mergeSort(array));
};

/* Read more at: https://www.programiz.com/dsa/merge-sort */
