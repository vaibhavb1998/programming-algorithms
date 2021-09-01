/* 

==============
Algorithm name
==============

Bubble Sort

===========
Description
===========

Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.

Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.

=========
Algorithm
=========

||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                ||
||  bubbleSort(array)                             ||
||  for i <- 1 to indexOfLastUnsortedElement-1    ||
||      if leftElement > rightElement             ||
||      swap leftElement and rightElement         ||
||  end bubbleSort                                ||
||                                                ||
||||||||||||||||||||||||||||||||||||||||||||||||||||

===============================
Optimized Bubble Sort Algorithm
===============================

In the above algorithm, all the comparisons are made even if the array is already sorted.

This increases the execution time.

To solve this, we can introduce an extra variable swapped. The value of swapped is set true if there occurs swapping of elements. Otherwise, it is set false.

After an iteration, if there is no swapping, the value of swapped will be false. This means elements are already sorted and there is no need to perform further iterations.

This will reduce the execution time and helps to optimize the bubble sort.

||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                ||
||  bubbleSort(array)                             ||
||  swapped <- false                              ||
||  for i <- 1 to indexOfLastUnsortedElement-1    ||
||      if leftElement > rightElement             ||
||      swap leftElement and rightElement         ||
||      swapped <- true                           ||
||  end bubbleSort                                ||
||                                                ||
||||||||||||||||||||||||||||||||||||||||||||||||||||


======================
Bubble Sort Complexity
======================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                                 O(n)  ||
||--------------------------------------------||
|| Worst                                O(n)  ||
||--------------------------------------------||
|| Average                              O(n)  ||
||============================================||

||============================================||
|| Space Complexity                     O(1)  ||
||============================================||

 */

/* 
==========================
Bubble Sort Implementation 
==========================
*/

const bubbleSort = (arr) => {
  //Length of the array
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      //Swap the numbers
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

/* 
====================================
Optimized Bubble Sort Implementation 
====================================
*/

const optimizedBubbleSort = (arr) => {
  //Length of the array
  let n = arr.length;

  //Flag to check if swap
  //is performed in inner loop
  let swapped = false;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      //Swap elements
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        //Set the flag to true if swapped
        swapped = true;
      }
    }

    //If not swapped then break the loop
    if (!swapped) {
      break;
    }
  }

  return arr;
};
