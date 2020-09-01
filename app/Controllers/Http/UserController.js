'use strict'

const User = use('App/Models/User')

class UserController {
    index = async ({ response }) => {
        const users = await User.all()
        return response.json(users)
    }
}

module.exports = UserController
