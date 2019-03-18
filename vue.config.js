module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 1288,
        //   public: { // To be used by the browser
        //       host: '192.168.1.100',
        //       port: 80,
        //   },
        disableHostCheck: true,
        headers: {
            // 'Cache-Control': 'public, max-age=31536000'
        }
    }
};
