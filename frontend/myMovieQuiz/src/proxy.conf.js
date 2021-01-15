const PROXY_CONFIG = [
  {
    "\/api": {
      "target": "https://r5---sn-25ge7nsk.googlevideo.com",
      "secure": true,
      "changeOrigin": true,
      "logLevel": "debug",
      "pathRewrite": {
        "^\/api": "/"
      }
    }
  }
]

module.exports = PROXY_CONFIG;