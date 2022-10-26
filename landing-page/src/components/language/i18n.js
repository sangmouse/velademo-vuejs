import enMessage from './en.json'
import vnMessage from './vn.json'
import { createI18n } from 'vue-i18n'

const messages ={
    vn:vnMessage,
    en:enMessage
}

const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  messages,
  fallbackLocale:'vn'
})

export default i18n

// import { createI18n } from 'vue-i18n'

// const i18n = createI18n({
//   locale: 'en',
//   allowComposition: true, // you need to specify that!
//   messages: {
//     en: {
//       login: 'login!',
//       register:'Sign up'
//     },
//     vn: {
//       login: 'Đăng Nhập!',
//       register:'Đăng ký'

//     }
//   }
// })

// export default i18n
