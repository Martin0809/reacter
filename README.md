# reacter-cli

> Simple CLI for React projects

## Installation

```bash
$ npm install -g reacter-cli
```

## Useage

```bash
$ reacter init <project-name>
```

Example:

```bash
$ reacter init my-app
$ reacter init . // Generate project in current directory
```

Directory structure:

```
├── src
│   ├── actions             // only use Redux
│   ├── components          // common components
│   ├── containers          // page containers
│   ├── images
│   ├── reducers            // only use Redux
│   ├── styles
│   ├── constants.js        // static variable
│   └── index.jsx           // entry file
├── template                // html template
├── .babelrc                // babel configuration
├── .editorconfig           // editor configuration
├── .eslintrc.json          // eslint configuration
├── .gitignore
├── package.json
├── README.md
├── webpack.config.js       // webpack development environment configuration
├── webpack.prod.config.js  // webpack produce environment configuration
```


## Contributing
In order to be able to use the global, we need to set up inside `package.json`:

```json
"bin": {
  "reacter": "bin/reacter",
  "reacter-init": "bin/reacter-init"
},
```

Local debugging, the implementation of the root directory

```bash
$ npm link
```

You can bind the `reacter` command to the global, then you can directly to the` reacter` command as the beginning without typing long `node reacter` like the order.
