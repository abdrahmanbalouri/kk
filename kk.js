function sentencePyramid(sentence) {

    let b = sentence.split(' ')
    let n = []
    let x= ''

    for( let i =0;i<b.length;i++){
        if(i!==b[b.length-1]){
            x+= b[i]+" "

        }else{
               x+= b[i]
        }
        n.push(x)


    }


  return n.join('\n')
}


console.log( sentencePyramid("This is a simple sentence pyramid")
);
