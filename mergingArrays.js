//Merge 2 arrays in sorted order
const mergeArrays = (a1, a2)=>{
    const a = a1.concat(a2);
    let sorted = false;
    while(!sorted){
      sorted = true;
      for(let i=0; i<a.length; i++){
        if(a[i- 1] > a[i]){
          sorted = false;
          let temp = a[i-1];
          a[i-1]= a[i];
          a[i] = temp
        }
      }
    }
    return a;
  }
  
  mergeArrays([3,2,1],[4,5,6]);