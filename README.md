# Webpack Micro-Frontend Demo

A set of webpack module federation/micro-frontend demos.

Features in this PoC:

- modfed-demo: A small example of sharing code through webpack module federation
- microfrontend-demo: A simple project showcasing microfrontends and the combination of app frameworks/libraries

## modfed-demo

This demonstration is a very simple example showing that webpack module federation can be used to access code hosted on a remote server with webpack, a feature which was not supported prior the introduction of module federation in webpack.

To run the demos, open the `remote` and `host` folders in the `modfed-demo` demo in a terminal window.  For both applications, install the dependencies with `npm install` and then start them with `npm run serve`.  The locations of the applications will be displayed in the terminal window after starting them.

## microfrontend-demo

This demonstration includes a simple application which combines React and Angular together to produce an application that simulates searching through a series of song tracks.  This demonstrates:

- how to setup module federation to support integrating multiple frameworks
- One method to communicate between the two frameworks (web components)

### Running locally

#### 1. Start the microfrontend apps

- Open a terminal to the `microfrontend-demo/spotify` folder.
- Install dependencies (use Node 20), `npm i`.
- Start the development server, `npx ng start`.

This serves the microfrontend on port `4200`.  This makes the isolated development playground available at `http://localhost:4200`.  This also makes the relevant code needed to operate as a microfrontend available at `http://localhost:4200/remoteEntry.js`.

There is a second microfrontend available in this demo, `microfrontend-demo/microfrontend2`.  This microfrontend demonstrates that more complex applications with routing requirements can be integrated into a microfrontend based solution.  Its isolated development playground is available at `http://localhost:3082`.

```sh
# Angular microfrontend (simple song tracklist, inspired by Spotify)
cd microfrontend-demo/spotify
npm install
npx ng serve

# Second microfrontend (shared routing example)
cd microfrontend-demo/microfrontend2
npm install
npm start
```

#### 2. Start parent app

This serves the parent app at `http://localhost:3080/`.

The parent app is configured to lazy-load the microfrontends (asyncronously, over the network from `http://localhost:3081/remoteEntry.js`, etc) at run-time.

```sh
cd microfrontend-demo/parent
npm install
npm start
```
