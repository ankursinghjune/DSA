// time complexity: O(n^2)
// space complexity: O(1)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return arr;
}
console.log(insertionSort([7, 3, 2, 5, 4, 6, 10, 9, 8, 1]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
