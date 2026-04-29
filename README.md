# Hono Modular REST API Project

## Overview
This project is a modular REST API built using Hono and SQLite (better-sqlite3).  
It demonstrates modular routing, service layer architecture, and relational database design.

---

## Tech Stack
- Node.js
- Hono
- SQLite (better-sqlite3)

---


## Database Design

### Users
- id (primary key)
- name

### Posts
- id (primary key)
- title
- userId (foreign key → users.id)

### Comments
- id (primary key)
- content
- postId (foreign key → posts.id)

### Relationships
- One User → Many Posts  
- One Post → Many Comments  

---

## Setup Instructions

### Install dependencies
npm install

### Install required packages
npm install hono better-sqlite3 @hono/node-server

### Run server
node index.js

Server runs at:
http://localhost:3000

---

## API Endpoints

### Users
POST /users → create user  
GET /users → get all users  

### Posts
POST /posts → create post  
GET /posts → get all posts  
GET /posts/user/:userId → get posts by user  

### Comments
POST /comments → create comment  
GET /comments → get all comments  
GET /comments/post/:postId → get comments by post  

---

## Example Requests

### Create User
POST /users
{
  "name": "John"
}

### Create Post
POST /posts
{
  "title": "My First Post",
  "userId": 1
}

### Create Comment
POST /comments
{
  "content": "Nice post!",
  "postId": 1
}

---


