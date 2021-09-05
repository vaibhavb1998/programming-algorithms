/* 

==============
Algorithm name
==============

Quick Sort

===========
Description
===========

Quicksort is a sorting algorithm based on the divide and conquer approach where

1. An array is divided into subarrays by selecting a pivot element (element selected from the array).

While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.

2. The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.

3. At this point, elements are already sorted. Finally, elements are combined to form a sorted array.

=========
Algorithm
=========

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                                  ||
|| quickSort(array, leftmostIndex, rightmostIndex)                  ||
||   if (leftmostIndex < rightmostIndex)                            ||
||     pivotIndex <- partition(array,leftmostIndex, rightmostIndex) ||
||     quickSort(array, leftmostIndex, pivotIndex - 1)              ||
||     quickSort(array, pivotIndex, rightmostIndex)                 ||
||                                                                  ||
|| partition(array, leftmostIndex, rightmostIndex)                  ||
||   set rightmostIndex as pivotIndex                               ||
||   storeIndex <- leftmostIndex - 1                                ||
||   for i <- leftmostIndex + 1 to rightmostIndex                   ||
||   if element[i] < pivotElement                                   ||
||     swap element[i] and element[storeIndex]                      ||
||     storeIndex++                                                 ||
||     swap pivotElement and element[storeIndex+1]                  ||
||   return storeIndex + 1                                          ||
||                                                                  ||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

=====================
Quick Sort Complexity
=====================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                            O(n*log n) ||
||--------------------------------------------||
|| Worst                           O(n^2)     ||
||--------------------------------------------||
|| Average                         O(n*log n) ||
||============================================||

||============================================||
|| Space Complexity                O(log n)   ||
||============================================||

 */

/* 
=============================
Quick Sort Implementation 
=============================
*/

const quickSort = (originalList) => {
  const list = [...originalList]

  if (list.length < 2) {
    return list
  }

  const pivot = list[0]

  const smaller = list.filter((item) => item < pivot)
  const bigger = list.filter((item) => item > pivot)

  return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

/* Read more at: https://www.programiz.com/dsa/quick-sort */
