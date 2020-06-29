## Webpack

Help in bundling the files. Since v4 webpack can work w/o a config. In that case it will fallback to the default config. Webpack can't understand JS, so it makes of loaders. Loaders are like transformers. They takes an input and outputs a bundle. In order to work with react and babel we make use of `babel-loader` loader.

## Babel

Babel helps in transpiling modern JS syntax to browser compatible older JS. Following are the presents we use:

1. _babel preset env_ : for compiling modern Javascript down to ES5
2. _babel preset react_ : for compiling JSX and other stuff down to Javascript

To configure Babel we create a `.babelrc` file in the root.
