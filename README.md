# HTTP Stream Prototype Using Node.js

This project demonstrates how to efficiently stream large JSON files using Node.js and Express. The server streams the `measurements.json` file via the `/measurements.json` endpoint, allowing you to handle large datasets without loading everything into memory.

I've followed the steps outlined in the [HTTP Streaming with Node.js and Fetch API](https://www.loginradius.com/blog/engineering/guest-post/http-streaming-with-nodejs-and-fetch-api/#:~:text=With%20HTTP%20streaming%2C%20you%20can,can%20process%20the%20streaming%20response) blog to implement this functionality. Clone the repo, install dependencies, add your `measurements.json`, and start the server to test the stream in your browser using network throttling.
