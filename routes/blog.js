'use strict';
import Router from 'koa-router'
const router = new Router()
const Category = require('../controller/category')
const Post = require('../controller/post')

router.get('/posts/page/:page', Post.getPosts);
router.get('/post/:id', Post.getPost);

export default router