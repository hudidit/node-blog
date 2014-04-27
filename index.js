/*
    index.js
    Dependent:  jQuery
*/
$(function(){
    
	home();

	$('#home').on('click',function(e){
		e.preventDefault();
		home();
	});

	$('#main').on('click',function(e){
		e.preventDefault();
		var target = $(e.target);
		if(target.attr('href')){
			single(target.attr('href'));
		}
	});

    var main = $('#main');
    
	function home(){
		$.get(
			'http://guobaner.com:8000'
			,function(data){
				main.html(data);
			}
		);
	}

	function single( name ){
		$.get(
			'http://guobaner.com:8000?post='+name
			,function(data){
				main.html(data);
			}
		);
	}

});
