function dfs(graph, startNode, visited = new Set()) {
	if (visited.has(startNode)) return

	console.log(startNode) // Process the node
	visited.add(startNode)

	for (const neighbor of graph[startNode]) {
		if (!visited.has(neighbor)) {
			dfs(graph, neighbor, visited) // Recursive call
		}
	}
}

// Example graph as an adjacency list
const graphDFS = {
	A: ['B', 'C'],
	B: ['A', 'D', 'E'],
	C: ['A', 'F'],
	D: ['B'],
	E: ['B', 'F'],
	F: ['C', 'E'],
}

dfs(graphDFS, 'A') // Output: A B D E F C
