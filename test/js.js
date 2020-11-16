// one option
function stringReverse(sentence){
    const result = [];
    const arr = sentence.split(" ");
    for(let i=0; i<arr.length; i++){
        let word = ""
        for(let j= arr[i].length-1; j>=0; j--){
            word += arr[i][j];
        }
        result.push(word);
    }
    return result.join(" ");
}
console.log(stringReverse("already up to date"));//ydaerla pu ot etad