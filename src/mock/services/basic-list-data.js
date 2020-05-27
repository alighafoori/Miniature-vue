import Mock from 'mockjs2'
import { builder } from '../util'

const faData = []
faData.push({
    title: 'Alipay',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    description: 'این یک چیز داخلی است ، آنها به آن نمی رسند ، و آن را لمس نمی کنند.',
    owner: 'فو شیائوکسیو',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 90
    }
  })
  faData.push({
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: 'امید چیز خوبی است ، شاید بهترین ها ، چیزهای خوب بمیرند',
    owner: 'کو لیلی',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 54
    }
  })
  faData.push({
    title: 'Ant Design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    description: 'زندگی مانند جعبه شکلات است ، نتایج اغلب غیر منتظره است',
    owner: 'لین دونگ دونگ',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 66
    }
  })
  faData.push({
    title: 'Ant Design Pro',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    description: 'در این شهر تعداد زیادی از میخانه ها وجود دارد ، اما او فقط وارد میخانه من شد',
    owner: 'ژو زینگکسینگ',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 30
    }
  })
  faData.push({
    title: 'Bootstrap',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    description: 'در آن زمان فقط می خواستم به آنچه می خواستم فکر کنم و هرگز نمی خواستم مالک آن باشم',
    owner: 'وو جیهائو',
    startAt: '2018-07-26 22:44',
    progress: {
      status: 'exception',
      value: 100
    }
  })

  const zhData = []
  zhData.push({
    title: 'Alipay',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    description: '那是一种内在的东西， 他们到达不了，也无法触及的',
    owner: '付晓晓',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 90
    }
  })
  zhData.push({
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    owner: '曲丽丽',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 54
    }
  })
  zhData.push({
    title: 'Ant Design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    description: '生命就像一盒巧克力，结果往往出人意料',
    owner: '林东东',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 66
    }
  })
  zhData.push({
    title: 'Ant Design Pro',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    owner: '周星星',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 30
    }
  })
  zhData.push({
    title: 'Bootstrap',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    owner: '吴加好',
    startAt: '2018-07-26 22:44',
    progress: {
      status: 'exception',
      value: 100
    }
  })

  const enData = []
  enData.push({
    title: 'Alipay',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    description: 'It ’s an inner thing, they ca n’t reach it, they ca n’t touch it.',
    owner: 'Fu Xiaoxiao',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 90
    }
  })
  enData.push({
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: 'Hope is a good thing, maybe the best, good things will not die',
    owner: 'Qu Lili',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 54
    }
  })
  enData.push({
    title: 'Ant Design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    description: 'Life is like a box of chocolates, the results are often unexpected',
    owner: 'Lin Dongdong',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 66
    }
  })
  enData.push({
    title: 'Ant Design Pro',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    description: 'There are so many taverns in the town, but she just walked into my tavern',
    owner: 'Zhou Xingxing',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 30
    }
  })
  enData.push({
    title: 'Bootstrap',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    description: 'At that time, I only wanted to think about what I wanted and never wanted to own',
    owner: 'Wu Jiahao',
    startAt: '2018-07-26 22:44',
    progress: {
      status: 'exception',
      value: 100
    }
  })

  const zhDataFunc = () => {
    return builder({
        data: zhData
    })
  }

  const faDataFunc = () => {
    return builder({
        data: faData
    })
  }

  const enDataFunc = () => {
    return builder({
        data: enData
    })
  }

  Mock.mock(/\/api\/zh\/basiclistdata/, 'get', zhDataFunc)
  Mock.mock(/\/api\/fa\/basiclistdata/, 'get', faDataFunc)
  Mock.mock(/\/api\/en\/basiclistdata/, 'get', enDataFunc)
