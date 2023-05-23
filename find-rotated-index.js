

function findRotatedIndex(arr, val, low = 0, high = arr.length - 1) {
    let mid = Math.floor((high + low) / 2)

    if(high >= low) {
        if(arr[mid] === val) {
            return mid;
        }
        if (arr[mid] > arr[high]) {
            if(val > arr[mid] || val <= arr[high]) {
                return findRotatedIndex(arr, val, mid + 1, high);
            } else {
                return findRotatedIndex(arr, val, low, mid - 1);
            }
        } else {
            if(val > arr[mid] && val <= arr[high]) {
                return findRotatedIndex(arr, val, mid + 1, high)
            } else {
                return findRotatedIndex(arr, val, low, mid - 1);
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex
