/* 

==============
Algorithm name
==============

Binary Search

===========
Description
===========

Binary Search is a searching algorithm for finding an element's position in a sorted array.

In this approach, the element is always searched in the middle of a portion of an array.

***
Note: Binary search can be implemented only on a sorted list of items.
If the elements are not sorted already, we need to sort them first.
***

=========
Algorithm
=========

1. Iterative Method

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                                            ||
|| do until the pointers low and high meet each other                         ||
||   mid = (low + high)/2                                                     ||            
||   if (x == arr[mid])                                                       ||         
||     return mid                                                             ||   
||   else if (x > arr[mid]) // x is on the right side                         ||                                       
||     low = mid + 1                                                          ||    
||   else                   // x is on the left side                          ||                   
||     high = mid - 1                                                         ||  
||                                                                            ||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

2. Recursive Method

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                                            ||
|| binarySearch(arr, x, low, high)                                            ||
||   if low > high                                                            ||
||     return False                                                           ||
||   else                                                                     ||
||     mid = (low + high) / 2                                                 ||
||     if x == arr[mid]                                                       ||
||       return mid                                                           ||
||     else if x > arr[mid]                         // x is on the right side ||                                 
||       return binarySearch(arr, x, mid + 1, high)                           ||      
||     else                                         // x is on the right side ||                                  
||       return binarySearch(arr, x, low, mid - 1)                            ||     
||                                                                            ||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

========================
Binary Search Complexity
========================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                              O(1)     ||
||--------------------------------------------||
|| Worst                             O(log n) ||
||--------------------------------------------||
|| Average                           O(log n) ||
||============================================||

||============================================||
|| Space Complexity                  O(1)     ||
||============================================||

 */

/* 
=============================
Binary Search Implementation 
=============================
*/

// 1. *** Iteration Method ***

const binarySearchIterative = (array, key, low, high) => {
  //  Repeat until the pointers low and high meet each other
  while (low <= high) {
    mid = parseInt(low + (high - low) / 2);

    if (array[mid] === key) {
      return mid;
    } else if (array[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

// 2. *** Recursive Method ***

const binarySearchRecursive = (array, key, low, high) => {
  if (high >= low) {
    mid = parseInt(low + (high - low) / 2);

    //If found at mid, then return it
    if (array[mid] == key) {
      return mid;
    }

    //Search the left half
    else if (array[mid] > key) {
      return binarySearchRecursive(array, key, low, mid - 1);
    }

    //Search the right half
    else {
      return binarySearchRecursive(array, key, mid + 1, high);
    }
  } else {
    return -1;
  }
};

/* Read more at: https://www.programiz.com/dsa/binary-search */
