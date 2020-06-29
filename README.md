## Webpack

Help in bundling the files. Since v4 webpack can work w/o a config. In that case it will fallback to the default config. Webpack can't understand JS, so it makes of loaders. Loaders are like transformers. They takes an input and outputs a bundle. In order to work with react and babel we make use of `babel-loader` loader. We must tell webpack to produce a HTML page, which has the bundle imported as script. For this we may need two additional components for processing HTML: `html-webpack-plugin` and `html-loader`.

### Webpack dev server

Now each time we made any changes in the code, we need to re-run `npm run build` and this can be tedious. In order to avoid this we can create a dev server, which re-runs/re-compile when we make any change, kind of hot reload. For this, we add `webpack-dev-server` as a dev dependency. So now we can add a `start` script as `webpack-dev-server --open --mode development` in _package.json_

## Babel

Babel helps in transpiling modern JS syntax to browser compatible older JS. Following are the presents we use:

1. _babel preset env_ : for compiling modern Javascript down to ES5
2. _babel preset react_ : for compiling JSX and other stuff down to Javascript

To configure Babel we create a `.babelrc` file in the root.
