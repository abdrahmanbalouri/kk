function palindromicChain(numbers) {

    let k = []
    for (let i = 0; i < numbers.length; i++) {

        for (let j = 0; j <= 100; j++) {

            if (j >= 100) {
                console.log(11);
                

                k.push(0)
                break
            }

            if (numbers[i] !== swap(numbers[i])) {

                numbers[i] = numbers[i] + swap(numbers[i])
                continue

            } else {

                k.push(numbers[i])
                break
            }







        }



    }
    return k
}


function swap(num) {
    let b = String(num).split('')

    return Number(b.reverse().join(''))


}

console.log(palindromicChain([857, 33, 1623, 196, 22222]));
