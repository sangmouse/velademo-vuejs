

import {createStore} from 'vuex'
import auth from './auth/auth'
import cart from './cart/cart'
import blog from './blog/blog'

import routerpath from './router/router'


const store = createStore({
    modules:{
        auth,
        cart,
        blog,
        routerpath,
    }
})

export {store}
