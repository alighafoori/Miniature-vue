import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN,
  isRtl: false,
  name: 'zh-CN'
}

const locale = {
  'message': '-',
  'menu.home': '主页',
  'menu.dashboard': '仪表盘',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'menu.forms': '表单页',
  'menu.forms.base': '基础表单',
  'menu.forms.stepform': '分步表单',
  'menu.forms.advanceform': '高级表单',
  'menu.lists': '列表页',
  'menu.lists.tablelist': '查询表格',
  'menu.lists.basiclist': '标准列表',
  'menu.lists.cardlist': '卡片列表',
  'menu.lists.searchlist': '搜索列表',
  'menu.lists.searchlist.articles': '搜索列表（文章）',
  'menu.lists.searchlist.projects': '搜索列表（项目）',
  'menu.lists.searchlist.application': '搜索列表（应用） ',
  'menu.profile': '详情页',
  'menu.profile.basic': '基础详情页',
  'menu.profile.advanced': '高级详情页',
  'menu.result': '结果页',
  'menu.result.success': '成功',
  'menu.result.fail': '失败',
  'menu.exceptions': '异常页',
  'menu.exceptions.403': '403',
  'menu.exceptions.404': '404',
  'menu.exceptions.500': '500',
  'menu.account': '个人页',
  'menu.account.center': '个人中心',
  'menu.account.settings': '个人设置',
  'menu.account.settings.base': '基本设置',
  'menu.account.settings.security': '安全设置',
  'menu.account.settings.custom': '个性化设置',
  'menu.account.settings.binding': '账户绑定',
  'menu.account.settings.notification': '新消息通知',
  'menu.pages': '其他组件',
  'menu.pages.iconselector': 'Icon Selector',
  'menu.pages.lists': '业务布局',
  'menu.pages.treelist': '树目录表格',
  'menu.pages.edittable': '内联编辑表格',
  'menu.pages.userlist': '用户列表',
  'menu.pages.rolelist': '角色列表',
  'menu.pages.systemrole': '角色列表2',
  'menu.pages.permissionlist': '权限列表'
}

export default {
  ...components,
  ...locale
}
