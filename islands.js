const islands = grid => {
    let visited = [];
    for(let i = 0; i < grid.length; i++) {
      visited[i] = [];
    }
    let count = 0;
    for(let x = 0; x < grid.length; x++) {
      for(let y = 0; y < grid[x].length; y++) {
        if(!visited[x][y] && grid[x][y] === 1) {
          count++;
          markIsland(grid, x, y, visited);
        }
        visited[x][y] = true;
      }
    }
    return count;
  };
  
  
  const markIsland = (grid, x, y, visited) => {
    if(x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
        return;
      }
    if(visited[x][y] === true) {
      return;
    }
    visited[x][y] = true;
    if(grid[x][y] === 0) {
    return;
    }
    markIsland(grid, x - 1, y, visited);
    markIsland(grid, x + 1, y, visited);
    markIsland(grid, x, y - 1, visited);
    markIsland(grid, x, y + 1, visited);
  };
  
  islands([
    [1,1,0,0,1],
    [1,1,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,0,0,1,1]
  ]);//output: 4






  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  const islands = grid =>{
    let count = 0;
    for(let x=0; x<grid.length; x++){
      for(let y=0; y<grid[0].length; y++){
        if(grid[x][y]=== 1){//if first el is one(land)
          count++;
          searching(grid, x, y);
        }
      }
    }
    return count; 
  }
  
  const searching = (grid, x, y)=>{
    if(x<0 || x>=grid.length || y < 0 || y>=grid[0].length || grid[x][y]===0){//if everything is done, to stop the recursion
      return;
    }
    grid[x][y]=0;//start overiting once we count the island
    searching(grid, x-1, y);//top column
    searching(grid,x+1, y);//bottom column
    searching(grid, x, y-1);//left row
    searching(grid, x, y+1);//right row
  }
  
  islands([
    [1,0,0,0],
    [1,1,0,0],
    [0,0,0,0],
  ])