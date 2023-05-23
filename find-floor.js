function findFloor(arr, val, low = 0, high = arr.length - 1) {

    if(low <= high){
        // divide the array and store middle index in mid (rounded down)
        let mid = low + Math.floor((high - low) / 2);
        // if arr[mid] is 0 and arr[mid] is < val, first index is the target || if arr[mid] is > val && middle - 1 is < val, arr[mid] - 1 = target
        if(mid === 0 && arr[mid] < val || arr[mid] > val && arr[mid - 1] < val) {
            return arr[mid - 1];
        } else if(arr[mid] < val) {
            // at final index and arr[mid] < val ? arr[mid] = target
            if(mid === arr.length - 1) {
                return arr[mid];
            }
            // search right side
            return findFloor(arr, val, mid + 1, high)
        }
        // search left side
        return findFloor(arr, val, low, mid - 1)
    }
    // target value not in array, return -1
    return -1;
}

module.exports = findFloor