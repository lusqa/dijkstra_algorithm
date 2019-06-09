import Graph from './algorithm/graph/components/Graph'

const graph = new Graph()

// vertexes
const v0 = graph.addVertex('v0')
const v1 = graph.addVertex('v1')
const v2 = graph.addVertex('v2')
const v3 = graph.addVertex('v3')
const v4 = graph.addVertex('v4')
const v5 = graph.addVertex('v5')

// edges
graph.addEdge(v0, v1, 10)
graph.addEdge(v0, v2, 5)

graph.addEdge(v1, v3, 1)

graph.addEdge(v2, v1, 3)
graph.addEdge(v2, v3, 8)
graph.addEdge(v2, v4, 2)

graph.addEdge(v3, v4, 4)
graph.addEdge(v3, v5, 4)

graph.addEdge(v4, v5, 6)

