import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU,
  isRtl: false,
  name: 'en-US'
}

const locale = {
  'message': '-',
  'menu.home': 'Home',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': 'Analysis',
  'menu.dashboard.monitor': 'Monitor',
  'menu.dashboard.workplace': 'Workplace',
  'menu.forms': 'Forms',
  'menu.forms.base': 'Basic Form',
  'menu.forms.stepform': 'Step Form',
  'menu.forms.advanceform': 'Advance Form',
  'menu.lists': 'Table List',
  'menu.lists.tablelist': 'Table List',
  'menu.lists.basiclist': 'Basic List',
  'menu.lists.cardlist': 'Card List',
  'menu.lists.searchlist': 'Search List',
  'menu.lists.searchlist.articles': 'Search Articles',
  'menu.lists.searchlist.projects': 'Search Projects',
  'menu.lists.searchlist.application': 'Search Application',
  'menu.profile': 'Profile',
  'menu.profile.basic': 'Basic Profile',
  'menu.profile.advanced': 'Advanced Profile',
  'menu.result': 'Result Pages',
  'menu.result.success': 'Success Result',
  'menu.result.fail': 'Fail Result',
  'menu.exceptions': 'Error Pages',
  'menu.exceptions.403': '403',
  'menu.exceptions.404': '404',
  'menu.exceptions.500': '500',
  'menu.account': 'Account Pages',
  'menu.account.center': 'Center Account Page',
  'menu.account.settings': 'Account Settings',
  'menu.account.settings.base': 'Base Setting',
  'menu.account.settings.security': 'Security Setting',
  'menu.account.settings.custom': 'Custom Setting',
  'menu.account.settings.binding': 'Binding Setting',
  'menu.account.settings.notification': 'Notification Setting',
  'menu.pages': 'Pages',
  'menu.pages.iconselector': 'Icon Selector',
  'menu.pages.lists': 'Lists',
  'menu.pages.treelist': 'Tree List',
  'menu.pages.edittable': 'Edit Table',
  'menu.pages.userlist': 'User List',
  'menu.pages.rolelist': 'Role List',
  'menu.pages.systemrole': 'System Role',
  'menu.pages.permissionlist': 'Permission List'
}

export default {
  ...components,
  ...locale
}
