# React Starter 17

A React starter repo, first assembled in 2017, featuring:

Auto-deployed from Master to demo at: [https://react-starter-17.netlify.com](https://react-starter-17.netlify.com)

- React
- Redux
- React Router 4
- Webpack 2 with route chunking, vendor chunking
- Offline support and caching with sw-precache
- SASS compilation to static file, loading in head of HTML
- Hot Realoading of Components and CSS
- Sentry.io reporting with Raven
- Google Analytics
- Async actions using fetch and redux-thunk
- React Helmet for metadata

## To Install

```
npm install
```

## To Run Dev Mode

```
npm start
```

## To Build and Run Production 

```
npm run prod
```

# Static Files

Static files such as images, robots.txt, manifest.json, etc are stored in the /static folder. The contents of this folder are copied to the /dist folder during the production build. The contents, not the folder itself, are copied, so that robots.txt, etc will be at the top-level of the deployed application.

# Server-Side Rendering
After lots of thought and research, this starter pack does not support server-side rendering. A mixture of challenges with async data loading on server/client, slow performance of renderToString, and complexities with sw-precache implementation led me to choose not to implement SSR. 

Furthermore, with sw-precache, after first load (in Chrome and Android), the app shell is available and first paint occurs almost instantly. So, while SSR would be really nice for first-paint, the offline cache provides similar benefits without the server costs and code complexity.

For SEO, I choose to pre-render (Netlify offers pre-rendering for free on open-source applications).

React Fiber may bring better renderToString performance, streaming, etc - at which point I may revisit the question. 

# Config

## Titles and Metadata
Be sure to update the following locations

- Metadata and titles in `webpack/template.html`
- swPrecache names and details in `webpack/webpackConfigProd.js`
- Titles and repos in `package.json`
- Details in `static/manifest.json`


## Raven

Raven is useful for capturing client-side errors.

**To configure:** Set the Raven-URI in app/index.js

**To remove:** Remove the Raven-URI line in `app/index.js` and remove the script import in `webpack/template.html`

## Google Analytics

**To configure:** Set the id on BrowserRouter in `app/index.js` with your GA id

*To remove:** Uninstall react-g-analytics from npm packages. Use `{ BrowserRouter } from 'react-router-dom'`, rather than `from 'react-g-analytics'`. Remove the id parameter from BrowserRouter component in `app/index.js`
