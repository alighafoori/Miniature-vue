import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 5701

const zhServerList = (options) => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '这是一段描述',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}
const faServerList = (options) => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'شماره ' + tmpKey,
      description: 'توضیحات',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}
const enServerList = (options) => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: 'description',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

const zhProjects = () => {
  return builder({
    'data': [{
      id: 1,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      title: 'Alipay',
      description: '那是一种内在的东西， 他们到达不了，也无法触及的',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      time: '9小时前',
      group: '科学搬砖组'
    },
    {
      id: 2,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      title: 'Angular',
      description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      time: '9小时前',
      group: '科学搬砖组'
    },
    {
      id: 3,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      title: 'Ant Design',
      description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      time: '9小时前',
      group: '科学搬砖组'
    },
    {
      id: 4,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      title: 'Ant Design Pro',
      description: '那时候我只会想自己想要什么，从不想自己拥有什么',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      time: '9小时前',
      group: '科学搬砖组'
    },
    {
      id: 5,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      title: 'Bootstrap',
      description: '凛冬将至',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      time: '9小时前',
      group: '科学搬砖组'
    },
    {
      id: 6,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      title: 'Vue',
      description: '生命就像一盒巧克力，结果往往出人意料',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      time: '9小时前',
      group: '科学搬砖组'
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 6,
    'totalCount': 57
  })
}

const enProjects = () => {
  return builder({
    'data': [{
      id: 1,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      title: 'Alipay',
      description: 'It ’s an inner thing, they ca n’t reach it, they ca n’t touch it.',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      'time': 'a month ago',
      'group': 'Scientific group'
    },
    {
      id: 2,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      title: 'Angular',
      description: 'Hope is a good thing, maybe the best, good things will not die',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      'time': 'a month ago',
      'group': 'Scientific group'
    },
    {
      id: 3,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      title: 'Ant Design',
      description: 'There are so many taverns in the town, but she just walked into my tavern',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      'time': 'a month ago',
      'group': 'Scientific group'
    },
    {
      id: 4,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      title: 'Ant Design Pro',
      description: 'At that time, I only wanted to think about what I wanted and never wanted to own',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      'time': 'a month ago',
      'group': 'Scientific group'
    },
    {
      id: 5,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      title: 'Bootstrap',
      description: 'Winter is coming',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      'time': 'a month ago',
      'group': 'Scientific group'
    },
    {
      id: 6,
      cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      title: 'Vue',
      description: 'Life is like a box of chocolates, the results are often unexpected',
      status: 1,
      updatedAt: '2018-07-26 00:00:00',
      'time': 'a month ago',
      'group': 'Scientific group'
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 6,
    'totalCount': 57
  })
}

const faProjects = () => {
  return builder({
    'data': [
      {
        'id': 1,
        'cover': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        'title': 'Alipay',
        'description': 'این یک چیز داخلی است ، آنها به آن نمی رسند ، و آن را لمس نمی کنند.',
        'status': 1,
        'updatedAt': '۲۰۱۸/۷/۲۶ ۰۳:۳۰',
        'time': '9 ساعت پیش',
        'group': 'گروه متحرک آجری علمی'
      },
      {
        'id': 2,
        'cover': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
        'title': 'Angular',
        'description': 'امید چیز خوبی است ، شاید بهترین ها ، چیزهای خوب بمیرند',
        'status': 1,
        'updatedAt': '۲۰۱۸/۷/۲۶ ۰۳:۳۰',
        'time': '9 ساعت پیش',
        'group': 'گروه متحرک آجری علمی'
      },
      {
        'id': 3,
        'cover': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
        'title': 'Ant Design',
        'description': 'در این شهر تعداد زیادی از میخانه ها وجود دارد ، اما او فقط وارد میخانه من شد',
        'status': 1,
        'updatedAt': '۲۰۱۸/۷/۲۶ ۰۳:۳۰',
        'time': '9 ساعت پیش',
        'group': 'گروه متحرک آجری علمی'
      },
      {
        'id': 4,
        'cover': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        'title': 'Ant Design Pro',
        'description': 'در آن زمان فقط می خواستم به آنچه می خواستم فکر کنم و هرگز نمی خواستم مالک آن باشم',
        'status': 1,
        'updatedAt': '۲۰۱۸/۷/۲۶ ۰۳:۳۰',
        'time': '9 ساعت پیش',
        'group': 'گروه متحرک آجری علمی'
      },
      {
        'id': 5,
        'cover': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
        'title': 'Bootstrap',
        'description': 'زمستان در راه است',
        'status': 1,
        'updatedAt': '۲۰۱۸/۷/۲۶ ۰۳:۳۰',
        'time': '9 ساعت پیش',
        'group': 'گروه متحرک آجری علمی'
      },
      {
        'id': 6,
        'cover': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
        'title': 'Vue',
        'description': 'زندگی مانند جعبه شکلات است ، نتایج اغلب غیر منتظره است',
        'status': 1,
        'updatedAt': '۲۰۱۸/۷/۲۶ ۰۳:۳۰',
        'time': '9 ساعت پیش',
        'group': 'گروه متحرک آجری علمی'
      }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 6,
    'totalCount': 57
  })
}

const zhActivity = () => {
  return builder([{
    id: 1,
    user: {
      nickname: '@name',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: '白鹭酱油开发组',
      action: '更新',
      event: '番组计划'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: '蓝莓酱',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
    },
    project: {
      name: '白鹭酱油开发组',
      action: '更新',
      event: '番组计划'
    },
    time: '2018-08-23 09:35:37'
  },
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: '@image(64x64)'
    },
    project: {
      name: '白鹭酱油开发组',
      action: '创建',
      event: '番组计划'
    },
    time: '2017-05-27 00:00:00'
  },
  {
    id: 1,
    user: {
      nickname: '曲丽丽',
      avatar: '@image(64x64)'
    },
    project: {
      name: '高逼格设计天团',
      action: '更新',
      event: '六月迭代'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: '@image(64x64)'
    },
    project: {
      name: '高逼格设计天团',
      action: 'created',
      event: '六月迭代'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: '曲丽丽',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: '高逼格设计天团',
      action: 'created',
      event: '六月迭代'
    },
    time: '2018-08-23 14:47:00'
  }
  ])
}

const faActivity = () => {
  return builder([{
    id: 1,
    user: {
      nickname: '@name',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: 'گروه توسعه سس سویا Egret',
      action: 'به روز رسانی',
      event: 'برنامه گروه فن'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: 'مربای زغال اخته',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
    },
    project: {
      name: 'گروه توسعه سس سویا Egret',
      action: 'به روز رسانی',
      event: 'برنامه گروه فن'
    },
    time: '2018-08-23 09:35:37'
  },
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: '@image(64x64)'
    },
    project: {
      name: 'گروه توسعه سس سویا Egret',
      action: 'ایجاد کردن',
      event: 'برنامه گروه فن'
    },
    time: '2017-05-27 00:00:00'
  },
  {
    id: 1,
    user: {
      nickname: 'کو لیلی',
      avatar: '@image(64x64)'
    },
    project: {
      name: 'مأموریت آسمان طراحی نیرو بالا',
      action: 'به روز رسانی',
      event: 'تکرار ژوئن'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: '@image(64x64)'
    },
    project: {
      name: 'مأموریت آسمان طراحی نیرو بالا',
      action: 'created',
      event: 'تکرار ژوئن'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: 'کو لیلی',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: 'مأموریت آسمان طراحی نیرو بالا',
      action: 'created',
      event: 'تکرار ژوئن'
    },
    time: '2018-08-23 14:47:00'
  }
  ])
}

const enActivity = () => {
  return builder([{
    id: 1,
    user: {
      nickname: '@name',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: 'Egret Soy Sauce Development Group',
      action: 'Update',
      event: 'Fan group plan'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: 'blueberry jam',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
    },
    project: {
      name: 'Egret Soy Sauce Development Group',
      action: 'Update',
      event: 'Fan group plan'
    },
    time: '2018-08-23 09:35:37'
  },
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: '@image(64x64)'
    },
    project: {
      name: 'Egret Soy Sauce Development Group',
      action: 'create',
      event: 'Fan group plan'
    },
    time: '2017-05-27 00:00:00'
  },
  {
    id: 1,
    user: {
      nickname: 'Qu Lili',
      avatar: '@image(64x64)'
    },
    project: {
      name: 'High Force Design Sky Mission',
      action: 'Update',
      event: 'June iteration'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: '@image(64x64)'
    },
    project: {
      name: 'High Force Design Sky Mission',
      action: 'created',
      event: 'June iteration'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: 'Qu Lili',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: 'High Force Design Sky Mission',
      action: 'created',
      event: 'June iteration'
    },
    time: '2018-08-23 14:47:00'
  }
  ])
}

