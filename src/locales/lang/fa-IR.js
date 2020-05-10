import antdEnUS from 'ant-design-vue/es/locale-provider/fa_IR'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'fa',
  momentLocale: momentEU,
  isRtl: true,
  name: 'fa-IR'
}

const locale = {
  'message': '-',
  'menu.home': 'خانه',
  'menu.dashboard': 'میزکار',
  'menu.dashboard.analysis': 'آمار',
  'menu.dashboard.monitor': 'نظارت',
  'menu.dashboard.workplace': 'محل کار'
}

export default {
  ...components,
  ...locale
}
