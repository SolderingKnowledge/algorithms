const flatten = (arr)=>{
    let result = [];
    for(let i=0; i<arr.length; i++){
      Array.isArray(arr[i])?result=result.concat(flatten(arr[i])): result.push(arr[i]);
    }
    return result;
}
flatten([1,[2],[[3]],[[[4]]]]);//[ 1, 2, 3, 4 ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const flatten = (arr)=>{
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])) result = result.concat(flatten(arr[i]));
        else result.push(arr[i]);
    }
    return result;
}

flatten([1,[2],[[3]],[[[4]]]]);//[ 1, 2, 3, 4 ]


