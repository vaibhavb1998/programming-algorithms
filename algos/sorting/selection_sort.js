/* 

==============
Algorithm name
==============

Selection Sort

===========
Description
===========

Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

=========
Algorithm
=========

|||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                   ||
||  selectionSort(array, size)                       ||
||    repeat (size - 1) times                        ||
||    set the first unsorted element as the minimum  ||
||    for each of the unsorted elements              ||
||      if element < currentMinimum                  ||
||        set element as new minimum                 ||
||    swap minimum with first unsorted position      ||
||  end selectionSort                                ||
||                                                   ||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||

=========================
Selection Sort Complexity
=========================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                                O(n^2) ||
||--------------------------------------------||
|| Worst                               O(n^2) ||
||--------------------------------------------||
|| Average                             O(n^2) ||
||============================================||

||============================================||
|| Space Complexity                    O(1)   ||
||============================================||

 */

/* 
=============================
Selection Sort Implementation 
=============================
*/

const selectionSort = (inputArr) => {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }

    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
};

/* Read more at: https://www.programiz.com/dsa/selection-sort */
