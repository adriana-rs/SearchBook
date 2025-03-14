const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //punto d'ingresso dell'app
    entry: './assets/js/script.js',

    //configurazione uscita
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    //configurazione dei moduli (loaders)
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/, // Supporta immagini PNG, JPG, GIF
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]', // Rinomina il file (con un hash per evitare conflitti)
                      outputPath: 'assets/img', // Esporta le immagini nella cartella 'images'
                    },
                  },
                ],
            },
        ],
    },

    //plugin per file html
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',

        }),
    ],

    mode: 'production',
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
      },
};