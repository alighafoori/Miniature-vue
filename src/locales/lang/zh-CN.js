import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN,
  isRtl: false,
  name: 'zh-CN',
  currency: 'CNY',
  currencyFomatter: null,
  dateFormatter: null,
  isoCode: 'zh'
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
  'menu.pages.permissionlist': '权限列表',
  'basicform.title.label': '标题',
  'basicform.header.content': '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
  'basicform.title.placeholder': '给目标起个名字',
  'basicform.title.error': '给目标起个名字',
  'basicform.startandend.label': '起止日期',
  'basicform.startandend.error': '请选择起止日期',
  'basicform.goaldesc.label': '目标描述',
  'basicform.goaldesc.error': '请输入目标描述',
  'basicform.goaldesc.placeholder': '请输入你阶段性工作目标',
  'basicform.metrics.label': '衡量标准',
  'basicform.metrics.error': '请输入衡量标准',
  'basicform.metrics.placeholder': '请输入衡量标准',
  'basicform.client.label': '客户',
  'basicform.client.error': '请描述你服务的客户',
  'basicform.client.placeholder': '请描述你服务的客户，内部客户直接 @姓名／工号',
  'basicform.reviewers.label': '邀评人',
  'basicform.reviewers.placeholder': '请直接 @姓名／工号，最多可邀请 5 人',
  'basicform.weights.label': '权重',
  'basicform.target.label': '目标公开',
  'basicform.target.help': '客户、邀评人默认被分享',
  'basicform.target.public': '公开',
  'basicform.target.partlypublic': '部分公开',
  'basicform.target.private': '不公开',
  'basicform.target.colleagueone': '同事一',
  'basicform.target.colleaguetwo': '同事二',
  'basicform.target.colleague3': '同事三',
  'basicform.submit.label': '提交',
  'basicform.save.label': '保存',
  'advancedform.fieldLabels.name': '仓库名',
  'advancedform.fieldLabels.url': '仓库域名',
  'advancedform.fieldLabels.owner': '仓库管理员',
  'advancedform.fieldLabels.approver': '审批人',
  'advancedform.fieldLabels.dateRange': '生效日期',
  'advancedform.fieldLabels.type': '仓库类型',
  'advancedform.fieldLabels.name2': '任务名',
  'advancedform.fieldLabels.url2': '任务描述',
  'advancedform.fieldLabels.owner2': '执行人',
  'advancedform.fieldLabels.approver2': '责任人',
  'advancedform.fieldLabels.type2': '任务类型',
  'advancedform.header.content': '高级表单常见于一次性输入和提交大批量数据的场景',
  'advancedform.card1.title': '仓库管理',
  'advancedform.card2.title': '任务管理',
  'advancedform.table.addto': '添加',
  'advancedform.table.popconfirm.title': '是否要删除此行？',
  'advancedform.table.popconfirm.content': '删除',
  'advancedform.table.save': '保存',
  'advancedform.table.cancel': '取消',
  'advancedform.table.edit': '编辑',
  'advancedform.footer.popover.title': '表单校验信息',
  'advancedform.footer.send': '提交',
  'advancedform.table.newrow': '新增成员',
  'advancedform.table.columns.name': '成员姓名',
  'advancedform.table.columns.workId': '工号',
  'advancedform.table.columns.department': '所属部门',
  'advancedform.table.columns.action': '操作',
  'advancedform.table.data1.name': '小明',
  'advancedform.table.data1.department': '行政部',
  'advancedform.table.data2.name': '李莉',
  'advancedform.table.data2.department': 'IT部',
  'advancedform.table.data3.name': '王小帅',
  'advancedform.table.data3.department': '财务部',
  'advancedform.saverow.error': '请填写完整成员信息。',
  'repositoryform.name.placeholder': '请输入仓库名称',
  'repositoryform.name.error': '请输入仓库名称',
  'repositoryform.url.placeholder': '请输入',
  'repositoryform.url.error': '请输入仓库域名',
  'repositoryform.owner.placeholder': '请选择管理员',
  'repositoryform.owner.error': '请选择管理员',
  'repositoryform.owner.opt1': '王同学',
  'repositoryform.owner.opt2': '李同学',
  'repositoryform.owner.opt3': '黄同学',
  'repositoryform.approver.placeholder': '请选择审批员',
  'repositoryform.approver.error': '请选择审批员',
  'repositoryform.approver.opt1': '王晓丽',
  'repositoryform.approver.opt2': '李军',
  'repositoryform.dateRange.error': '李军',
  'repositoryform.type.placeholder': '请选择仓库类型',
  'repositoryform.type.error': '请选择仓库类型',
  'repositoryform.type.opt1': '公开',
  'repositoryform.type.opt2': '私密',
  'repositoryform.url.validatemsg': '需要以 user- 开头',
  'taskform.name2.placeholder': '请输入任务名称',
  'taskform.name2.error': '请输入任务名称',
  'taskform.url2.placeholder': '请输入任务描述',
  'taskform.url2.error': '请输入任务描述',
  'taskform.owner2.placeholder': '请选择执行人',
  'taskform.owner2.opt1': '黄丽丽',
  'taskform.owner2.opt2': '李大刀',
  'taskform.approver2.placeholder': '请选择责任人',
  'taskform.approver2.opt1': '王伟',
  'taskform.approver2.opt2': '李红军',
  'taskform.dateRange2.label': '提醒时间',
  'taskform.dateRange2.error': '请选择提醒时间',
  'repositoryform.type2.placeholder': '请选择任务类型',
  'repositoryform.type2.error': '请选择任务类型',
  'repositoryform.type2.opt1': '定时执行',
  'repositoryform.type2.opt2': '周期执行',
  'dashboard.analysis.totalsale.title': '总销售额',
  'dashboard.analysis.totalsale.tooltip.title': '指标说明',
  'dashboard.analysis.totalsale.yoy.first': '周同比',
  'dashboard.analysis.totalsale.yoy.second': '日同比',
  'dashboard.analysis.totalsale.avragedaily': '日均销售额',
  'dashboard.analysis.views.title': '访问量',
  'dashboard.analysis.views.tooltip.title': '指标说明',
  'dashboard.analysis.views.footer': '日访问量',
  'dashboard.analysis.payments.title': '支付笔数',
  'dashboard.analysis.payments.tooltip.title': '指标说明',
  'dashboard.analysis.payments.footer': '转化率',
  'dashboard.analysis.effectiveness.title': '运营活动效果',
  'dashboard.analysis.effectiveness.tooltip.title': '指标说明',
  'dashboard.analysis.effectiveness.sameweek': '同周比',
  'dashboard.analysis.effectiveness.mom': '日环比',
  'dashboard.analysis.sales.title': '销售额',
  'dashboard.analysis.sales.bar.title': '销售额排行',
  'dashboard.analysis.sales.rank.title': '门店销售排行榜',
  'dashboard.analysis.date.today': '今日',
  'dashboard.analysis.date.thisweek': '本周',
  'dashboard.analysis.date.thismonth': '本月',
  'dashboard.analysis.date.thisyear': '本年',
  'dashboard.analysis.sales.ternd': '销售额趋势',
  'dashboard.analysis.sales.ranking': '门店销售排行榜',
  'dashboard.analysis.search.title': '线上热门搜索',
  'dashboard.analysis.contextmenu.menu1': '操作一',
  'dashboard.analysis.contextmenu.menu2': '操作二',
  'dashboard.analysis.search.users.title': '搜索用户数',
  'dashboard.analysis.search.users.tooltip.title': '指标说明',
  'dashboard.analysis.search.capita.title': '人均搜索次数',
  'dashboard.analysis.search.capita.tooltip.title': '指标说明',
  'dashboard.analysis.salescat.title': '销售额类别占比',
  'dashboard.analysis.salescat.allchannel': '全部渠道',
  'dashboard.analysis.salescat.online': '线上',
  'dashboard.analysis.salescat.store': '门店',
  'dashboard.analysis.salescat.h4': '销售额',
  'dashboard.searchData': '搜索关键词',
  'dashboard.searchTableColumns.index': '排名',
  'dashboard.searchTableColumns.keyword': '搜索关键词',
  'dashboard.searchTableColumns.count': '用户数',
  'dashboard.searchTableColumns.range': '周涨幅',
  'dashboard.data.month': '月',
  'dashboard.rankList.part1': '白鹭岛',
  'dashboard.rankList.part2': '号店',
  'dashboard.searchUserScale.alias1': '时间',
  'dashboard.searchUserScale.alias2': '用户数',
  'dashboard.sourceData.item1': '家用电器',
  'dashboard.sourceData.item2': '食用酒水',
  'dashboard.sourceData.item3': '个护健康',
  'dashboard.sourceData.item4': '服饰箱包',
  'dashboard.sourceData.item5': '母婴产品',
  'dashboard.sourceData.item6': '其他',
  'miniarea.scale.title': '时间',
  'workplace.user.description': '前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台',
  'workplace.user.numItems': '项目数',
  'workplace.user.ranking': '团队内排名',
  'workplace.user.visit': '项目访问',
  'workplace.projects.title': '进行中的项目',
  'workplace.projects.allitems': '全部项目',
  'workplace.dynamic.title': '动态',
  'workplace.dynamic.in': '在',
  'workplace.quickstart.title': '快速开始 / 便捷导航',
  'workplace.quickstart.opt1': '操作一',
  'workplace.quickstart.opt2': '操作二',
  'workplace.quickstart.opt3': '操作三',
  'workplace.quickstart.opt4': '操作四',
  'workplace.quickstart.opt5': '操作五',
  'workplace.quickstart.opt6': '操作六',
  'workplace.quickstart.addto': '添加',
  'workplace.index.title': 'XX 指数',
  'workplace.team.title': '团队',
  'workplace.radar.personal': '个人',
  'workplace.radar.team': '团队',
  'workplace.radar.departmant': '部门',
  'stepform.content': '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。',
  'stepform.step1': '填写转账信息',
  'stepform.step2': '确认转账信息',
  'stepform.step3': '完成',
  'stepform1.payment.account': '付款账户',
  'stepform1.payment.account.error': '付款账户必须填写',
  'stepform1.receiver': '收款账户',
  'stepform1.method.alipay': '支付宝',
  'stepform1.method.wechat': '微信',
  'stepform1.receiver.error': '收款账户必须填写',
  'stepform1.payee.name': '收款人姓名',
  'stepform1.payee.name.error': '收款人名称必须核对',
  'stepform1.amount': '转账金额',
  'stepform1.amount.error': '转账金额必须填写',
  'stepform1.nextstep': '下一步',
  'stepform1.explanation': '说明',
  'stepform1.explanation.title': '转账到支付宝账户',
  'stepform1.explanation.body': '如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。',
  'stepform1.explanation2.title': '转账到银行卡',
  'stepform1.explanation2.body': '如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。',
  'stepform2.alert.message': '确认转账后，资金将直接打入对方账户，无法退回。',
  'stepform2.payment.account': '付款账户',
  'stepform2.receiver': '收款账户',
  'stepform2.payee.name': '收款人姓名',
  'stepform2.amount': '转账金额',
  'stepform2.password': '支付密码',
  'stepform2.password.error': '请输入支付密码',
  'stepform2.submit': '提交',
  'stepform2.previous': '上一步',
  'stepform3.result.title': '操作成功',
  'stepform3.result.subtitle': '预计两小时内到账',
  'stepform3.account': '付款账户：',
  'stepform3.receiver': '收款账户：',
  'stepform3.payee.name': '收款人姓名：',
  'stepform3.payee.name.value': '辉夜',
  'stepform3.amount': '转账金额：',
  'stepform3.currency': '元',
  'stepform3.finish': '再转一笔',
  'stepform3.toOrderList': '查看账单',
  'tablelist.Rule number': '规则编号',
  'tablelist.status of use': '使用状态',
  'tablelist.please choose': '请选择',
  'tablelist.All': '全部',
  'tablelist.shut down': '关闭',
  'tablelist.Running': '运行中',
  'tablelist.Calls': '调用次数',
  'tablelist.Updated': '更新日期',
  'tablelist.Please enter the update date': '请输入更新日期',
  'tablelist.Inquire': '查询',
  'tablelist.Reset': '重置',
  'tablelist.Collapse': '收起',
  'tablelist.Unfold': '展开',
  'tablelist.New': '新建',
  'tablelist.Open': '开启',
  'tablelist.delete': '删除',
  'tablelist.locking': '锁定',
  'tablelist.Bulk operations': '批量操作 ',
  'tablelist.edit': '编辑',
  'tablelist.More ': '更多 ',
  'tablelist.Details': '详情',
  'tablelist.Disable': '禁用',
  'basiclist.My to-do': '我的待办',
  'basiclist.Tasks': '个任务',
  'basiclist.Average': '本周任务平均处理时间',
  'basiclist.minute': '分钟',
  'basiclist.TasksWeek': '本周完成任务数',
  'basiclist.Pc': '个',
  'basiclist.Standard list': '标准列表',
  'basiclist.All': '全部',
  'basiclist.processing': '进行中',
  'basiclist.Waiting': '等待中',
  'basiclist.Add to': '添加',
  'basiclist.edit': '编辑',
  'basiclist.delete': '删除',
  'basiclist.More': '更多',
  'basiclist.Starting time': '开始时间',
  'tablelistview.Rule number': '规则编号',
  'tablelistview.status of use': '使用状态',
  'tablelistview.please choose': '请选择',
  'tablelistview.All': '全部',
  'tablelistview.shut down': '关闭',
  'tablelistview.Running': '运行中',
  'tablelistview.Calls': '调用次数',
  'tablelistview.Updated': '更新日期',
  'tablelistview.Please enter the update date': '请输入更新日期',
  'tablelistview.Inquire': '查询',
  'tablelistview.Reset': '重置',
  'tablelistview.Collapse': '收起',
  'tablelistview.Unfold': '展开',
  'tablelistview.New': '新建',
  'tablelistview.Open': '开启',
  'tablelistview.delete': '删除',
  'tablelistview.locking': '锁定',
  'tablelistview.Bulk operations': '批量操作 ',
  'tablelistview.Configuration': '配置',
  'tablelistview.Subscribe to alarm': '订阅报警',
  'tablelistview.Online': '已上线',
  'tablelistview.abnormal': '异常',
  'tablelistview.description': '描述',
  'tablelistview.Service calls': '服务调用次数',
  'tablelistview.Times': '次',
  'tablelistview.status': '状态',
  'tablelistview.Update time': '更新时间',
  'tablelistview.operating': '操作',
  'tablelistview.Subscriptionsuccessful': '订阅成功`)',
  'tablelistview.Subscriptionfailed': '订阅失败，规则已关闭`)',
  'table.render.alert.title': '总计',
  'table.render.alert.span': '已选择',
  'table.render.clear': '清空',
  'cardlist.header.content': '段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。',
  'cardlist.newBtn': '新增产品',
  'cardlist.dataSource.content': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
  'cardlist.tabList.tab1': '快速开始',
  'cardlist.tabList.tab2': '产品简介',
  'cardlist.tabList.tab3': '产品文档',
  'cardlist.testfun': '快速开始被点击！',
  'searchlayout.enterbutton': '搜索',
  'searchlayout.article': '文章',
  'searchlayout.project': '项目',
  'searchlayout.application': '应用',
  'search.article.catagory.Category': '所属类目',
  'search.article.catagory.Category 1': '类目一',
  'search.article.catagory.Category 2': '类目二',
  'search.article.catagory.Category 3': '类目三',
  'search.article.catagory.Category 4': '类目四',
  'search.article.catagory.Category 5': '类目五',
  'search.article.catagory.Category 6': '类目六',
  'search.article.catagory.Category 7': '类目七',
  'search.article.catagory.Category 8': '类目八',
  'search.article.catagory.Category 9': '类目九',
  'search.article.catagory.Category 10': '类目十',
  'search.article.Select onwer': '选择 onwer',
  'search.article.Just look at your own': '只看自己的',
  'search.article.Other options': '其它选项',
  'search.article.active user': '活跃用户',
  'search.article.Unlimited': '不限',
  'search.article.Li San': '李三',
  'search.article.Praise of': '好评度',
  'search.article.excellent': '优秀',
  'search.article.Design language': '设计语言',
  'search.article.Ant Financial': '蚂蚁金服',
  'search.article.load more': '加载更多',
  'search.article.Myself': '我自己',
  'search.article.Wu Jiahao': '吴家豪',
  'search.article.Zhou Xingxing': '周星星',
  'search.article.Zhao Liying': '赵丽颖',
  'search.article.Yao Ming': '姚明',
  'articlelistcontent.posted on': '发布在',
  'search.project.normal': '普通',
  'search.project.Wang Zhaojun': '王昭君',
  'search.project.Author': '作者',
  'search.aplication.download': '下载',
  'search.aplication.shareit': '分享',
  'cardinfo.activeUser': '活跃用户',
  'cardinfo.newUser': '新增用户',
  'basicprofile.refund application': '退款申请',
  'basicprofile.Pickup number': '取货单号',
  'basicprofile.status': '状态',
  'basicprofile.Picked up': '已取货',
  'basicprofile.Sales order number': '销售单号',
  'basicprofile.Child order': '子订单',
  'basicprofile.User Info': '用户信息',
  'basicprofile.username': '用户姓名',
  'basicprofile.Fu Xiaoxiao': '付小小',
  'basicprofile.contact number': '联系电话',
  'basicprofile.Commonly used express': '常用快递',
  'basicprofile.Rookie storage': '菜鸟仓储',
  'basicprofile.Pickup address': '取货地址',
  'basicprofile.address': '浙江省杭州市西湖区万塘路18号',
  'basicprofile.Remarks': '备注',
  'basicprofile.no': '无',
  'basicprofile.Returned goods': '退货商品',
  'basicprofile.Return progress': '退货进度',
  'basicprofile.Product Number': '商品编号',
  'basicprofile.product name': '商品名称',
  'basicprofile.barcode': '商品条码',
  'basicprofile.unit price': '单价',
  'basicprofile.Quantity / piece)': '数量（件）',
  'basicprofile.Amount': '金额',
  'basicprofile.Mineral water 550ml': '矿泉水 550ml',
  'basicprofile.Herbal tea 300ml': '凉茶 300ml',
  'basicprofile.Delicious potato chips': '好吃的薯片',
  'basicprofile.Especially delicious egg rolls': '特别好吃的蛋卷',
  'basicprofile.time': '时间',
  'basicprofile.Current progress': '当前进度',
  'basicprofile.Operator ID': '操作员ID',
  'basicprofile.time consuming': '耗时',
  'basicprofile.contact clients': '联系客户',
  'basicprofile.Pickup ID1234': '取货员 ID1234',
  'basicprofile.Pickup Departure': '取货员出发',
  'basicprofile.Pick up the order': '取货员接单',
  'basicprofile.Application approved': '申请审批通过',
  'basicprofile.system': '系统',
  'basicprofile.Initiate': '发起退货申请',
  'basicprofile.user': '用户',
  'basicprofile.processing': '进行中',
  'basicprofile.carry out': '完成',
  'basicprofile.failure': '失败',
  'advancedprofile.Number': '单号：234231029431',
  'advancedprofile.founder': '创建人',
  'advancedprofile.Qu Lili': '曲丽丽',
  'advancedprofile.Ordering Products': '订购产品',
  'advancedprofile.service': '服务',
  'advancedprofile.Creation time': '创建时间',
  'advancedprofile.Related documents': '关联单据',
  'advancedprofile.effective date': '生效日期',
  'advancedprofile.Remarks': '备注',
  'advancedprofile.confirm': '请于两个工作日内确认',
  'advancedprofile.operating': '操作',
  'advancedprofile.Main operation': '主操作',
  'advancedprofile.status': '状态',
  'advancedprofile.Pending': '待审批',
  'advancedprofile.order amount': '订单金额',
  'advancedprofile.Process progress': '流程进度',
  'advancedprofile.Create project': '创建项目',
  'advancedprofile.Departmental': '部门初审',
  'advancedprofile.Financial review': '财务复核',
  'advancedprofile.carry out': '完成',
  'advancedprofile.User Info': '用户信息',
  'advancedprofile.username': '用户姓名',
  'advancedprofile.Fu Xiaoxiao': '付晓晓',
  'advancedprofile.member card number': '会员卡号',
  'advancedprofile.ID card': '身份证',
  'advancedprofile.contact details': '联系方式',
  'advancedprofile.contact address': '联系地址',
  'advancedprofile.address': '浙江省杭州市西湖区黄姑山路工专路交叉路口',
  'advancedprofile.Information Group': '信息组',
  'advancedprofile.XX data': '某某数据',
  'advancedprofile.The data update time': '该数据更新时间',
  'advancedprofile.Multi-layer information group': '多层信息组',
  'advancedprofile.Group name': '组名称',
  'advancedprofile.principal': '负责人',
  'advancedprofile.Lin Dongdong': '林东东',
  'advancedprofile.Character code': '角色码',
  'advancedprofile.Department': '所属部门',
  'advancedprofile.Company-YY Department': '公司-YY部',
  'advancedprofile.expire date': '过期时间',
  'advancedprofile.description': '描述',
  'advancedprofile.description.content': '这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...',
  'advancedprofile.scientific name': '学名',
  'advancedprofile.Annual': '一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..',
  'advancedprofile.User call history in the past six months': '用户近半年来电记录',
  'advancedprofile.No data': '暂无数据',
  'advancedprofile.Details': '详情',
  'advancedprofile.rule': '规则',
  'advancedprofile.Operation log one': '操作日志一',
  'advancedprofile.Operation log two': '操作日志二',
  'advancedprofile.Operation log three': '操作日志三',
  'advancedprofile.Operation type': '操作类型',
  'advancedprofile.Operator': '操作人',
  'advancedprofile.Results of the': '执行结果',
  'advancedprofile.Operating time': '操作时间',
  'advancedprofile.Ordering relationship effective': '订购关系生效',
  'advancedprofile.Reason for failure': '不通过原因',
  'advancedprofile.Departmental Preliminary Examination': '部门初审',
  'advancedprofile.Zhou Maomao': '周毛毛',
  'advancedprofile.Submit Order': '提交订单',
  'advancedprofile.Great': '很棒',
  'advancedprofile.Create Order': '创建订单',
  'advancedprofile.Sweaty teeth': '汗牙牙',
  'advancedprofile.success': '成功',
  'advancedprofile.turn down': '驳回',
  'success.Back to list': '返回列表',
  'success.View project': '查看项目',
  'success.print': '打印',
  'success.project name': '项目名称',
  'success.ProjectID': '项目 ID',
  'success.principal': '负责人',
  'success.Who is Qu Lili?': '曲丽丽是谁？',
  'success.Effective': '生效时间',
  'success.Create project': '创建项目',
  'success.Qu Lili': '曲丽丽',
  'success.Departmental': '部门初审',
  'success.Zhou Maomao': '周毛毛',
  'success.Hurry': '催一下',
  'success.Financial review': '财务复核',
  'success.carry out': '完成',
  'success.title': '提交成功',
  'success.description': '提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。',
  'error.Back': '返回修改',
  'error.content': '您提交的内容有如下错误：',
  'error.frozen': '您的账户已被冻结',
  'error.Thawnow': '立即解冻 ',
  'error.eligible': '您的账户还不具备申请资格',
  'error.upgrade': '立即升级 ',
  'error.title': '提交失败 ',
  'error.description': '请核对并修改以下信息后，再重新提交。 ',
  '403.content': '抱歉，您无权访问此页面。',
  '403.Back': '回家',
  '404.content': '抱歉，您访问的页面不存在。',
  '500.content': '抱歉，服务器报告错误。',
  'accountcenter.bio': '海纳百川，有容乃大',
  'accountcenter.Interaction': '交互专家',
  'accountcenter.group': '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  'accountcenter.Province': '浙江省',
  'accountcenter.Hangzhou': '杭州市',
  'accountcenter.label': '标签',
  'accountcenter.team': '团队',
  'accountcenter.tag.thoughtful': '很有想法的',
  'accountcenter.tag.Focus': '专注设计',
  'accountcenter.tag.Spicy': '辣~',
  'accountcenter.tag.Longlegs': '大长腿',
  'accountcenter.tag.Chuanmeizi': '川妹子',
  'accountcenter.tag.Heinabaichuan': '海纳百川',
  'accountcenter.tab.Article': '文章(8)',
  'accountcenter.tab.Application': '应用(8)',
  'accountcenter.tab.Project': '项目(8)',
  'accountcenter.page.activeuser': '活跃用户',
  'accountcenter.page.Tenthousand': '万',
  'accountcenter.page.Newusers': '新增用户',
  'accountcenter.article.Design language': '设计语言',
  'accountcenter.article.Ant Financial': '蚂蚁金服',
  'accountcenter.article.load more': '加载更多',
  'accountsetting.nickname': '昵称',
  'accountsetting.yourselfname': '给自己起个名字',
  'accountsetting.e-mail': '电子邮件',
  'accountsetting.Encryption': '加密方式',
  'accountsetting.Connectionpassword': '连接密码',
  'accountsetting.loginpassword': '登录密码',
  'accountsetting.password': '密码',
  'accountsetting.submit': '提交',
  'accountsetting.save': '保存',
  'accountsetting.bio': '生化',
  'accountsetting.bio.placeholder': '你不是一个人。',
  'accountsetting.basicsettings': '基本设置',
  'accountsetting.SecuritySettings': '安全设置',
  'accountsetting.personalise': '个性化',
  'accountsetting.Accountbinding': '账户绑定',
  'accountsetting.Newmessagenotification': '新消息通知',
  'accountsetting.security.password': '账户密码',
  'accountsetting.security.passwordstrength': '当前密码强度',
  'accountsetting.security.Strong': '强',
  'accountsetting.security.modify': '修改',
  'accountsetting.security.Secret': '密保手机',
  'accountsetting.security.Phone': '已绑定手机',
  'accountsetting.security.SecurityQuestion': '密保问题',
  'accountsetting.security.issue': '未设置密保问题，密保问题可有效保护账户安全',
  'accountsetting.security.Setup': '设置',
  'accountsetting.security.Backup email': '备用邮箱',
  'accountsetting.security.Mailbox bound': '已绑定邮箱',
  'accountsetting.security.device': '设备',
  'accountsetting.security.Unbound MFA device': '未绑定 MFA 设备，绑定后，可以进行二次确认',
  'accountsetting.security.Binding': '绑定',
  'accountsetting.security.MFA equipment': 'MFA 设备',
  'accountsetting.security.info': '这是一条正常消息',
  'accountsetting.security.success': '这是成功的信息',
  'accountsetting.security.error': '这是一条错误消息',
  'accountsetting.security.warning': '这是警告信息',
  'accountsetting.custom.Stylecolor': '风格配色',
  'accountsetting.custom.Overall': '整体风格配色设置',
  'accountsetting.custom.Dark': '暗色',
  'accountsetting.custom.white': '白色',
  'accountsetting.custom.Themecolor': '主题色',
  'accountsetting.custom.Pagestyle': '页面风格配色： ',
  'settingconfig.dusk': '薄暮',
  'settingconfig.volcanic': '火山',
  'settingconfig.Sunset': '日暮',
  'settingconfig.Mingqing': '明青',
  'settingconfig.Aurora green': '极光绿',
  'settingconfig.Daybreak': '拂晓蓝（默认）',
  'settingconfig.Geek Blue': '极客蓝',
  'settingconfig.Sauce purple': '酱紫',
  'settingconfig.loading': '正在切换主题！',
  'avatarmodal.Modify avatar': '修改头像',
  'avatarmodal.Select Image': '选择图片',
  'avatarmodal.save': '保存',
  'avatarmodal.finish.success': '上传成功',
  'avatarmodal.ok.success': '上传头像成功',
  'iconselector.function': '测试 IconSelector 组件 v-model 功能',
  'iconselector.Change Icon-down': '改变 Icon-down',
  'iconselector.Change Icon-cloud-download': '改变 Icon-cloud-download',
  'iconselector.info': '选中图标',
  'icons.Directional icons': '方向性图标',
  'icons.Suggestive icon': '提示建议性图标',
  'icons.Editorial icon': '编辑类图标',
  'icons.Data icon': '数据类图标',
  'icons.Website universal icons': '网站通用图标',
  'icons.Brand and logo': '品牌和标识',
  'treelist.column.Member name': '成员名称',
  'treelist.column.Logins': '登录次数',
  'treelist.column.Times': '次',
  'treelist.column.status': '状态',
  'treelist.column.Update time': '更新时间',
  'treelist.column.operating': '操作',
  'treelist.add.message': '提示：你点了',
  'treelist.edit': '编辑',
  'treelist.More ': '更多 ',
  'treelist.Details': '详情',
  'treelist.Disable': '禁用',
  'treelist.delete': '删除',
  'treelist.customrender': '次',
  'tree.Add': '新增',
  'tree.merge': '合并',
  'tree.Remove': '移除',
  'tree.input.placeholder': '输入搜索文字',
  'orgmodal.success': '保存成功',
  'orgmodal.operating': '操作',
  'orgmodal.Parent ID': '父级ID',
  'orgmodal.institution name': '机构名称',
  'tableedit.Rule number': '规则编号',
  'tableedit.status of use': '使用状态',
  'tableedit.please choose': '请选择',
  'tableedit.All': '全部',
  'tableedit.shut down': '关闭',
  'tableedit.Running': '运行中',
  'tableedit.Calls': '调用次数',
  'tableedit.Updated': '更新日期',
  'tableedit.update date': '请输入更新日期',
  'tableedit.Inquire': '查询',
  'tableedit.Reset': '重置',
  'tableedit.Collapse': '收起',
  'tableedit.Unfold': '展开',
  'tableedit.New': '新建',
  'tableedit.delete': '删除',
  'tableedit.locking': '锁定',
  'tableedit.Bulk operations': '批量操作 ',
  'tableedit.save': '保存',
  'tableedit.give up': '真的放弃编辑吗?',
  'tableedit.cancel': '取消',
  'tableedit.modify': '修改',
  'tableedit.description': '描述',
  'tableedit.Service calls': '服务调用次数',
  'tableedit.Times': '次',
  'tableedit.status': '状态',
  'tableedit.Update time': '更新时间',
  'tableedit.operating': '操作',
  'tableedit.delconfirm.title': '警告',
  'tableedit.delconfirm.ok': '删除',
  'tableedit.delconfirm.cancel': '取消',
  'tableedit.delconfirm.content1': '真的要删除',
  'tableedit.delconfirm.content2': ' 吗?',
  'userlist.Role ID': '角色ID',
  'userlist.please enter': '请输入',
  'userlist.status': '状态',
  'userlist.please choose': '请选择',
  'userlist.All': '全部',
  'userlist.shut down': '关闭',
  'userlist.Running': '运行中',
  'userlist.Inquire': '查询',
  'userlist.Reset': '重置',
  'userlist.edit': '编辑',
  'userlist.More ': '更多 ',
  'userlist.Details': '详情',
  'userlist.Disable': '禁用',
  'userlist.delete': '删除',
  'userlist.operating': '操作',
  'userlist.Unique identifier': '唯一识别码',
  'userlist.Role Name': '角色名称',
  'userlist.Give a name': '起一个名字',
  'userlist.normal': '正常',
  'userlist.description': '描述',
  'userlist.Have permissions': '拥有权限',
  'userlist.select all': '全选',
  'userlist.columns.Unique identifier': '唯一识别码',
  'userlist.columns.Role Name': '角色名称',
  'userlist.columns.status': '状态',
  'userlist.columns.Creation time': '创建时间',
  'userlist.columns.operating': '操作',
  'userlist.status.Enable': '启用',
  'userlist.status.Disable': '禁用',
  'userlist.desciption': '列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。',
  'permission.Add': '新增',
  'permission.delete': '删除',
  'permission.modify': '修改',
  'permission.Inquire': '查询',
  'permission.Details': '详情',
  'permission.Enable': '启用',
  'permission.Disable': '禁用',
  'permission.Import': '导入',
  'permission.Export': '导出',
  'rolelist.Role ID': '角色ID',
  'rolelist.please enter': '请输入',
  'rolelist.status': '状态',
  'rolelist.please choose': '请选择',
  'rolelist.All': '全部',
  'rolelist.normal': '正常',
  'rolelist.Disable': '禁用',
  'rolelist.Inquire': '查询',
  'rolelist.Reset': '重置',
  'rolelist.edit': '编辑',
  'rolelist.More ': '更多 ',
  'rolelist.Details': '详情',
  'rolelist.delete': '删除',
  'rolelist.columns.Unique identifier': '唯一识别码',
  'rolelist.columns.Role Name': '角色名称',
  'rolelist.columns.status': '状态',
  'rolelist.columns.Creation time': '创建时间',
  'rolelist.columns.operating': '操作',
  'rolelist.description': '列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。',
  'rolemodal.title': '操作',
  'rolemodal.description': '这是一个描述。',
  'rolemodal.progress.title': '进行中',
  'rolemodal.wating.title': '等候',
  'rolemodal.success': '保存成功'
}

export default {
  ...components,
  ...locale
}
