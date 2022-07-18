# LAB-12 Code Academy Parcel Service (CAPS) phase 2

## CAPS: Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called Socket.io so that clients can communicate over a network. Socket.io manages the connection pool for us, making broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

The core functionality we’ve already built remains the same. The difference in this phase is that we’ll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but our developer story changes to reflect the work needed for refactoring.

<hr>

# Author

Abdinasir Yussuf

# Problem Domain:
- ### As a vendor, I want to alert the system when I have a package to be picked up.
- ### As a driver, I want to be notified when there is a package to be delivered.
- ### As a driver, I want to alert the system when I have picked up a package and it is in transit.
- ### As a driver, I want to alert the system when a package has been delivered.
- ### As a vendor, I want to be notified when my package has been delivered.


# Links and Resources

[CAPS Overview](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/caps/)

# Setup

- ### run npm I or npm Install to download all dependencies
- ### Clone repo and run  `node caps.js` in the console


# UML
![CAPS](/img/capsUML.png)
