Requires Node Version >= 8.12

## What's this?

This is a sample app on top of [create-react-app](https://github.com/facebook/create-react-app), that adds some important features like:

- **Server Side Rendering**
- **Route based chunking**
- **[Helmet](https://www.npmjs.com/package/react-helmet) Integration**
- **[Ramda](https://ramdajs.com/)**
- **Convert svg to font using [webfonts-loader](https://github.com/jeerbl/webfonts-loader)**
    - Webfont-loader is disabled by default. To use this feature, uncomment `config.module.rules.push(webfontLoaderConfig);` in `./config-overrides.dev.js` and `./config-overrides.prod.js`
- **Layout based Views**
- **Customize webpack configs without ejecting**
- **[localforage](https://localforage.github.io/localForage) Integration**


## How can We see it in action?

Just install dependencies, build the app and run the express server:

####Commands

```
//Install dependencies
yarn install

//development
yarn start

//production
yarn run build
yarn run server

//Run test
yarn test

//View coverage
yarn test -- --coverage
```

## What customizations do I need to make?

 - Update APP_NAME in src/storage/webStorage.js
