class Edge {
  constructor(origin, destination, element = null) {
    this._origin = origin
    this._destination = destination
    this._element = element
  }

  get element() {
    return this._element ? this._element : 0
  }

  get endpoints() {
    return [this._origin, this._destination]
  }

  opposite(vertex) {
    if (this.endpoints.includes(vertex)) {
      return vertex === this._origin ? this._destination : this._origin
    }
  }
}

export default Edge
