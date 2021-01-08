const comparingNodes = (dom, dom2, node)=>{
    let found;
    const queue=[dom];
    while(queue.length){
        const n= queue.shift();
        if(n === node){
            found = n;
        }
        for(let i=0; i<n.children.length; i++){
            queue.push(n.children[i]);
        }
    }
    trackingIdx = [];
    while(found !== dom){
        found = found.parentNode;
        trackingIdx.push(found.children.indexOf(found));
    }
    for(let i=0; i<trackingIdx.length; i++){
        const q = [dom2];
        const took = q.shift();
        q.push(took.children);
        found = took.children[trackingIdx[i]]
    }
    return found;

}



const dom = {
    dom: 
    `<dom>
        <p>
        <span></span>//given node is this
        </p>
    </dom>`
}

const dom2 = {
    dom: 
    `<dom>
        <p>
        <h></h>
        </p>
    </dom>`


}