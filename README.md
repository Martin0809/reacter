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
