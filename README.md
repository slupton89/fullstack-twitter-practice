# Fullstack Twitter Clone

A basic twitter clone built to demonstrate the full stack 🥞 (client, server, database).

With the following features:

* Users can send a post
* Users can see all posts that have been sent


## Objectives

* [ ] 🔎 Differentiate between Client and Server
* [ ] ⌨️ Get user input on the Client
* [ ] ➡️ Send user input from the client with fetch to the server
* [ ] 🗃 Store data in a database
* [ ] 🔍 Retrieve data from a database on the Server
* [ ] ⬅️ Retrieve data from a server on the client using Fetch
* [ ] 🙈 Hide/Show elements on the client
* [ ] ✨ Add elements to the page on the client
* [ ] 🚀 Deploy the client with now.sh
* [ ] 🚀 Deploy the database with mlab
* [ ] 🚀 Deploy the server with now.sh

## Front-end

* [x] Create client folder
* [x] Setup index.html
* [x] Bring in Skeleton CSS
  * http://getskeleton.com/
  * https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
* [x] Create Header
* [x] Create form
  * [x] Name
  * [x] Content
  * [x] u-full-width to both inputs
* [x] Listen for form submit
* [x] Hide the form
* [x] Show loading spinner
* [x] Get data from form and log it
* [x] Get user input on the Client
* [x] Hide/Show elements on the client

## Back-end

* [x] Create server folder
* [x] npm init -y
* [x] npm install express morgan
* [ ] Setup index.js
* [ ] Add GET / route
* [ ] Add POST /posts route
  * [ ] log out req.body

## Front-end

* [ ] fetch POST /posts with form data
* [ ] See the CORS error and revel in this moment
* [ ] Send user input from the client with fetch to the server

## Back-end

* [ ] npm install cors
* [ ] Make sure the server is recieving the data
* [ ] Add JSON body parser middleware
* [ ] Validate name and content
  * [ ] Must be a string
  * [ ] Cannot be empty
* [ ] If not valid
  * [ ] Error code 422
  * [ ] Invalid post, must contain name and content
* [ ] Setup DB Connection
  * [ ] npm install monk
  * [ ] connect to db
  * [ ] create document collection (posts)
* [ ] If Valid
  * [ ] Create post object with
    * [ ] name, content, created_date
  * [ ] Insert into DB
  * [ ] Respond with created post object
* [ ] Store data in a database

## Front-end

* [ ] Log out created post after POST request
* [ ] Show the form
* [ ] Hide loading spinner

## Back-end

* [ ] GET /posts
  * [ ] Respond with posts from DB
* [ ] Retrieve data from a database on the Server

## Front-end

* [ ] fetch GET /posts
  * [ ] Iterate over array
  * [ ] Append each to page
  * [ ] Reverse before appending
  * [ ] Show the form
  * [ ] Hide loading spinner
* [ ] fetch GET /posts after creating a post
* [ ] Retrieve data from a server on the client using Fetch
* [ ] Hide/Show elements on the client
* [ ] Add elements to the page on the client

## Back-end

* [ ] npm install bad-words
  * [ ] Use filter before inserting into DB
* [ ] npm install express-rate-limit
  * [ ] Limit to 1 request every 15 seconds

## Deploy

* [ ] Deploy server with now
  * [ ] Setup environment variables
    * [ ] Database connection
      * process.env.MONGO_URI
  * [ ] Show mlab
  * [ ] Deploy with environment variable
    * now -e MONGO_URI=@meower-db
  * [ ] Add alias
* [ ] Deploy client folder with now
  * [ ] Set API_URL based on hostname

## What's next?

* Add comments/replies to a post
* User Accounts
  * Don't just have the user enter their name
  * Sign up/Login
* User Profiles
  - Only show posts from a given user
* Search posts
* Hashtags
* User @mentions
* Realtime feed of posts