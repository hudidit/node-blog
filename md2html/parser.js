var http = require('http'),
	marked = require('marked'),
	url = require('url'),
	fs = require('fs');

// This server is responding to any request sent to guobaner.com:8000
http.createServer(function( req, res ){
	res.writeHead(200,{
		'Content-Type':'text/html'
		,'Access-Control-Allow-Origin': 'http://blog.guobaner.com'
	});

	var query =	url.parse(req.url, true).query;
	if( query.post ){
		readPost( query.post );
	}else{
		listPosts();
	}

	function readPost( name ){
		fs.readFile('./posts/'+name,'utf8',function(err,data){
			if(err){
				res.end( 'Unable to read post.\n' + err );
			}
			res.end(marked(data));
		});
	}

	function listPosts(){
		fs.readdir('./posts',function(err,files){
			var resData = '';
			if( err ){
				res.end( 'Unable to list posts.\n' + err );
			}
			resData = '<ul>';
			for(var i = 0,len = files.length; i<len; i++){
				var filename = files[i];
				resData += '<li><a href="'+ filename +'" class="post-name">'+ filename.replace(/-/g,' ').slice(0,filename.length-3) +'</a></li>';
			}
			resData += '</ul>';
			res.end(resData);
		});
	}

}).listen(8000);


