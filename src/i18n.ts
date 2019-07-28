// https://github.com/kazupon/vue-i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = {
  en: {
    app_name: 'Shalculator',
    temperature: 'Temperature',
    temperature_msg: 'convert temperature unit'
  },
  fa: {
    app_name: 'Shalculator',
    temperature: 'دما',
    temperature_msg: 'تبدیل دما'
  }
}
const i18n = new VueI18n({
  locale: 'en',
  messages
})
export default i18n
