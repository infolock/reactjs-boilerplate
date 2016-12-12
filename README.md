# ReactJS Boilerplate
![KISS](kiss.jpg?raw=true "KISS")

*Simplified FTW baby...FTW.*

### Installation
(**Requires Node 6.9.2+**)

Run the following:
```
npm install
grunt build
```

### Running Local (DEV) Environment
Run the following:
```
npm run dev
```
Open your browser and point to http://localhost:3001/

### What *Is* Included
* [React](https://github.com/facebook/react.git)
* [Redux](https://github.com/reactjs/redux.git) (and [Redux DevTools](https://github.com/gaearon/redux-devtools.git))
* [Grunt](https://github.com/gruntjs/grunt.git)
* (Basic) [NodeJS](https://nodejs.org/en/) Server
* [Babel](https://github.com/babel/babel)
* [Pug](https://github.com/pugjs/pug.git)
* [Webpack](https://github.com/webpack/webpack.git)
* ES6-support
* Basic Folder Structure
* Basic Example Page (Home)
* Basic Skeleton for Redux Actions, Reducers
* Basic Wiring for Redux ConfigureStore
* Basic React Router

### What Is *NOT* Included
* Unit Testing (because its up to you if you wanna be leet)
* Complicated Directory Structure (because [KISS](https://en.wikipedia.org/wiki/KISS_principle))
* Shoot Yourself in the Foot Warranty/Protection (because you're a big boy - and big boy pants are good)
* Complicated Redux Setup/Configuration (See 2nd and 3rd Bullet Points above)
* Complicated React Router Setup/Configure (See 2nd and 3rd Bullet Points above)
* etc.

This boilerplate is simply that - a boilerplate.  Its aim is to make getting React up and running fast and as simple as possible.  Want to make it better?  Awesome!  Fork it, Clone it, use it, do it!

### Where to Start
The best place to start is in `entry.js`.

Follow the `require` items (which are few) to understand the basic structure.  You will notice that it is _extremely_ simplistic.  This is by design.  It should be easy to strip out this _example_ with your own approach or continuing down the same path.


### Why Another Boilerplate?
Simply put - I haven't found a boilerplate that just lays out the basic environment and let you decide the implementation path.  Most try to enforce their own personal way of how they learned react, create tightly-coupled directory structures and controllers/routers, etc.  

I wanted just a way to just download a boilerplate, install it, and then tweak it to suit my needs with the least amount of effort.  That's what this boilerplate is.  

### WTF, Why No Unit Tests?
Unit tests were not included because there is no 1 solution that is perfect, nor is there one set that everyone agrees on.  That being said, it is up to you (the developer(s)) to decide this for yourself.

There is a great discussion on this topic which can be found on the reactjs.org boards here: https://discuss.reactjs.org/t/whats-the-prefered-way-to-test-react-js-components/26

Me personally, I found this article as a great place to get started: https://www.toptal.com/react/how-react-components-make-ui-testing-easy

There are other _great_ resources as well.  Google searching "react unit test examples" is a great place to start.


### License
MIT
