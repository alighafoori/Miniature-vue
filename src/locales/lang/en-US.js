import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU,
  isRtl: false,
  name: 'en-US',
  currency: 'USD',
  currencyFomatter: null,
  dateFormatter: null,
  isoCode: 'en'
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
  'menu.pages.permissionlist': 'Permission List',
  'basicform.title.label': 'Title',
  'basicform.header.content': 'Form pages are used to collect or verify information from users. Basic forms are common in form scenarios with few data items.',
  'basicform.title.placeholder': 'Please enter a title',
  'basicform.title.error': 'Please enter a title',
  'basicform.startandend.label': 'Start and end dates',
  'basicform.startandend.error': 'Please select start and end dates',
  'basicform.goaldesc.label': 'Goal description',
  'basicform.goaldesc.error': 'Please enter a goal description',
  'basicform.goaldesc.placeholder': 'Please enter your staged work goals',
  'basicform.metrics.label': 'Metrics',
  'basicform.metrics.error': 'Please enter a metric',
  'basicform.metrics.placeholder': 'Please enter a metric',
  'basicform.client.label': 'Client',
  'basicform.client.error': 'Please describe the customers you serve',
  'basicform.client.placeholder': 'Please describe the customers you serve, internal customers directly @Name / Work ID',
  'basicform.reviewers.label': 'Invited reviewers',
  'basicform.reviewers.placeholder': 'Please directly @NAME, up to 5 people can be invited',
  'basicform.weights.label': 'Weights',
  'basicform.target.label': 'Open target',
  'basicform.target.help': 'Customers and invited reviewers are shared by default',
  'basicform.target.public': 'Public',
  'basicform.target.partlypublic': 'Partly public',
  'basicform.target.private': 'Private',
  'basicform.target.colleagueone': 'Colleague one',
  'basicform.target.colleaguetwo': 'Colleague II',
  'basicform.target.colleague3': 'Colleague III',
  'basicform.submit.label': 'submit',
  'basicform.save.label': 'Save',
  'advancedform.fieldLabels.name': 'Warehouse name',
  'advancedform.fieldLabels.url': 'Warehouse domain name',
  'advancedform.fieldLabels.owner': 'Warehouse Manager',
  'advancedform.fieldLabels.approver': 'Approver',
  'advancedform.fieldLabels.dateRange': 'Effective date',
  'advancedform.fieldLabels.type': 'Warehouse type',
  'advancedform.fieldLabels.name2': 'Task name',
  'advancedform.fieldLabels.url2': 'mission details',
  'advancedform.fieldLabels.owner2': 'Executive',
  'advancedform.fieldLabels.approver2': 'Responsible',
  'advancedform.fieldLabels.type2': 'Task type',
  'advancedform.header.content': 'Advanced forms are commonly used to enter and submit large amounts of data at once',
  'advancedform.card1.title': 'Warehouse management',
  'advancedform.card2.title': 'Task management',
  'advancedform.table.addto': 'Add',
  'advancedform.table.popconfirm.title': 'Do you want to delete this line?',
  'advancedform.table.popconfirm.content': 'Delete',
  'advancedform.table.save': 'Save',
  'advancedform.table.cancel': 'Cancel',
  'advancedform.table.edit': 'Edit',
  'advancedform.footer.popover.title': 'Form verification information',
  'advancedform.footer.send': 'Send',
  'advancedform.table.newrow': 'New member',
  'advancedform.table.columns.name': 'Member name',
  'advancedform.table.columns.workId': 'Job number',
  'advancedform.table.columns.department': 'Department',
  'advancedform.table.columns.action': 'operating',
  'advancedform.table.data1.name': 'Komei',
  'advancedform.table.data1.department': 'Administration Department',
  'advancedform.table.data2.name': 'Li Li',
  'advancedform.table.data2.department': 'IT Department',
  'advancedform.table.data3.name': 'Wang Xiaoshuai',
  'advancedform.table.data3.department': 'Finance Department',
  'advancedform.saverow.error': 'Please fill in the complete member information.',
  'repositoryform.name.placeholder': 'Please enter the warehouse name',
  'repositoryform.name.error': 'Please enter the warehouse name',
  'repositoryform.url.placeholder': 'please enter',
  'repositoryform.url.error': 'Please enter the domain name of the warehouse',
  'repositoryform.owner.placeholder': 'Please select an administrator',
  'repositoryform.owner.error': 'Please select an administrator',
  'repositoryform.owner.opt1': 'Classmate Wang',
  'repositoryform.owner.opt2': 'Classmate Li',
  'repositoryform.owner.opt3': 'Classmate Huang',
  'repositoryform.approver.placeholder': 'Please select an approver',
  'repositoryform.approver.error': 'Please select an approver',
  'repositoryform.approver.opt1': 'Wang Xiaoli',
  'repositoryform.approver.opt2': 'Li Jun',
  'repositoryform.dateRange.error': 'Please select effective date',
  'repositoryform.type.placeholder': 'Please select warehouse type',
  'repositoryform.type.error': 'Please select warehouse type',
  'repositoryform.type.opt1': 'public',
  'repositoryform.type.opt2': 'Private',
  'repositoryform.url.validatemsg': 'Need to start with user-',
  'taskform.name2.placeholder': 'Please enter a task name',
  'taskform.name2.error': 'Please enter a task name',
  'taskform.url2.placeholder': 'Please enter a task description',
  'taskform.url2.error': 'Please enter a task description',
  'taskform.owner2.placeholder': 'Please select an executive',
  'taskform.owner2.opt1': 'Huang Lili',
  'taskform.owner2.opt2': 'Li Dadao',
  'taskform.approver2.placeholder': 'Please select the responsible person',
  'taskform.approver2.opt1': 'Wang Wei',
  'taskform.approver2.opt2': 'Li Hongjun',
  'taskform.dateRange2.label': 'Reminder time',
  'taskform.dateRange2.error': 'Please select a reminder time',
  'repositoryform.type2.placeholder': 'Please select a task type',
  'repositoryform.type2.error': 'Please select a task type',
  'repositoryform.type2.opt1': 'Timed execution',
  'repositoryform.type2.opt2': 'Periodic execution',
  'dashboard.analysis.totalsale.title': 'Total sales',
  'dashboard.analysis.totalsale.tooltip.title': 'Indicator description',
  'dashboard.analysis.totalsale.yoy.first': 'YOY',
  'dashboard.analysis.totalsale.yoy.second': 'YOY',
  'dashboard.analysis.totalsale.avragedaily': 'Average daily sales',
  'dashboard.analysis.views.title': 'Views',
  'dashboard.analysis.views.tooltip.title': 'Indicator description',
  'dashboard.analysis.views.footer': 'Daily visits',
  'dashboard.analysis.payments.title': 'Number of payments',
  'dashboard.analysis.payments.tooltip.title': 'Indicator description',
  'dashboard.analysis.payments.footer': 'Conversion rates',
  'dashboard.analysis.effectiveness.title': 'Operational effectiveness',
  'dashboard.analysis.effectiveness.tooltip.title': 'Indicator description',
  'dashboard.analysis.effectiveness.sameweek': 'Same week',
  'dashboard.analysis.effectiveness.mom': 'MOM',
  'dashboard.analysis.sales.title': 'Sales',
  'dashboard.analysis.sales.bar.title': 'Sales ranking',
  'dashboard.analysis.sales.rank.title': 'Store sales ranking',
  'dashboard.analysis.date.today': 'today',
  'dashboard.analysis.date.thisweek': 'This week',
  'dashboard.analysis.date.thismonth': 'This month',
  'dashboard.analysis.date.thisyear': 'This year',
  'dashboard.analysis.sales.ternd': 'Sales trend',
  'dashboard.analysis.sales.ranking': 'Store sales ranking',
  'dashboard.analysis.search.title': 'Online Popular Search',
  'dashboard.analysis.contextmenu.menu1': 'Operation one',
  'dashboard.analysis.contextmenu.menu2': 'Operation two',
  'dashboard.analysis.search.users.title': 'Search users',
  'dashboard.analysis.search.users.tooltip.title': 'Indicator description',
  'dashboard.analysis.search.capita.title': 'Searches per capita',
  'dashboard.analysis.search.capita.tooltip.title': 'Indicator description',
  'dashboard.analysis.salescat.title': 'Percentage of sales category',
  'dashboard.analysis.salescat.allchannel': 'All channels',
  'dashboard.analysis.salescat.online': 'Online',
  'dashboard.analysis.salescat.store': 'Store',
  'dashboard.analysis.salescat.h4': 'Sales',
  'dashboard.searchData': 'search keyword',
  'dashboard.searchTableColumns.index': 'Index',
  'dashboard.searchTableColumns.keyword': 'Keyword',
  'dashboard.searchTableColumns.count': 'Count',
  'dashboard.searchTableColumns.range': 'Range',
  'dashboard.data.month': 'Month',
  'dashboard.rankList.part1': 'Egret',
  'dashboard.rankList.part2': 'rank',
  'dashboard.searchUserScale.alias1': 'time',
  'dashboard.searchUserScale.alias2': 'User number',
  'dashboard.sourceData.item1': 'Household appliances',
  'dashboard.sourceData.item2': 'Alcohol',
  'dashboard.sourceData.item3': 'Health care',
  'dashboard.sourceData.item4': 'Clothing bags',
  'dashboard.sourceData.item5': 'Maternal and child products',
  'dashboard.sourceData.item6': 'other',
  'miniarea.scale.title': 'Time',
  'workplace.user.description': 'Front-end engineer | Ant Financial-XYZ Business Group-VUE Platform',
  'workplace.user.numItems': 'Items',
  'workplace.user.ranking': 'Ranking',
  'workplace.user.visit': 'Visits',
  'workplace.projects.title': 'Projects',
  'workplace.projects.allitems': 'All items',
  'workplace.dynamic.title': 'dynamic',
  'workplace.dynamic.in': 'in',
  'workplace.quickstart.title': 'Quick start / easy navigation',
  'workplace.quickstart.opt1': 'option 1',
  'workplace.quickstart.opt2': 'option 2',
  'workplace.quickstart.opt3': 'option 3',
  'workplace.quickstart.opt4': 'option 4',
  'workplace.quickstart.opt5': 'option 5',
  'workplace.quickstart.opt6': 'option 6',
  'workplace.quickstart.addto': 'Add to',
  'workplace.index.title': 'XX index',
  'workplace.team.title': 'Team',
  'workplace.radar.personal': 'personal',
  'workplace.radar.team': 'team',
  'workplace.radar.departmant': 'departmant',
  'stepform.content': 'Divide a lengthy or unfamiliar form task into multiple steps to guide the user through it.',
  'stepform.step1': 'Fill in the transfer information',
  'stepform.step2': 'Confirm transfer information',
  'stepform.step3': 'carry out',
  'stepform1.payment.account': 'payment account',
  'stepform1.payment.account.error': 'Payment account must be filled',
  'stepform1.receiver': 'Accounts receivable',
  'stepform1.method.alipay': 'Alipay',
  'stepform1.method.wechat': 'WeChat',
  'stepform1.receiver.error': 'Collection account must be filled',
  'stepform1.payee.name': 'Payee Name',
  'stepform1.payee.name.error': 'Payee name must be checked',
  'stepform1.amount': 'transfer amount',
  'stepform1.amount.error': 'Transfer amount must be filled',
  'stepform1.nextstep': 'Next step',
  'stepform1.explanation': 'Explanation',
  'stepform1.explanation.title': 'Transfer money to Alipay account',
  'stepform1.explanation.body': 'If necessary, you can put some FAQs about the product here. If necessary, you can put some FAQs about the product here. If necessary, you can put some FAQs about the product here.',
  'stepform1.explanation2.title': 'Transfer to bank card',
  'stepform1.explanation2.body': 'If necessary, you can put some FAQs about the product here. If necessary, you can put some FAQs about the product here. If necessary, you can put some FAQs about the product here.',
  'stepform2.alert.message': 'After confirming the transfer, the funds will be directly credited to the other partys account and cannot be returned.',
  'stepform2.payment.account': 'payment account',
  'stepform2.receiver': 'Accounts receivable',
  'stepform2.payee.name': 'Payee Name',
  'stepform2.amount': 'transfer amount',
  'stepform2.password': 'Payment password',
  'stepform2.password.error': 'Please enter the payment password',
  'stepform2.submit': 'submit',
  'stepform2.previous': 'Previous',
  'stepform3.result.title': 'Successful operation',
  'stepform3.result.subtitle': 'Expected to arrive within two hours',
  'stepform3.account': 'payment account:',
  'stepform3.receiver': 'Accounts receivable:',
  'stepform3.payee.name': 'Payee Name:',
  'stepform3.payee.name.value': 'Hui Ye',
  'stepform3.amount': 'transfer amount:',
  'stepform3.currency': 'yuan',
  'stepform3.finish': 'Make another turn',
  'stepform3.toOrderList': 'View bill'
}

export default {
  ...components,
  ...locale
}
