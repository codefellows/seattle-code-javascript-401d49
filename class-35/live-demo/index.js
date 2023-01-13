'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, [])
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // find the vertex we want to connect and grab it's edge array
    const neighbor = this.adjacencyList.get(startVertex);
    neighbor.push( new Edge(endVertex, weight) );
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)]
  }

  getNodes(){
    return this.adjacencyList.keys; //maybe?  Object.keys() maybe??
  }

  breadthFirst (root, callback){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length){
      // first time we get the root vertex
      current = queue.pop()

      // if a callback has been passed in, then we "do the thing"
      if (callback) callback(current.value);

      // grab neighbor if they exist
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }

    }
    return visited;
  }

  depthFirst (root, callback){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(stack.length){
      // first time we get the root vertex
      current = stack.pop();

      // if a callback has been passed in, then we "do the thing"
      if (callback) callback(current.value);

      // grab neighbor if they exist
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }

    }
    return visited;
  }
}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

graph.breadthFirst(A, console.log);
console.log('--------------------');
graph.depthFirst(A, console.log);

