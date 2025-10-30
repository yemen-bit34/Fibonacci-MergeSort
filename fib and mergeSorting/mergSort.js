/* merge sorting (Divide&Conqurer) exercise for yem-bit34 THE ODIN PROJECT */
const merge = (arr, left, mid, right) => {
  //calculate subArray of the left&Right
  const n1 = mid - left + 1;
  const n2 = right - mid;

  //creating Temp array to store left&Right side of the array
  const L = new Array(n1);
  const R = new Array(n2);

  //copy data from original arr to the Temp array
  for (let i = 0; i < n1; i++) L[i] = arr[left + i];
  for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j]; //1 error reason " arr[right + 1 + j]; " instead of " arr[mid + 1 + j]; "

  // prep reading the Temparrays from R to L starting from 0
  let i = 0,
    j = 0;
  //merg reading to the original array (arr) which starts from left
  let k = left;

  //the main merge continues untill no elements in each sides of the Temp array
  while (i < n1 && j < n2) {
    /*if the L less or equal R it puts L elements in the original array 
    to move to the next element in L
    else put R in original array and increment it  to move to the next element
    */
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    //increment K in each loop
    k++;
  }
  /*copy remaining elements of L if there was  and if R finished first*/
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  /*copy remaining elements of R if there was  and if L finished first*/
  while (j < n2) {
    //2nd error " i instead of j "
    arr[k] = R[j];
    j++;
    k++;
  }
};

// this function applys the recursion rules recursivly
const mergeSort = (arr, left, right) => {
  /*
  condition if one item lefts only left bigger or equal to right 
  it will be considered as sorted 
  */
  if (left >= right) {
    return;
  }

  //calculate the mid to slice to 2 equals as possible
  const mid = Math.floor(left + (right - left) / 2);

  //recursive call to sort from left to middle of the array
  mergeSort(arr, left, mid);
  //recursive call to sort from middle to right of the array
  mergeSort(arr, mid + 1, right); // +1 to make sure there is no element between the R&L
  // as the middle considered as part of Left side of the array
  //+ prevent infinite recursion

  //merge all the the array
  merge(arr, left, mid, right);
};

//runing the algorithm
/*  */
const arr = [];
const arr2 = [1, 5, 7];
const arr3 = [3, 9, 5, 1];
const arr4 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr5 = [105, 79, 100, 110];

mergeSort(
  arr5,
  0,
  arr5.length - 1
); /* we use -1 due to indexing and if didnt do it 
it will consider it as we are indexing undefined el (Index Out of Bounds) */
console.log(`[${arr5}]`);

//note : if any for RangeError check the baseCase
