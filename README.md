# **Pantry Frontend**
[Pantry](https://pantry.svrourke.com) is an app I created to solve a problem for myself, with grocery lists spread out between my phone, my partner's phone and several texts throughout the week I invariably missed items or got redundant items when I went to the store. Pantry allows users to create shared grocery lists with as many members as they need with features that help when shopping like: marking items as acquired and filtering them from the list display.
   
This is the repo for the frontend client made with [react.js](https://reactjs.org/) [react-redux](https://react-redux.js.org/) and [redux-thunk](https://github.com/reduxjs/redux-thunk).
<br>

## Getting Started
___

> If you would like to spin up your own copy of pantry clone this repo and the [backend repo](https://github.com/SVRourke/pantry_backend) and follow the instructions below for the frontend setup, and the instructions on the backend repo for the front end setup.

Clone this repository and run yarn install
```
$ git clone git@github.com:SVRourke/pantry_backend.git

$ cd pantry_frontend

$ yarn install
```
Next before you start the app set the environment variable
```
$ export REACT_APP_API_DOMAIN=localhost:3000/
``` 
The app relies on REACT_APP_API_DOMAIN to make requests to the api so for running locally use localhost:3000/, now you're ready to start the app
```
$ yarn start
```
   
> # IMAGE
   
   
## Deployment
___   
I deployed this react app to [Netlify](https://www.netlify.com) using their cli. The whole thing was very easy and I followed [these instructions](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
   
   
Though I don't want to transpose the tutorial into this readme it is a basic tutorial and there are a few things to address beyond it's scope. [here](https://create-react-app.dev/docs/deployment/#netlify) is a good example of deploying a create-react-app project to netlify. You must redirect all requests to /index.html as this is a one page application using react-router so if you refresh on lists/2/item/3/edit the server will look for a file named edit 3 non-existent directories deep.   
   
To redirect all requests back to the react app create a file called netlify.toml in the project directory and add the following:
```
[[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
```
**Environment Variables**   
Environment variables in Netlify are easy to set through the deploy tab on the Netlify site and I suggest doing so there, make sure to set the REACT_APP_API_DOMAIN variable to the url of the api wherever it's hosted.    
   
   
## Built With
___
   
This is a react.js app using the [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) tool-chain. For application state management I used [react-redux](https://react-redux.js.org/). For async redux updates like making a request to an api and adding the returned data to the store I used [redux-thunk](https://github.com/reduxjs/redux-thunk)
<br>   
# Status