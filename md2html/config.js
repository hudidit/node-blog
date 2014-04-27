var config = {
    /*
        [string]    client side origin
        e.g.    'http://my-domain.com'
    */
    origin: 'http://localhost'
    /*
        [number]    port number for Node.js server created by parser.js
    */
    ,port:  8000
    /*
        [string]    path of the directory in which you save your posts' markdown files. Could be absolute or relative.
    */
    ,postsDir:   '/wamp/www/simple-node-blog/posts/'
};

module.exports = config;