/*
    index.js
    Dependent:  jQuery
*/
define(function( require, exports, module ){
    
    var $           = require('jquery'),
        settings    = require('./settings'),
        site        = require('./site'),
        header      = require('./header'),
        history     = window.history;
    
    var main = $('#main');

    $(function(){
        
        hasQuery();

        $('#home').on('click',function(e){
            if(history.state){
                e.preventDefault();
                history.back(1);
            }
        });

        main.on('click','.post-name',function(e){
            e.preventDefault();
            var href = $(e.target).attr('href'),
                post = href.slice(0,href.length-3);
            history.pushState({
                state:  1
                ,post:  post
            },post,'?post='+post);
            hasQuery()
        });

        $(window).on('popstate',function(){
            console.log(history.state)
            hasQuery()
        })

        function home(){
            $.get(
                settings.url + ':' + settings.port
                ,function(data){
                    main.html(data);
                }
            );
        }

        function single( post ){
            $.get(
                settings.url + ':' + settings.port + '?post='+post+'.md'
                ,function(data){
                    main.html(data);
                }
            );
        }

        function queryObject(){
            var query   = window.location.search.substring(1),
                vars    = query.split('&'),
                obj     = {};
            for( var i=0,len=vars.length; i<len; i++){
                var pair = vars[i].split('=');
                obj[ pair[0] ] = pair[1];
            }
            return obj;
        }

        function hasQuery(){
            var post = queryObject().post;
            post ? single(post) : home();
        }

   });

});
