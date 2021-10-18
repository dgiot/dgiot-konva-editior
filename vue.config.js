const CompressionPlugin = require('compression-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: isProd ? '/dgiot-konva-editior/' : './',
    // eslint-disable-next-line consistent-return
    outputDir: 'dist', // 输出文件目录
    assetsDir: 'static', // 放置生成的静态文件目录（js css img）
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    // eslint-disable-next-line consistent-return
    configureWebpack: (config) => {
        config.mode = 'production'
        config.performance = {
            // 打包文件大小配置
            maxEntrypointSize: 10000000,
            maxAssetSize: 30000000,
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
