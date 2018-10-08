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
* [x] Setup index.js
* [x] Add GET / route
* [x] Add POST /posts route
  * [x] log out req.body

## Front-end

* [x] fetch POST /posts with form data
* [x] See the CORS error and revel in this moment
* [x] Send user input from the client with fetch to the server

## Back-end

* [x] npm install cors
* [x] Make sure the server is recieving the data
* [x] Add JSON body parser middleware
* [x] Validate name and content
  * [x] Must be a string
  * [x] Cannot be empty
* [x] If not valid
  * [x] Error code 422
  * [x] Invalid post, must contain name and content
* [x] Setup DB Connection
  * [x] npm install monk
  * [x] connect to db
  * [x] create document collection (posts)
* [x] If Valid
  * [x] Create post object with
    * [x] name, content, created_date
  * [x] Insert into DB
  * [x] Respond with created post object
* [x] Store data in a database

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