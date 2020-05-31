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
  'stepform3.toOrderList': 'View bill',
  'tablelist.Rule number': 'Rule number',
  'tablelist.status of use': 'status of use',
  'tablelist.please choose': 'please choose',
  'tablelist.All': 'All',
  'tablelist.shut down': 'shut down',
  'tablelist.Running': 'Running',
  'tablelist.Calls': 'Calls',
  'tablelist.Updated': 'Updated',
  'tablelist.Please enter the update date': 'Please enter the update date',
  'tablelist.Inquire': 'Inquire',
  'tablelist.Reset': 'Reset',
  'tablelist.Collapse': 'Collapse',
  'tablelist.Unfold': 'Unfold',
  'tablelist.New': 'New',
  'tablelist.Open': 'Open',
  'tablelist.delete': 'delete',
  'tablelist.locking': 'locking',
  'tablelist.Bulk operations': 'Bulk operations ',
  'tablelist.edit': 'edit',
  'tablelist.More ': 'More  ',
  'tablelist.Details': 'Details',
  'tablelist.Disable': 'Disable',
  'basiclist.My to-do': 'My to-do',
  'basiclist.Tasks': 'Tasks',
  'basiclist.Average': 'Average task processing time this week',
  'basiclist.minute': 'minute',
  'basiclist.TasksWeek': 'Tasks completed this week',
  'basiclist.Pc': 'Pc',
  'basiclist.Standard list': 'Standard list',
  'basiclist.All': 'All',
  'basiclist.processing': 'processing',
  'basiclist.Waiting': 'Waiting',
  'basiclist.Add to': 'Add to',
  'basiclist.edit': 'edit',
  'basiclist.delete': 'delete',
  'basiclist.More': 'More',
  'basiclist.Starting time': 'Starting time',
  'tablelistview.Rule number': 'Rule number',
  'tablelistview.status of use': 'status of use',
  'tablelistview.please choose': 'please choose',
  'tablelistview.All': 'All',
  'tablelistview.shut down': 'shut down',
  'tablelistview.Running': 'Running',
  'tablelistview.Calls': 'Calls',
  'tablelistview.Updated': 'Updated',
  'tablelistview.Please enter the update date': 'Please enter the update date',
  'tablelistview.Inquire': 'Inquire',
  'tablelistview.Reset': 'Reset',
  'tablelistview.Collapse': 'Collapse',
  'tablelistview.Unfold': 'Unfold',
  'tablelistview.New': 'New',
  'tablelistview.Open': 'Open',
  'tablelistview.delete': 'delete',
  'tablelistview.locking': 'locking',
  'tablelistview.Bulk operations': 'Bulk operations ',
  'tablelistview.Configuration': 'Configuration',
  'tablelistview.Subscribe to alarm': 'Subscribe to alarm',
  'tablelistview.Online': 'Online',
  'tablelistview.abnormal': 'abnormal',
  'tablelistview.description': 'description',
  'tablelistview.Service calls': 'Service calls',
  'tablelistview.Times': 'Times',
  'tablelistview.status': 'status',
  'tablelistview.Update time': 'Update time',
  'tablelistview.operating': 'operating',
  'tablelistview.Subscriptionsuccessful': 'Subscription successful`)',
  'tablelistview.Subscriptionfailed': 'Subscription failed, the rule is closed',
  'table.render.alert.title': 'Total',
  'table.render.alert.span': 'Selected',
  'table.render.clear': 'Clear',
  'cardlist.header.content': 'Paragraph sketch: Ant Gold Service Design Platform ant.design, with minimal workload, seamlessly connects to Ant Gold Service ecosystem, providing experience solutions that span design and development.',
  'cardlist.newBtn': 'New product',
  'cardlist.dataSource.content': 'In the R & D process of mid-stage products, different design specifications and implementation methods will appear, but there are often many similar pages and components, and these similar components will be extracted into a set of standard specifications.',
  'cardlist.tabList.tab1': 'Quick start',
  'cardlist.tabList.tab2': 'Product introduction',
  'cardlist.tabList.tab3': 'Product documentation',
  'cardlist.testfun': 'Quick start was clicked! ',
  'searchlayout.enterbutton': 'search for',
  'searchlayout.article': 'article',
  'searchlayout.project': 'project',
  'searchlayout.application': 'application',
  'search.article.catagory.Category': 'Category',
  'search.article.catagory.Category 1': 'Category 1',
  'search.article.catagory.Category 2': 'Category 2',
  'search.article.catagory.Category 3': 'Category 3',
  'search.article.catagory.Category 4': 'Category 4',
  'search.article.catagory.Category 5': 'Category 5',
  'search.article.catagory.Category 6': 'Category 6',
  'search.article.catagory.Category 7': 'Category 7',
  'search.article.catagory.Category 8': 'Category 8',
  'search.article.catagory.Category 9': 'Category 9',
  'search.article.catagory.Category 10': 'Category 10',
  'search.article.Select onwer': 'Select onwer',
  'search.article.Just look at your own': 'Just look at your own',
  'search.article.Other options': 'Other options',
  'search.article.active user': 'active user',
  'search.article.Unlimited': 'Unlimited',
  'search.article.Li San': 'Li San',
  'search.article.Praise of': 'Praise of',
  'search.article.excellent': 'excellent',
  'search.article.Design language': 'Design language',
  'search.article.Ant Financial': 'Ant Financial',
  'search.article.load more': 'load more',
  'search.article.Myself': 'Myself',
  'search.article.Wu Jiahao': 'Wu Jiahao',
  'search.article.Zhou Xingxing': 'Zhou Xingxing',
  'search.article.Zhao Liying': 'Zhao Liying',
  'search.article.Yao Ming': 'Yao Ming',
  'articlelistcontent.posted on': 'Posted on',
  'search.project.normal': 'normal',
  'search.project.Wang Zhaojun': 'Wang Zhaojun',
  'search.project.Author': 'Author',
  'search.aplication.download': 'download',
  'search.aplication.shareit': 'share it',
  'cardinfo.activeUser': 'active users',
  'cardinfo.newUser': 'new user',
  'basicprofile.refund application': 'refund application',
  'basicprofile.Pickup number': 'Pickup number',
  'basicprofile.status': 'status',
  'basicprofile.Picked up': 'Picked up',
  'basicprofile.Sales order number': 'Sales order number',
  'basicprofile.Child order': 'Child order',
  'basicprofile.User Info': 'User Info',
  'basicprofile.username': 'username',
  'basicprofile.Fu Xiaoxiao': 'Fu Xiaoxiao',
  'basicprofile.contact number': 'contact number',
  'basicprofile.Commonly used express': 'Commonly used express',
  'basicprofile.Rookie storage': 'Rookie storage',
  'basicprofile.Pickup address': 'Pickup address',
  'basicprofile.address': 'No. 18, Wantang Road, Xihu District, Hangzhou City, Zhejiang Province',
  'basicprofile.Remarks': 'Remarks',
  'basicprofile.no': 'no',
  'basicprofile.Returned goods': 'Returned goods',
  'basicprofile.Return progress': 'Return progress',
  'basicprofile.Product Number': 'Product Number',
  'basicprofile.product name': 'product name',
  'basicprofile.barcode': 'barcode',
  'basicprofile.unit price': 'unit price',
  'basicprofile.Quantity / piece)': 'Quantity / piece)',
  'basicprofile.Amount': 'Amount',
  'basicprofile.Mineral water 550ml': 'Mineral water 550ml',
  'basicprofile.Herbal tea 300ml': 'Herbal tea 300ml',
  'basicprofile.Delicious potato chips': 'Delicious potato chips',
  'basicprofile.Especially delicious egg rolls': 'Especially delicious egg rolls',
  'basicprofile.time': 'time',
  'basicprofile.Current progress': 'Current progress',
  'basicprofile.Operator ID': 'Operator ID',
  'basicprofile.time consuming': 'time consuming',
  'basicprofile.contact clients': 'contact clients',
  'basicprofile.Pickup ID1234': 'Pickup ID1234',
  'basicprofile.Pickup Departure': 'Pickup Departure',
  'basicprofile.Pick up the order': 'Pick up the order',
  'basicprofile.Application approved': 'Application approved',
  'basicprofile.system': 'system',
  'basicprofile.Initiate': 'Initiate a return application',
  'basicprofile.user': 'user',
  'basicprofile.processing': 'processing',
  'basicprofile.carry out': 'carry out',
  'basicprofile.failure': 'failure',
  'advancedprofile.Number': 'Number: 234231029431',
  'advancedprofile.founder': 'founder',
  'advancedprofile.Qu Lili': 'Qu Lili',
  'advancedprofile.Ordering Products': 'Ordering Products',
  'advancedprofile.service': 'service',
  'advancedprofile.Creation time': 'Creation time',
  'advancedprofile.Related documents': 'Related documents',
  'advancedprofile.effective date': 'effective date',
  'advancedprofile.Remarks': 'Remarks',
  'advancedprofile.confirm': 'Please confirm within two working days',
  'advancedprofile.operating': 'operating',
  'advancedprofile.Main operation': 'Main operation',
  'advancedprofile.status': 'status',
  'advancedprofile.Pending': 'Pending',
  'advancedprofile.order amount': 'order amount',
  'advancedprofile.Process progress': 'Process progress',
  'advancedprofile.Create project': 'Create project',
  'advancedprofile.Departmental': 'Departmental Preliminary Examination',
  'advancedprofile.Financial review': 'Financial review',
  'advancedprofile.carry out': 'carry out',
  'advancedprofile.User Info': 'User Info',
  'advancedprofile.username': 'username',
  'advancedprofile.Fu Xiaoxiao': 'Fu Xiaoxiao',
  'advancedprofile.member card number': 'member card number',
  'advancedprofile.ID card': 'ID card',
  'advancedprofile.contact details': 'contact details',
  'advancedprofile.contact address': 'contact address',
  'advancedprofile.address': 'Intersection of Gongzhuan Road, Huanggushan Road, Xihu District, Hangzhou, Zhejiang Province',
  'advancedprofile.Information Group': 'Information Group',
  'advancedprofile.XX data': 'XX data',
  'advancedprofile.The data update time': 'The data update time',
  'advancedprofile.Multi-layer information group': 'Multi-layer information group',
  'advancedprofile.Group name': 'Group name',
  'advancedprofile.principal': 'principal',
  'advancedprofile.Lin Dongdong': 'Lin Dongdong',
  'advancedprofile.Character code': 'Character code',
  'advancedprofile.Department': 'Department',
  'advancedprofile.Company-YY Department': 'Company-YY Department',
  'advancedprofile.expire date': 'expire date',
  'advancedprofile.description': 'description',
  'advancedprofile.description.content': 'This description is very long, very long, very long, very long, very long, very long, very long, very long, very long, very long, very long ...',
  'advancedprofile.scientific name': 'scientific name',
  'advancedprofile.Annual': 'Annual vines; stems and branches are thick, with obvious edges. The tendrils are thicker ..',
  'advancedprofile.User call history in the past six months': 'User call history in the past six months',
  'advancedprofile.No data': 'No data',
  'advancedprofile.Details': 'Details',
  'advancedprofile.rule': 'rule',
  'advancedprofile.Operation log one': 'Operation log one',
  'advancedprofile.Operation log two': 'Operation log two',
  'advancedprofile.Operation log three': 'Operation log three',
  'advancedprofile.Operation type': 'Operation type',
  'advancedprofile.Operator': 'Operator',
  'advancedprofile.Results of the': 'Results of the',
  'advancedprofile.Operating time': 'Operating time',
  'advancedprofile.Ordering relationship effective': 'Ordering relationship effective',
  'advancedprofile.Reason for failure': 'Reason for failure',
  'advancedprofile.Departmental Preliminary Examination': 'Departmental Preliminary Examination',
  'advancedprofile.Zhou Maomao': 'Zhou Maomao',
  'advancedprofile.Submit Order': 'Submit Order',
  'advancedprofile.Great': 'Great',
  'advancedprofile.Create Order': 'Create Order',
  'advancedprofile.Sweaty teeth': 'Sweaty teeth',
  'advancedprofile.success': 'success',
  'advancedprofile.turn down': 'turn down',
  'success.Back to list': 'Back to list',
  'success.View project': 'View project',
  'success.print': 'print',
  'success.project name': 'project name',
  'success.ProjectID': 'Project ID',
  'success.principal': 'principal',
  'success.Who is Qu Lili?': 'Who is Qu Lili?',
  'success.Effective': 'Effective time',
  'success.Create project': 'Create project',
  'success.Qu Lili': 'Qu Lili',
  'success.Departmental': 'Departmental Preliminary Examination',
  'success.Zhou Maomao': 'Zhou Maomao',
  'success.Hurry': 'Hurry',
  'success.Financial review': 'Financial review',
  'success.carry out': 'carry out',
  'success.title': 'Submit successfully',
  'success.description': 'Submission results page is used to feedback the processing results of a series of operation tasks. If it is only a simple operation, use Message global prompt feedback. This text area can display simple supplementary instructions. If there is a similar need to display "documents", the gray area below can present more complex content. ',
  'error.Back': 'Back to modification',
  'error.content': 'The content you submitted has the following errors:',
  'error.frozen': 'Your account has been frozen',
  'error.Thawnow': 'Thaw now',
  'error.eligible': 'Your account is not yet eligible',
  'error.upgrade': 'upgrade immediately',
  'error.title': 'Submission Failed ',
  'error.description': 'Please check and modify the following information before resubmitting. ',
  '403.content': 'Sorry, you do not have access to this page.',
  '403.Back': 'Back Home',
  '404.content': 'Sorry, the page you visited does not exist.',
  '500.content': 'Sorry, the server is reporting an error.',
  'accountcenter.bio': 'Be tolerant to diversity, tolerance is a virtue',
  'accountcenter.Interaction': 'Interaction expert',
  'accountcenter.group': 'Ant Financial-XX business group-XY platform department-XY technology department-UED',
  'accountcenter.Province': 'Zhejiang Province',
  'accountcenter.Hangzhou': 'Hangzhou',
  'accountcenter.label': 'label',
  'accountcenter.team': 'team',
  'accountcenter.tag.thoughtful': 'Very thoughtful',
  'accountcenter.tag.Focus': 'Focus on design',
  'accountcenter.tag.Spicy': 'Spicy ~',
  'accountcenter.tag.Longlegs': 'Long legs',
  'accountcenter.tag.Chuanmeizi': 'Chuanmeizi',
  'accountcenter.tag.Heinabaichuan': 'Heinabaichuan',
  'accountcenter.tab.Article': 'Article(8)',
  'accountcenter.tab.Application': 'Application(8)',
  'accountcenter.tab.Project': 'Project(8)',
  'accountcenter.page.activeuser': 'active user',
  'accountcenter.page.Tenthousand': 'K',
  'accountcenter.page.Newusers': 'New users',
  'accountcenter.article.Design language': 'Design language',
  'accountcenter.article.Ant Financial': 'Ant Financial',
  'accountcenter.article.load more': 'load more',
  'accountsetting.nickname': 'nickname',
  'accountsetting.yourselfname': 'Give yourself a name',
  'accountsetting.e-mail': 'e-mail',
  'accountsetting.Encryption': 'Encryption',
  'accountsetting.Connectionpassword': 'Connection password',
  'accountsetting.loginpassword': 'login password',
  'accountsetting.password': 'password',
  'accountsetting.submit': 'submit',
  'accountsetting.save': 'save',
  'accountsetting.bio': 'bio',
  'accountsetting.bio.placeholder': 'You are not alone.',
  'accountsetting.basicsettings': 'basic settings',
  'accountsetting.SecuritySettings': 'Security Settings',
  'accountsetting.personalise': 'personalise',
  'accountsetting.Accountbinding': 'Account binding',
  'accountsetting.Newmessagenotification': 'New message notification',
  'accountsetting.security.password': 'account password',
  'accountsetting.security.passwordstrength': 'Current password strength',
  'accountsetting.security.Strong': 'Strong',
  'accountsetting.security.modify': 'modify',
  'accountsetting.security.Secret': 'Secret security phone',
  'accountsetting.security.Phone': 'Phone bound',
  'accountsetting.security.SecurityQuestion': 'Security Question',
  'accountsetting.security.issue': 'There is no secret security issue, which can effectively protect the account security',
  'accountsetting.security.Setup': 'Set up',
  'accountsetting.security.Backup email': 'Backup email',
  'accountsetting.security.Mailbox bound': 'Mailbox bound',
  'accountsetting.security.device': 'device',
  'accountsetting.security.Unbound MFA device': 'Unbound MFA device, after binding, you can perform a second confirmation',
  'accountsetting.security.Binding': 'Binding',
  'accountsetting.security.MFA equipment': 'MFA equipment',
  'accountsetting.security.info': 'This is a normal message',
  'accountsetting.security.success': 'This is a message of success',
  'accountsetting.security.error': 'This is a message of error',
  'accountsetting.security.warning': 'This is message of warning',
  'accountsetting.custom.Stylecolor': 'Style color',
  'accountsetting.custom.Overall': 'Overall style color setting',
  'accountsetting.custom.Dark': 'Dark',
  'accountsetting.custom.white': 'white',
  'accountsetting.custom.Themecolor': 'Theme color',
  'accountsetting.custom.Pagestyle': 'Page style color matching:',
  'settingconfig.dusk': 'dusk',
  'settingconfig.volcanic': 'volcanic',
  'settingconfig.Sunset': 'Sunset',
  'settingconfig.Mingqing': 'Mingqing',
  'settingconfig.Aurora green': 'Aurora green',
  'settingconfig.Daybreak': 'Daybreak Blue (default)',
  'settingconfig.Geek Blue': 'Geek Blue',
  'settingconfig.Sauce purple': 'Sauce purple',
  'settingconfig.loading': 'Switching theme!',
  'avatarmodal.Modify avatar': 'Modify avatar',
  'avatarmodal.Select Image': 'Select Image',
  'avatarmodal.save': 'save',
  'avatarmodal.finish.success': 'Uploaded successfully',
  'avatarmodal.ok.success': 'Successful upload of avatar',
  'iconselector.function': 'Test IconSelector component v-model function',
  'iconselector.Change Icon-down': 'Change Icon-down',
  'iconselector.Change Icon-cloud-download': 'Change Icon-cloud-download',
  'iconselector.info': 'Check icon',
  'icons.Directional icons': 'Directional icons',
  'icons.Suggestive icon': 'Suggestive icon',
  'icons.Editorial icon': 'Editorial icon',
  'icons.Data icon': 'Data icon',
  'icons.Website universal icons': 'Website universal icons',
  'icons.Brand and logo': 'Brand and logo'
}

export default {
  ...components,
  ...locale
}