const zhTeams = () => {
  return builder([{
    id: 1,
    name: '科学搬砖组',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
  },
  {
    id: 2,
    name: '程序员日常',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
  },
  {
    id: 1,
    name: '设计天团',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
  },
  {
    id: 1,
    name: '中二少女团',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
  },
  {
    id: 1,
    name: '骗你学计算机',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
  }
  ])
}

const enTeams = () => {
  return builder([{
    id: 1,
    name: 'Scientific brick moving group',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
  },
  {
    id: 2,
    name: 'Programmer daily',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
  },
  {
    id: 1,
    name: 'Design Team',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
  },
  {
    id: 1,
    name: 'S2 Girls Group',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
  },
  {
    id: 1,
    name: 'Trick you to learn computer',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
  }
  ])
}

const faTeams = () => {
  return builder([{
    id: 1,
    name: 'گروه متحرک آجری علمی',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
  },
  {
    id: 2,
    name: 'برنامه نویس روزانه',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
  },
  {
    id: 1,
    name: 'تیم طراحی',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
  },
  {
    id: 1,
    name: 'گروه دختران S2',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
  },
  {
    id: 1,
    name: 'شما را برای یادگیری کامپیوتر فریب دهید',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
  }
  ])
}

const zhRadar = () => {
  return builder([{
    item: '引用',
    '个人': 70,
    '团队': 30,
    '部门': 40
  },
  {
    item: '口碑',
    '个人': 60,
    '团队': 70,
    '部门': 40
  },
  {
    item: '产量',
    '个人': 50,
    '团队': 60,
    '部门': 40
  },
  {
    item: '贡献',
    '个人': 40,
    '团队': 50,
    '部门': 40
  },
  {
    item: '热度',
    '个人': 60,
    '团队': 70,
    '部门': 40
  },
  {
    item: '引用',
    '个人': 70,
    '团队': 50,
    '部门': 40
  }
  ])
}

