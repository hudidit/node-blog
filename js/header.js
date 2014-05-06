define(function( require, exports, module ){
    
    var $ = require('jquery'),
        settings = require('./settings');
    
    $(function(){
        $('#home').html(settings.title);
    });
    
});