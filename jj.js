const comparator = (a, b) => a - b;

function bubbleSortAnalyzer(arr, comparator) {
    let v = 0
    let k = 0
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            k++
            let b = comparator(arr[i], arr[j])
            if (b <= 0) {
                continue
            }
            if (b > 0) {
                v++
                console.log(arr[i],arr[j]);
                [arr[i], arr[j]] = [arr[j], arr[i]];

            }


        }


    }

    return { arr, k, v }
}

const result = bubbleSortAnalyzer([4, 2, 7, 1, 3], comparator);
console.log(result);