# Messaging Queue

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/JRsRXvvay)

## Code Review

- Elias: 4 socket connections - Ryan says try currying socket to the handler
- Kenny: testing

## Why message queue?

- if offline, we still want our messages.  queueing messages can ensure their delivery
- multiple vendors, each will its own room.   
- missed messages sent to the correct room (correct vendor)

## Message Client Class

In the interest of time and understanding, I chose to opt out of this functionality in class today!  everything should work without. Note:  the  
