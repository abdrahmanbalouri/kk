function mergeAndTransform(objects, transforms) {
   let p = []
    for(let i =0;i<objects.length;i++){
        
         p.push(...Object.keys(objects[i]))

    }
    console.log(p,'----');
    
    let merged = Object.assign({}, ...objects);
        let c =Object.keys(merged).length

 
  let add =0
  let over = p.length - c   

    for(const v of transforms){
       merged = v(merged)
       if(c!==Object.keys(merged).length){
        console.log(c,Object.keys(merged).length);
        add ++ 
         c++
       }


    }


    return {merged, transformationsCount:transforms.length,keadd : add , overe : over   }
}
const objArray = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }];

const transforms = [
  (obj) => ({ ...obj, a: obj.a * 10 }),
  (obj) => {
    const { b, ...rest } = obj;
    return rest;
  },
  (obj) => (obj.e ? obj : { ...obj, e: "newKey" }),
];

const result = mergeAndTransform(objArray, transforms);

console.log(result);

