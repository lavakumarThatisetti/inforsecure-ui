module.exports = {
    devServer: {
        proxy: {
            '/user': {
                target: 'https://inforsecure-backend.herokuapp.com/api/',
                changeOrigin: true,
                pathRewrite: {'^/user': ''},
                logLevel: 'debug' 
             },
             '/fiu': {
                target: 'https://inforsecure-backend.herokuapp.com/api/',
                changeOrigin: true,
                pathRewrite: {'^/fiu': ''},
                logLevel: 'debug' 
             }
           }
    }
}