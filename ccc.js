function isSnakePath(grid) {
let b =0
 let f = 0

for(let i =0;i<grid.length;i++){

    for(let j=0;j<grid[i].length;j++){
        if(grid[i][j]==1){
         f++
        }
    }
}



    let k = grid.length
    for(let i =0;i<grid.length;i++){

        for(let j =0;j<k;j++){

            if (grid[i][j]==1){
                b += 1
                let count =0
               if(j+1<k &&grid[i][j+1]==1){
                count++
               }
              if(j-1>=0&&grid[i][j-1]==1){
                   count ++
              }
          if(i+1<k&&grid[i+1][j]==1){
            count++
          }
           if(i-1>=0&&grid[i-1][j]==1){
              count++
           }
                                if ((b==1 && b==f )&&count <1)return false

              if ((b!==1 && b!==f )&&count <2)return false
            
            
              
                 
            }
        }
    }
    

 return true


}
const grid1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
];

const grid2 = [
  [1, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
];

console.log(isSnakePath(grid1));
