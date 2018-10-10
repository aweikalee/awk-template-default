# awk-template-default
自用脚手架 [awk-cli](https://github.com/aweikalee/awk-cli) 的默认模版
用于创建简单的js库
使用typescript + scss

## Install
```
$ npm install awk-cli -g

$ awk init
```
打开 `webpack.base.config.js`
```
module.exports = {
    ...
    entry: {
        'awk': require('../package.json').main // 修改'awk'为你想要输出的文件名
    },
    output: {
        library: 'awk', // 修改'awk'为你想要输出的方法名
        libraryExport: 'default',
        libraryTarget: 'umd',
    }
    ...
}
```

## Usage
```
$ npm install

$ npm run dev

$ npm run build
```
