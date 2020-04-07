/*
 make sure 2nd array contains all elements in 1st array

[1, 2, 3], [1] -> true
[2, 1, 1, 3], [1, 3] -> true
[1], [1, 2]) -> false
[1, 2], [2, 2]) -> false

*/



const subset = (first, second)=>{
    for(let i=0; i<second.length; i++){
      let current = first.indexOf(second[i])
      if(current === -1){
        return false;
      }
      delete first[current]; 
    }
    return true;
  }
  subset([1,2,3], [1,2]);


/*
solution approach:
  take second array item and check to see if it is not missing in first array
  if it exists then destroy in first array

*/