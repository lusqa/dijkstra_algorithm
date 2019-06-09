export const depthFirstSearch = (graph, vertex, discovered) => {
  const incidentEdges = graph.incidentEdges(vertex)
  incidentEdges.forEach(e => {
    const opposite = e.opposite(vertex)
    if (!discovered.has(opposite)) {
      discovered.set(opposite, e)
      depthFirstSearch(graph, opposite, discovered)
    }
  })
}

export const depthFirstSearchComplete = graph => {
  const forest = new Map()
  for (let v of graph.vertices) {
    if (!forest.has(v)) {
      forest.set(v, null)
      depthFirstSearch(graph, v, forest)
    }
  }
  return forest
}

export const breadthFirstSearch = (graph, vertex, discovered) => {
  const queue = [vertex]
  while (queue.length > 0) {
    const currentVertex = queue.shift()

    graph.incidentEdges(currentVertex).forEach(edge => {
      const opposite = edge.opposite(currentVertex)

      if (!discovered.has(opposite)) {
        discovered.set(opposite, edge)
        queue.push(opposite)
      }
    })
  }
}

export const constructPath = (origin, destination, discovered) => {
  let path = []
  if (discovered.has(destination)) {
    let step = destination

    path.push(destination)

    while (step !== origin) {
      const edge = discovered.get(step)
      const opposite = edge.opposite(step)
      path.unshift(opposite)
      step = opposite
    }
  }
  return path
}

export const toStringMap = map => {
  map.forEach((key, value, index) => {
    console.log({ key, value, index })
  })
}

// Dijkstra
const setupDijkstra = graph => {
  const map = new Map()
  for (let v of graph.vertices) {
    map.set(v, {
      predecessor: null,
      estimate: Number.POSITIVE_INFINITY,
      isOpen: true
    })
  }
  return map
}

const hasOpenVertices = vertices => {
  let hasOpenVertices = false
  vertices.forEach((vertexProps, vertex) => {
    if (vertexProps.isOpen) {
      hasOpenVertices = true
    }
  })
  return hasOpenVertices
}

const getOpenVertices = vertices => {
  const openVertices = new Map()
  vertices.forEach((vertexProps, vertex) => {
    if (vertexProps.isOpen) {
      openVertices.set(vertex, vertexProps)
    }
  })
  return openVertices
}

export const dijkstraShortestPaths = (graph, initialVertex) => {
  const vertices = setupDijkstra(graph)

  vertices.get(initialVertex).estimate = 0

  /* while (hasOpenVertices(vertices)) {
    const openVertices = getOpenVertices(vertices)

    const smallerEstimateVertex = getVertexSmallerEstimate(openVertices)
    vertices.get(smallerEstimateVertex).isOpen = false

    const outcoming = graph.incidentEdges(smallerEstimateVertex)

    outcoming.forEach((edge) => {
      relaxEdge(edge, vertices)
    })
  }
  return vertices */
}
