const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConf = (_path) => {
    // NEW pages should be added here i.g. if you need to create
    // contacts page you need add folder to src,
    // and add path and name to entry array
    const VENDORS_NAME = 'vendors';
    const entry = {
        index: ['babel-polyfill', './src/index/index.js'],
        'pop-up-cancel': ['./src/pop-up-cancel/pop-up-cancel.js'],
        'pop-up-cancel-2': ['./src/pop-up-cancel-2/pop-up-cancel-2.js'],
        'pop-up-reschedule': ['./src/pop-up-reschedule/pop-up-reschedule.js'],
        'pop-up-reschedule-main': ['./src/pop-up-reschedule-main/pop-up-reschedule-main.js'],
        'pop-up-appoint': ['./src/pop-up-appoint/pop-up-appoint.js'],
        admin_panel: ['./src/admin_panel/admin_panel.js'],
        student_page: ['./src/student_page/student_page.js'],
        exercises_page1: ['./src/exercises_page1/exercises_page1.js'],
        exercises_page2: ['./src/exercises_page2/exercises_page2.js'],
        exercises_page3: ['./src/exercises_page3/exercises_page3.js'],
        exercises_page4: ['./src/exercises_page4/exercises_page4.js'],
        authorization: ['./src/authorization/authorization.js'],
        mobile: ['./src/mobile/mobile.js'],
        perfect_answer: ['./src/perfect_answer/perfect_answer.js'],
        bad_answer: ['./src/bad_answer/bad_answer.js'],
        result: ['./src/result/result.js'],
        simple_sentence: ['./src/simple_sentence/simple_sentence.js'],
        complex_sentence: ['./src/complex_sentence/complex_sentence.js'],
        empty_sentence: ['./src/empty_sentence/empty_sentence.js'],
        building_app: ['./src/building_app/building_app.js'],
        spinner: ['./src/spinner/spinner.js'],
    };

    const plugins = Object.keys(entry).reduce((acc, name) => {
        acc.push(new HtmlWebpackPlugin({
            chunksSortMode: 'manual',
            title: `${name}`,
            template: `./src/${name}/${name}.html`,
            chunks: [VENDORS_NAME, name],
            filename: `./${name}.html`,
        }));
        acc.push(new ExtractTextPlugin({
            filename: `[name].css`,
            allChunks: false
        }));

        return acc;
    }, []);

    plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: VENDORS_NAME,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            'typeof window': JSON.stringify('object')
        })
    ]);

    entry.vendors = `./src/common/scripts/${VENDORS_NAME}.js`;

    return {
        entry,
        output: {
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.js/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    ]
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
                    })
                },
                {

                    /**
                     * ASSET LOADER
                     * Reference: https://github.com/webpack/file-loader
                     * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                     * Rename the file using the asset hash
                     * Pass along the updated reference to your code
                     * You can add here any file extension you want to get copied to your output
                     */
                    test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                    loader: 'file-loader?publicPath=./&name=assets/images/[name].[ext]'
                },
                {
                    test: /\.(eot|ttf|woff|woff2|otf)$/,
                    loader: 'file-loader?publicPath=./&name=assets/fonts/[name].[ext]'
                }
            ]
        },
        plugins
    };
};

module.exports = baseConf;