/*
    index.js
    Dependent:  jQuery
*/
define(function( require, exports, module ){
    
    var $           = require('jquery'),
        settings    = require('./settings'),
        site        = require('./site'),
        header      = require('./header');
    
    var main = $('#main');

    $(function(){
        
        home();

        $('#home').on('click',function(e){
            e.preventDefault();
            home();
        });

        main.on('click','.post-name',function(e){
            e.preventDefault();
            var target = $(e.target),
                href = target.attr('href');
            if( href ){
                window.location.hash = href;
            }
        });

        $(window).on('hashchange',function(e){
            var hash = window.location.hash;
            single( hash.slice(1,hash.length) );
            console.log(hash.slice(1,hash.length));
        });

        
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
