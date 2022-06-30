# LAB-11 Code Academy Parcel Service (CAPS) phase 1

## CAPS In Phase 3, we are building a set of features to help manage deliveries made by CAPS Drivers. This will simulate a delivery driver receiving a list of orders from a Queue and “scanning” package codes on delivery. Retailers will be able to see in their dashboard or log, a list of all packages delivered in real time. Should a delivery driver deliver many packages while the retailer is not connected to the dashboard, the vendor client should be guaranteed to receive “delivery” notifications from the Queue system.

<hr>

# Author

Abdinasir Yussuf

# Problem Domain:
- ### As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered.
- ### As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log.
- ### As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver.
- ### As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything.
- ### As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.

- ### As a developer, I want to create a system of tracking who is subscribing to each event.
- ### As a developer, I want to place all inbound messages into a “queue” so that my application knows what events are to be delivered.
- ### As a developer, I want to create a system for communicating when events have been delivered and received by subscribers.
- ### As a developer, I want to delete messages from the queue after they’ve been received by a subscriber, so that I don’t re-send them.
- ### As a developer, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue.
# Links and Resources

[CAPS Overview](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/caps/)

# Setup

- ### run npm I or npm Install to download all dependencies
- ### Clone repo and run  `node server.js` in the console
- ### then cd into the Driver folder and run `node index.js` 
- ### finally cd into the Vendor folder and run `node index.js` 


# UML
![CAPS](/img/capsUML.png)
