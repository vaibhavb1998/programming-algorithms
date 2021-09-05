/* 

==============
Algorithm name
==============

Linear Search

===========
Description
===========

Linear search is a sequential searching algorithm where we start from one end and check every element of the list until the desired element is found. It is the simplest searching algorithm.

=========
Algorithm
=========

||||||||||||||||||||||||||||||||||||||||||||||||
||                                            ||
|| LinearSearch(array, key)                   ||
||   for each item in the array               ||
||     if item == value                       ||
||       return its index                     ||
||                                            ||
||||||||||||||||||||||||||||||||||||||||||||||||

========================
Linear Search Complexity
========================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                                  O(1) ||
||--------------------------------------------||
|| Worst                                 O(n) ||
||--------------------------------------------||
|| Average                               O(n) ||
||============================================||

||============================================||
|| Space Complexity                      O(1) ||
||============================================||

 */

/* 
=============================
Linear Search Implementation 
=============================
*/

const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }

  return null;
};

/* Read more at: https://www.programiz.com/dsa/linear-search */
