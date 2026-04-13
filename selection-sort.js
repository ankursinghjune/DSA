// time complexity: O(n^2)
// space complexity: O(1)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
console.log(selectionSort([7, 3, 2, 5, 4, 6, 10, 9, 8, 1]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
