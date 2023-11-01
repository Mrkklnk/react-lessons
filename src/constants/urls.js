const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'

const urls = {
    users,
    posts:{
        byUsersId:(userId) => `${users}/${userId}/posts`
    }
}

export {urls, baseURL}