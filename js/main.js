/*
    index.js
    Dependent:  jQuery
*/
define(function( require, exports, module ){
    
    var $           = require('jquery'),
        settings    = require('./settings'),
        site        = require('./site'),
        header      = require('./header');
    
    $(function(){
        
        home();

        $('#home').on('click',function(e){
            e.preventDefault();
            home();
        });

        $('#main').on('click','.post-name',function(e){
            e.preventDefault();
            var target = $(e.target);
            if(target.attr('href')){
                single(target.attr('href'));
            }
        });

        var main = $('#main');
        
        function home(){
            $.get(
                settings.url + ':' + settings.port
                ,function(data){
                    main.html(data);
                }
            );
        }

        function single( name ){
            $.get(
                settings.url + ':' + settings.port + '?post='+name
                ,function(data){
                    main.html(data);
                }
            );
        }

    });

});
