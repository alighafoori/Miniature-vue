import message from 'ant-design-vue/es/message'
// import defaultSettings from '../defaultSettings';
import themeColor from './themeColor.js'
import { i18nRender } from '@/locales'

// let lessNodesAppended
function colorList () {
  return [
  {
    key: i18nRender('settingconfig.dusk'), color: '#F5222D'
  },
  {
    key: i18nRender('settingconfig.volcanic'), color: '#FA541C'
  },
  {
    key: i18nRender('settingconfig.Sunset'), color: '#FAAD14'
  },
  {
    key: i18nRender('settingconfig.Mingqing'), color: '#13C2C2'
  },
  {
    key: i18nRender('settingconfig.Aurora green'), color: '#52C41A'
  },
  {
    key: i18nRender('settingconfig.Daybreak'), color: '#1890FF'
  },
  {
    key: i18nRender('settingconfig.Geek Blue'), color: '#2F54EB'
  },
  {
    key: i18nRender('settingconfig.Sauce purple'), color: '#722ED1'
  }
]
}

const updateTheme = newPrimaryColor => {
  const hideMessage = message.loading(i18nRender('settingconfig.loading'), 0)
  themeColor.changeColor(newPrimaryColor).finally(() => {
    setTimeout(() => {
      hideMessage()
    }, 10)
  })
}

const updateColorWeak = colorWeak => {
  // document.body.className = colorWeak ? 'colorWeak' : '';
  const app = document.body.querySelector('#app')
  colorWeak ? app.classList.add('colorWeak') : app.classList.remove('colorWeak')
}

export { updateTheme, colorList, updateColorWeak }
