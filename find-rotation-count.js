function findRotationCount(arr, low = 0, high = arr.length - 1) {

    if(low <= high) {
        // divide the array and store index of middle in mid (rounded down)
        let mid = low + Math.floor(((high - low) / 2));
        // if value at index arr[mid] is flanked by > values, it is the pivot point and it's index = number of rotations
        if(mid === 0 || (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) ) {
            // found it
            return mid;
            // if value at index arr[mid] is > value on left and < value on right, pivot point is to the left
        } else if (arr[mid] > arr[mid] - 1 && arr[mid] >= arr[arr.length - 1]) {
            // if last index value is < first index value = pivot point is last index
            if(arr[mid] < arr[0]) {
                return mid;
            }
            // search right side of arr
            return findRotationCount(arr, mid + 1, high) 
        }
        // search right side
        return findRotationCount(arr, low, mid - 1)
    }
    return -1
}

module.exports = findRotationCount
