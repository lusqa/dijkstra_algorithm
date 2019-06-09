class Vertex {
  constructor(element) {
    this._element = element
  }

  get element() {
    return this._element
  }

  toString() {
    return this._element
  }
}

export default Vertex
