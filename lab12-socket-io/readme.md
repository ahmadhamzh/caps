# message queue

## Notes

### Implementing Message Queues

A Queue server runs independently, and is tasked with routing events and messaging between clients.

- Any connected client can "publish" a message into the server.
- Any connected client can "subscribe" to receive messages by type.

The Queue server has the ability to see which clients are connected,  to which Queues they are attached and further, to which events they are subscribed.

The Queue server is tasked with receiving any published message and then distributing it out to all connected and subscribed clients. It must further ensure that subscribed clients can "catch up" and pull down any messages that they might have missed during a period of disconnection with the server

- `message` -  a package of information, categorized by queue (bucket) and event name
- `queue` - a list of (bucket) of events
  - i.e. "Database Events", "Filesystem Events", "Network Events", etc
- `event` - What event has happened
  - i.e. "delete, add, update, connection lost, error", etc.
- `payload` - data associated with the event
  - i.e. "record id, record information, error text", etc.

Implementing a Queue involves architecting a solution to the following high level questions

1. How do we know which clients are subscribed to which buckets and which events?
1. How do we know that clients have received all of the messages to buckets/events which they've subscribed
1. How do we re-deliver messages that were never received

We will need to:

1. Manage a list of subscribers
1. Manage a list of queues
1. Manage a list of events within the queues
1. Deliver messages to each subscriber
1. Provide a mechanism for subscribers to notify the system that they got a particular message
1. Remove the message from the subscribers' message/event queue once it's been delivered
1. Allow subscribers to "catch up" on any missed messages by looping the above










## Order Image 

![image]|(/home/ahmad/401/caps/lab 11.png)

----
## Links : 

Pull Requist Link : https://github.com/ahmadhamzh/caps/pull/4  

image for console Link : https://github.com/ahmadhamzh/caps/blob/main/lab12-socket-io/caps-messageQueue.png
