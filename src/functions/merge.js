export default function mergeArraysWithoutOverlap(array1, array2) {
  // Filter out elements from array2 that are already present in array1
  const uniqueArray2 = array2.filter((item) => !array1.includes(item));

  // Concatenate the two arrays
  const mergedArray = array1.concat(uniqueArray2);

  return mergedArray;
}