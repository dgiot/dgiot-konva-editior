const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const resolve = (dir) => {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: isProd ? '/dgiot-konva-editior/' : './',
    // eslint-disable-next-line consistent-return
    outputDir: 'dist', // 输出文件目录
    assetsDir: 'static', // 放置生成的静态文件目录（js css img）
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '*': resolve(''),
            },
        },
    },
    configureWebpack: (config) => {
        config.mode = 'production'
        config.performance = {
            hints: false,
            // 入口起点的最大体积
            maxEntrypointSize: 50000000,
            // 生成文件的最大体积
            maxAssetSize: 30000000,
            // 只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js')
            },
        }
        if (isProd) {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
                        threshold: 10240, // 归档需要进行压缩的文件大小最小值，这个对 10K 以上的进行压缩
                        deleteOriginalAssets: false, // 是否删除原文件
                    }),
                ],
            }
        }
    },
}
