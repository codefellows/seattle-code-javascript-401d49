'use strict';

const { Node, Tree } = require('./tree');

describe('Tree', () => {
  it('can be created as expected', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(5);
  });
  // I am not going to completely build this, it should fail
  it('returns a preOrder traversal array as expected', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.preOrder()).toEqual([10, 5, 1, 8, 15, 17]);
  })
})
