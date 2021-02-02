const path = require('path');
module.exports = {
    // 基本路径
    baseUrl: "./",
    publicPath:process.env.NODE_ENV === "production" ? "" : "/",
    // 输出文件目录
    outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: (config) => {
      config.resolve={
          extensions:['.js','.json','.vue'],//自动添加文件后缀
          alias: {
            '@': path.resolve(__dirname, './src'),
            '@c': path.resolve(__dirname, './src/components')
          }
        }
    },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
      // 是否使用css分离插件 ExtractTextPlugin
      extract: true,
      // 开启 CSS source maps?
      sourceMap: false,
      // css预设器配置项
      loaderOptions: {
        sass: {
            prependData: `@import "./src/styles/main.scss";`
          },
      },
      // 启用 CSS modules for all css / pre-processor files.
      modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require("os").cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see vuejs/vue-cli
    pwa: {},
    // webpack-dev-server 相关配置
    devServer:{
      open: false,
      host: "0.0.0.0",
      port: 8080,
      https: false,
      hot:false,
      hotOnly: false,
      proxy:null,
      proxy:{//设置代理  跨域请求配置
        "/devApi": {
          target: "https://localhost:5001/api",
          changeOrigin: true,
          pathRewrite: {
            "^/devApi": ""
          }
        }
      } // 设置代理
      // before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
      // ...
    }
  };