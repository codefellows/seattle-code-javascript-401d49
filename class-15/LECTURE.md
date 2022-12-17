# Trees

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/uCNZyLPNU)

## Review

### Linear Data Structures

- Linked List
- Stack
- Queue

## Trees

> Hierarchical - has a root,and branches out from there

### Examples

- DOM
- File Structure
- .git

### terminology

- k-ary: each node has "k" number of children
- Binary Tree:  each node has up to 2 (and no more) children
- balanced: nodes are inserted from top to bottom and maximum of one partially filled level
- leaf: last node(s) in a tree.  a node in a tree with NO children
- edge or edge weight - stay tuned
- path: the route taken from starting node to an ending node (1.e. root to leaf)
- binary search tree: sorted binary tree: lesser values always go the left of the root and sub-roots

### Traversals

#### Depth First Traversal

> from root to leaf - uses stack

- pre-order traversal
- in order traversal - Binary Search Tree - returns "sorted" smallest to greatest
- post order traversal

> Goal: look at a tree, and predict what each of these traversals would return

#### Breadth First Traversal

> read all nodes on 1st level, then the second, the third etc... - queue
