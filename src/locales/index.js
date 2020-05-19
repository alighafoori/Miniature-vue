import Vue from 'vue'
import VueI18n from 'vue-i18n'
import storage from 'store'
import moment from 'moment'
import store from '../store'
import { APP_LANGUAGE_OBJ } from '../store/mutation-types'
// default lang
import enUS from './lang/en-US'

Vue.use(VueI18n)

export const defaultLang = 'en-US'
export let currentLang = enUS
const messages = {
  'en-US': {
    ...enUS
  }
}

const i18n = new VueI18n({
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages
})

const loadedLanguages = [enUS]

function setI18nLanguage (lang) {
  currentLang = lang
  i18n.locale = lang.name
  storage.set('isRtl', lang.isRtl)
  store.commit(APP_LANGUAGE_OBJ, lang)
  // request.headers['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang.name)
  document.querySelector('html').setAttribute('dir', lang.isRtl ? 'rtl' : 'ltr')
  return lang.name
}

export function loadLanguageAsync (lang = defaultLang) {
  return new Promise(resolve => {
    // 缓存语言设置
    storage.set('lang', lang)
    if (i18n.locale !== lang) {
      if (!loadedLanguages.some((x) => x.name === lang)) {
        return import(/* webpackChunkName: "lang-[request]" */ `./lang/${lang}`).then(msg => {
          const locale = msg.default
          i18n.setLocaleMessage(lang, locale)
          loadedLanguages.push(locale)
          moment.updateLocale(locale.momentName, locale.momentLocale)
          return setI18nLanguage(locale)
        })
      }
      return resolve(setI18nLanguage(loadedLanguages.find((x) => x.name === lang)))
    }
    return resolve(lang)
  })
}

export function i18nRender (key) {
  return i18n.t(`${key}`)
}

export default i18n
