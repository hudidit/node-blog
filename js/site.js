define(function( require, exports, module ){
    
    var $ = require('jquery'),
        settings = require('./settings');
    
    $(function(){
        var doc = document;
        doc.getElementsByTagName('title')[0].innerHTML = settings.title;
    });
    
});