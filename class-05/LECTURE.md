# Linked Lists and Big O

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/yTu5ddHr1)

##  Big O (big oh)

Big O notation is used to describe the efficiency of an algorithm or function. This efficiency is evaluated based on 2 factors:  space and time

1. Run Time (also known as time efficiency / complexity) the amount of time something takes complete
1. Memory Space (also known as space efficiency / complexity).  The amount of memory resources used to store data and instructions
1. Constant: O(1) - example:  we don't another data structure, or we create one variable and keep (re)assigning values to that same variable
1. Linear:  O(n) - time example:  iterating or traversing a certain number times.  space example: creating an element in an array a certain number of times (creating something new - space).
1. exponential:  O(n^2) - double nested for loop
1. logarithmic: O(log n)  - cut number of n in half each iteration
1. when navigating trees O(h) where h is the height

## Node (for a singly linked list)

an "element" in a  linked list.  Consider: what are the properties of a node
 - a Node is a container, an object that holds information and is part of a data structure (linked list)

 Properties: 
 - value <- added when the node is added to the linked list (or when is created)
 - next <- initially null, and a reference pointer added when another node is added to the linked list

## Linked List (singly linked list)

What is a linked list?  Consider what are the properties of a singly linked list?

a **linear** collection of nodes, where one node knows about the next node (only)

Properties:
- head <- the first node in the linked list.  STARTING POINT