const enRadar = () => {
  return builder([{
    item: 'Quote',
    'personal': 70,
    'team': 30,
    'department': 40
  },
  {
    item: 'Word of mouth',
    'personal': 60,
    'team': 70,
    'department': 40
  },
  {
    item: 'Yield',
    'personal': 50,
    'team': 60,
    'department': 40
  },
  {
    item: 'contribution',
    'personal': 40,
    'team': 50,
    'department': 40
  },
  {
    item: 'heat',
    'personal': 60,
    'team': 70,
    'department': 40
  },
  {
    item: 'Quote',
    'personal': 70,
    'team': 50,
    'department': 40
  }
  ])
}

const faRadar = () => {
  return builder([{
    item: 'نقل قول',
    'شخصی': 70,
    'تیم': 30,
    'دپارتمان': 40
  },
  {
    item: 'کلمه دهان',
    'شخصی': 60,
    'تیم': 70,
    'دپارتمان': 40
  },
  {
    item: 'بازده',
    'شخصی': 50,
    'تیم': 60,
    'دپارتمان': 40
  },
  {
    item: 'مشارکت',
    'شخصی': 40,
    'تیم': 50,
    'دپارتمان': 40
  },
  {
    item: 'حرارت',
    'شخصی': 60,
    'تیم': 70,
    'دپارتمان': 40
  },
  {
    item: 'نقل قول',
    'شخصی': 70,
    'تیم': 50,
    'دپارتمان': 40
  }
  ])
}

Mock.mock(/\/zh\/service/, 'get', zhServerList)
Mock.mock(/\/fa\/service/, 'get', faServerList)
Mock.mock(/\/en\/service/, 'get', enServerList)
Mock.mock(/\/zh\/list\/search\/projects/, 'get', zhProjects)
Mock.mock(/\/fa\/list\/search\/projects/, 'get', faProjects)
Mock.mock(/\/en\/list\/search\/projects/, 'get', enProjects)
Mock.mock(/\/zh\/workplace\/activity/, 'get', zhActivity)
Mock.mock(/\/fa\/workplace\/activity/, 'get', faActivity)
Mock.mock(/\/en\/workplace\/activity/, 'get', enActivity)
Mock.mock(/\/zh\/workplace\/teams/, 'get', zhTeams)
Mock.mock(/\/fa\/workplace\/teams/, 'get', faTeams)
Mock.mock(/\/en\/workplace\/teams/, 'get', enTeams)
Mock.mock(/\/zh\/workplace\/radar/, 'get', zhRadar)
Mock.mock(/\/fa\/workplace\/radar/, 'get', faRadar)
Mock.mock(/\/en\/workplace\/radar/, 'get', enRadar)
