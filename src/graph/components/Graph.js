import Vertex from './Vertex'
import Edge from './Edge'

class Graph {
  constructor(directed = false) {
    this._directed = directed
    this._outgoing = new Map()
    if (directed) {
      this._incoming = new Map()
    }
  }

  // Add methods
  addVertex(element) {
    const v = new Vertex(element)
    this._outgoing.set(v, new Map())
    if (this._directed) {
      this._incoming.set(v, new Map())
    }
    return v
  }

  addEdge(origin, destination, element = null) {
    const e = new Edge(origin, destination, element)
    this._outgoing.get(origin).set(destination, e)
    if (this._directed) {
      this._incoming.get(destination).set(origin, e)
    }
    return e
  }

  // Getters
  get vertices() {
    return this._outgoing.keys()
  }

  get edges() {
    return this._outgoing.values()
  }

  incidentEdges(v) {
    return this._outgoing.get(v)
  }

  incidentEdges1(v) {
    const list = []
    this._outgoing.forEach((values) => {
      values.forEach((edge, vertex) => {
        if (vertex === v) {
          list.push(edge)
        }
      })
    })
    return list
  }

  incidentEdges2(vertex) {
    const list = []
    for (const value of this._outgoing.values()) {
      for (const [destination, edge] of value.entries()) {
        if (destination === vertex) {
          list.push(edge)
        }
      }
    }
    return list
  }
}

export default Graph
