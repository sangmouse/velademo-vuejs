

import {createStore} from 'vuex'
import auth from './auth/auth'
// import language from './language/language'
import cart from './cart/cart'
import routerpath from './router/router'


const store = createStore({
    modules:{
        auth,
        cart,
        // language,
        routerpath,
    }
})

export {store}
