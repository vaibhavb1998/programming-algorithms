/* 

==============
Algorithm name
==============

Insertion Sort

===========
Description
===========

Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

Insertion sort works similarly as we sort cards in our hand in a card game.

We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place.

=========
Algorithm
=========

|||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                   ||
||  insertionSort(array)                             ||
||    mark first element as sorted                   ||
||    for each unsorted element X                    ||
||      'extract' the element X                      ||
||      for j <- lastSortedIndex down to 0           ||
||        if current element j > X                   ||
||          move sorted element to the right by 1    ||
||      break loop and insert X here                 ||
||  end insertionSort                                ||
||                                                   ||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||

=========================
Insertion Sort Complexity
=========================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                                O(n)   ||
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
Insertion Sort Implementation 
=============================
*/

const insertionSort = (inputArr) => {
  for (let i = 1; i < inputArr.length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];

    // The last element of our sorted subarray
    let j = i - 1;

    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }

    inputArr[j + 1] = current;
  }

  return inputArr;
};

/* Read more at: https://www.programiz.com/dsa/insertion-sort */
