# Bambi's EventBus
> An Event bus class to be used as a standalone object, or to extend existing objects

One to two paragraph statement about your product and what it does.

## Installation

> it is possible to use npm to install it as package with your existing project as a module, or as a global node module. this can also be used in the browser.

Inside your projects directory as
```
npm install bambis-eventbus
```

As a global module:

```
npm install bambis-eventbus -g
```

Or use as a package from github:
```
git clone https://github.com/BambiHaber/EventBus.git
```
> Files ready to be used would be under the 'dist' directory (EventBus.js, and a minified EventBus.min.js)

## Node/Browser example

It possible to use the package in the browser, or in node.

* Nodejs
    * After installing the package, inside your app.js file you can import the module and use it straight away

```javascript
const EventBus = require('bambis-eventbus');

let eventBus = new EventBus();

eventBus.listenTo('hello', () => {
        console.log('Hello world');
});

eventBus.trigger('hello');
```
Would output 'Hello World'


* Browser
    * After installing the package, html file you can apply a script tag pointing to the script, or copy the script from the 'node_modules/bambis-eventbus/dist' folder (regular or minified version)
    * Example cases are in the dist/example directory, you can ```npm start``` command inside that directory and it would start a demo server with example code.


## Compiling manually
If by any case you would like to build the package yourself, you can go to the root directory and run the npm install, then ```gulp```. This will generate the dist directory.


### Enjoy
