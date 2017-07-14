const path = require('path')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, ''),
]
export default {
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import",{"libraryName":"antd","style":"css"}]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": true}]
      ]
    }
  }
  // ,
  // "proxy": {
  //   "/api": {
  //     "target": "http://jsonplaceholder.typicode.com/",
      
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/v1" : "" }
  //   },
  //   "/api2":{
  //       "target":"https://randomuser.me",
  //       "changeOrigin":true,
  //       "pathRewrite":{"^/api2/v1":""}
  //   }
  // }
}
