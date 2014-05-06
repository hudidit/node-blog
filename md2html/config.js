var config = {
    /*
        [string]    client side origin
        e.g.    'http://my-domain.com'
    */
    origin: 'http://huyue.org'
    /*
        [number]    port number for Node.js server created by parser.js
    */
    ,port:  6031
    /*
        [string]    path of the directory in which you save your posts' markdown files. Could be absolute or relative.
    */
    ,postsDir:   './posts/'
};

module.exports = config;
