// ordenando.js

// a) Função swap
const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };
  
  // b) Função shuffle
  const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const pos1 = Math.floor(Math.random() * arr.length);
      const pos2 = Math.floor(Math.random() * arr.length);
      swap(arr, pos1, pos2);
    }
  };
  
  // c) Função bubble_sort
  const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };
  
  // d) Função selection_sort
  const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      swap(arr, i, minIndex);
    }
  };
  
  // e) Função quick_sort
  const quick_sort = (arr, start, end) => {
    if (start < end) {
      const pivotIndex = partition(arr, start, end);
      quick_sort(arr, start, pivotIndex - 1);
      quick_sort(arr, pivotIndex + 1, end);
    }
  };
  
  // f) Função particionamento
  const partition = (arr, start, end) => {
    const pivot = arr[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, end);
    return i + 1;
  };