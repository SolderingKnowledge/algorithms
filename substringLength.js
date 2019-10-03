//Find the longest substring length
//input: 'abaabcdbc'; output: 4 =>'abcd'.length
//input: 'ccccccccccc' output: 1 =>'c'.length
const substringLength = str => {
    const hash = {};
    let start = 0;
    let max = 0;
    for(let i=0; i<str.length; i++){
        let end = str[i];
        if(hash[end]>=start){//end >= start
            start = hash[end]+1; //keep incrementing start by one
        }
        hash[end]=i;
        max = Math.max(max, i- start +1);//sliding window  1- hash[end] + 1
    }
    return max;
}
substringLength('abaabcdbc');//4
//substringLength('ccccccccccc');//4




/*
 Tips:
    Sliding window pattern usually:  current index is usually is the end of sliding window!

*/