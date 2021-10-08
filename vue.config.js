module.exports = {
    devServer: {
        proxy:{
        '^/api': {
            target: 'https://inforsecure-backend.herokuapp.com',
            changeOrigin: true,
            pathRewrite: {'^/api': '/api'},
            logLevel: 'debug' 
         }
       }
    }
}