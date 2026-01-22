# Day 10 – package.json & Express Introduction

This day marks the transition from pure Node.js to Express.js.
The focus is on understanding `package.json` and setting up
an Express project correctly.

---

##  What is package.json?
`package.json` is the core configuration file of a Node.js application.
It defines:
- Project metadata
- Entry point
- Scripts
- Dependencies

---

## Concepts Covered

### 1. npm initialization
- `npm init`
- `npm init -y`

### 2. package.json fields
- name
- version
- main
- scripts
- dependencies

### 3. Express installation
- Installing Express using npm
- Understanding `node_modules`
- Understanding `package-lock.json`

### 4. Basic Express setup
- Creating Express app
- Starting server using `app.listen()`

---
##  Folder Structure
```js
Day-10-express-package-json/
│
├── index.js
├── package.json
├── package-lock.json
├── node_modules/ (ignored in git)
└── README.md
```

---

##  How to Run This Project

1. Install dependencies
```bash
npm install
Start server

npm start
Server will run on

http://localhost:3000
```
## Author
Raviranjan Mishra
Learning Node.js & Express (MERN Stack)
