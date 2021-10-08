module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://inforsecure-backend.herokuapp.com',
                changeOrigin: true,
                pathRewrite: {'^/user': '/user'},
                logLevel: 'debug' 
             },
             '^/fiu': {
                target: 'https://inforsecure-backend.herokuapp.com',
                changeOrigin: true,
                pathRewrite: {'^/fiu': '/fiu'},
                logLevel: 'debug' 
             }
           }
    }
}