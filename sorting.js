const selection=(a)=>{
    for(let i=0;i<a.length;i++){
      let lowest =i;
      for(let j=i+1; j<a.length; j++){
        if(a[j]<a[i]){//if next one is smaller than current
          lowest = j;
        }
        if(i!==j){
          let temp =a[i];//swapping
          a[i]=a[lowest];
          a[lowest]=temp;
        }
      }
    }
    return a;
  }
  selection([4,3,2,1]);