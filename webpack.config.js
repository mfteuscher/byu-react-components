const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: "byu-react-components",
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                sideEffects: true,
                use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {typescript: true}
                    },
                ],
                resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                type: 'javascript/auto',
                issuer: {
                    and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
                }
            },
            {
                test: /\.svg$/i,
                type: 'asset/inline',
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
                type: 'asset/inline',
            },
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts','.jsx', '.js'],
        // TODO: Possibly make an alias for assets folder
        // alias: {
        //     assets: path.resolve(__dirname, 'assets/')
        // }
    },

    externals: {      
        // Don't bundle react or react-dom      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    } 
}