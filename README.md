# reacter

## 全局使用
为了可以全局使用，我们需要在`package.json`里面设置一下:

```json
"bin": {
  "reacter": "bin/reacter",
  "reacter-init": "bin/reacter-init"
},
```

本地调试的时候，在根目录下执行

```
npm link
```

即可把`reacter`命令绑定到全局，以后就可以直接以`reacter`作为命令开头而无需敲入长长的`node reacter`之类的命令了。
