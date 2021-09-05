/* 

==============
Algorithm name
==============

Bucket Sort

===========
Description
===========

Bucket Sort is a sorting algorithm that divides the unsorted array elements into several groups called buckets. Each bucket is then sorted by using any of the suitable sorting algorithms or recursively applying the same bucket algorithm.

Finally, the sorted buckets are combined to form a final sorted array.

The process of bucket sort can be understood as a scatter-gather approach. Here, elements are first scattered into buckets then the elements in each bucket are sorted. Finally, the elements are gathered in order.

=========
Algorithm
=========

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||                                                                        ||
|| bucketSort()                                                           ||
||   create N buckets each of which can hold a range of values            ||
||   for all the buckets                                                  ||
||     initialize each bucket with 0 values                               ||
||   for all the buckets                                                  ||
||     put elements into buckets matching the range                       ||
||   for all the buckets                                                  ||
||     sort elements in each bucket                                       ||
||   gather elements from each bucket                                     ||
|| end bucketSort                                                         ||
||                                                                        ||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

======================
Bucket Sort Complexity
======================

||============================================||
|| Time Complexity                            ||
||============================================||
|| Best                                O(n+k) ||
||--------------------------------------------||
|| Worst                               O(n^2) ||
||--------------------------------------------||
|| Average                             O(n)   ||
||============================================||

||============================================||
|| Space Complexity                    O(n+k) ||
||============================================||

 */

/* 
=============================
Bucket Sort Implementation 
=============================
*/


/* Read more at: https://www.programiz.com/dsa/bucket-sort */
