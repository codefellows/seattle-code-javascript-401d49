# React Context

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/D4DMk8jcj)

## Global State with Context

Context is an object that can be consumed (read/updated) by any children of the provider.

- Provider:  maintains an internal state that is accessible to ANy child of the provider
- Consumers: child components that may opt into context values / behaviors.

When to use:  when you need to share information across multiple sibling components.

* Settings read by all components.
  * Theme values
  * Twitter, emails, list of products

when not to use:  Complex Component groups that directly share values that other sibling components have no business accessing. 
- Sometimes data needs to be managed very carefully
