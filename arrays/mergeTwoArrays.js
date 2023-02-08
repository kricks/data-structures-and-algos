// greedy with edge cases
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let i = 0;

    // check that i is less than sum of arr1 and arr2
    while (i < (arr1.length + arr2.length)) {
        // need to check if arr1 or arr2 is runs out or is depleted
        let isArr1Out = index1 >= arr1.length;
        let isArr2Out = index2 >= arr2.length;

        if (!isArr1Out && (isArr2Out || (arr1[index1] < arr2[index2]))) {
            merged[i] = arr1[index1];
            index1++
        } else {
            merged[i] = arr2[index2];
            index2++;
        }
        i++;
    }

    return merged;
}

function spreadMerge(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a, b) => a - b);
}

console.log('Merged sorted', mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log('Spread merge', spreadMerge([0, 3, 4, 31], [4, 6, 30]));
// output : [0, 3, 4, 4, 6, 30, 31]
