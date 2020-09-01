'use strict'

const Post = use('App/Models/Post')

class PostController {
    index = async ({ response }) => {
        const Posts = await Post.all()
        return response.json(Posts)
    }
}

module.exports = PostController
