let arr = [2, 3, -4, 5, -6]

function swap(i, k) {
  t = arr[i]
  arr[i] = arr[k]
  arr[k] = t
}

function bubble(arr) {
    let i, k, b
    for (i = 0; i < arr.length; i++) {
        b = false
        for (k = 0; k < arr.length - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                swap(k, k + 1) 
                b = true
            }
        }
        console.log(arr)
        if (!b)
            break
    }
}

console.log(arr)//before sorting
bubble(arr)//after
