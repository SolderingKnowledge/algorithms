/*
approach:
  1 everytime you see opening char-- place it in the stack
  2 every time you see closing chat, compare to last one the stack and delete from the stack

*/


const brackets = (str)=>{
    const stack = [];
    const closed = {
      '(': ')',
      '{':'}',
      '[':']',
    }
    for(let i=0; i<str.length; i++){
      if(str[i] === '('|| str[i]=== "["|| str[i]==='{'){//if current is any opening char
        stack.push(str[i]);
      }
      else{//if current is closing char
        let last = stack.pop();//delete from stack and take it
        if(str[i] !== closed[last]){//if current is closing then compare is to last element in the stack which is opening char
          return false;
        }
      }
  
    }
    return stack.length === 0;//return true if stack is empty
  
  }
  console.log(brackets('([({()})])'))//true;
  
  
  