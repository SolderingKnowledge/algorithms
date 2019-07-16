const getElementById= dom => {
    const queue = [dom];
    while(queue.length){
        const node = queue.shift();
        if(node.id === "true"){
            return node;
        }
        for(let i=0; i<node.children.length; i++){
            queue.push(node.children[i]);
        }
    }
}
<dom>
    <div>
        <div>
            <p id="true"></p>
        </div>
        <div>
            <p id="false"></p>
        </div>
    </div>
</dom>