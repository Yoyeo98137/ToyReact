module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                '@babel/plugin-transform-react-jsx', 
                                { pragma: 'createElement' }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    mode: "development",
    // 易于阅读
    optimization: {
        minimize: false
    },

}