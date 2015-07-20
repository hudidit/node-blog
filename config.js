var tianma = require('tianma');

tianma(80)
	.rewrite({
		'/': '/md2html'
	})
    .static({
	root: './',
	indexes: ['index.html']
	});
