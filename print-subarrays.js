// time complexity: O(n^2)
// space complexity: O(n)

function subArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        let subArr = [];
        for (let j = i; j < arr.length; j++) {
            subArr.push(arr[j]);
            console.log(subArr);
        }
    }
}
subArrays([1, 2, 3, 4, 5]);

// length of each subarray = (j-i)+1
// i - start index
// j - end index

/*
[ 1 ]
[ 1, 2 ]
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
[ 2 ]
[ 2, 3 ]
[ 2, 3, 4 ]
[ 2, 3, 4, 5 ]
[ 3 ]
[ 3, 4 ]
[ 3, 4, 5 ]
[ 4 ]
[ 4, 5 ]
[ 5 ]
*/
