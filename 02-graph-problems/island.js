function getNeighbors(row, col, graph) {
  const res = [];
  
  if (graph[row - 1] && graph[row - 1][col]) res.push([row - 1, col]);
  if (graph[row + 1] && graph[row + 1][col]) res.push([row + 1, col]);
  if (graph[row][col - 1]) res.push([row, col - 1]);
  if (graph[row][col + 1]) res.push([row, col + 1]);

  return res;
}

function islandSize(row, col, graph) {
  let stack = [[row, col]];
  let visited = new Set([`${[row, col]}`]);
  let size = 0;

  while (stack.length) {
    let curr = stack.pop();
    
    size++;
    
    let neighbors = getNeighbors(...curr, graph);
    neighbors.forEach(el => {
      if (!visited.has(`${el}`)) {
        visited.add(`${el}`);
        stack.push(el);
      }
    })
  }
  
  return size;
}

module.exports = [getNeighbors, islandSize];
