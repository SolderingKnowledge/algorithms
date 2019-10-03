getClassNames = dom =>{
    const listOfClass = [];
    const queue = [dom];
    while(queue.length){
        const node = queue.shift();
        listOfClass.push(node.className);
        queue.push(node.children)
    }
    return listOfClass;
}