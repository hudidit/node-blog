<<<<<<< HEAD
hudidit.github.io
=================

### Github Pages + Node.js = super simple blog engine

### Note

This project is only a prototype for now. And I'm really having fun building it.

# Requirements

## Front end

Clone this repo to your [Github Pages](http://pages.github.com/).

## Back end

1. Setup a Node.js server of your own.

2. Clone this repo to your local git.

3. Get the server up and running. We need it to parser markdown content into html and send to the front-end.

`node path/to/md2html/parser.js`

Personally I'm using [Forever](https://github.com/nodejitsu/forever).

`forever start path/to/md2html/parser.js`

## Composing

With your beloved markdown.

```shell
> cd /path/to/posts
> vim my-first-post.md

> # Hello world!
> :wq

> git add my-first-post.md
> git commit -m "first post using this simple blog engine"
> git push
```
An shining there are your lovely words.
=======
simple-node-blog
================

simple blog engine using Node.js
>>>>>>> e5ec93626d0e07e075685bc1d7543e47c28d9614
