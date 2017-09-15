# App: React

This is a skeleton application using SASS, Webpack, NodeJS, React & Redux.

## Quick start

|Terminal Command|Description|
|:-|:-|
|1. `git clone https://github.com/bilo-io/app-react.git`| clones repo to current directory|
|2. `cd ./app-react`|open cloned repo|
|3. `npm install`| install dependencies|
|4. `npm run dev` | **Development:** runs `webpack-dev-server` (location: `./src/`)|
|5. `npm start` | **Production:** runs `server.js` (location:`./artifact`)|

## Redux

### Setup



### Structure

There is quite a consistent folder and file structure you can use:

```sh
app-react/                  # project root
│
├───artifact/               # prod app bundle (including server.js, etc.)
├───dist/                   # prod app bundle
├───node_modules/           # node dependencies
├───src/                    # webapp source code
│   │
│   ├───app/                # React app
│   │   │   
│   │   ├───components/     # Shared components
│   │   ├───containers/     # Redux connected components
│   │   ├───pages/          # Redux connected app pages
│   │   │   
│   │   ├───root-reducer.js # Redux connected app pages
│   │   ├───store.js        # Redux connected app pages
│   │   └───index.js        # root component
│   │
│   ├───img/                # images
│   ├───styles/             # app styles
│   │
│   ├───index.js            # entry point of React (add app.js to DOM here)
│   ├───index.html          # entry point to app
│   └───style.css           # styles for app appearance
│
├───.babelrc                # transpiler configuration
├───package.json            # node package file
├───server.js               # serves webapp in prod
└───webpack.config.js       # webpack config for bundling
```

#### Local Files

We have pages & containers, which both use redux for state management. The only difference with containers and pages here is that you route between pages, and pages can contain containers. They can be found in the respective paths:

- `app/containers/{name}/`
- `app/pages/{name}/`

Each of these contains the various files required by redux, as indicated in the table below

|File|Description|
|:-|:-|
|`actions.js`|action types & action creators (NOTE: these might be separated later on|
|`component.js`|React component|
|`index.js`|`connects` state & dispatch to component props, then exports connected component|
|`reducer.js`|udpates state based on action|
|`style.scss`|style file for page|

#### Global Files

All of the aforementioned containers and pages (anything Redux related) are combined, and connected to the entire application in the below files:

|File|Description|
|:-|:-|
|`src/app/root-reducer.js`|`combineReducers` of all page & container level redux components|
|`src/app/store.js`|store (state) of the entire application, using `root-reducer` to update the relevant parts of the store|
|`src/index.js`|the entire app is wrapped by the `react-redux` `<Provider>` component, which takes the `store.js` as a prop|