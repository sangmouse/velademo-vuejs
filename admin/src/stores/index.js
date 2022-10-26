

import {createStore} from 'vuex'
import auth from './auth/auth'
import blog from './blog/blog'


const store = createStore({
    modules:{
        auth,
        blog,
    }
})

export {store}
