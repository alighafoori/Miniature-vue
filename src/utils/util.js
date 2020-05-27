import { currentLang } from '@/locales'

export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  switch (currentLang.isoCode) {
    case 'zh':
      return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
    case 'en':
      return hour < 9 ? 'Good morning' : hour <= 11 ? 'good morning' : hour <= 13 ? 'good afternoon' : hour < 20 ? 'good afternoon' : 'good evening'
    case 'fa':
      return hour < 9 ? 'صبح بخیر' : hour <= 11 ? 'صبح بخیر' : hour <= 13 ? 'عصر بخیر' : hour < 20 ? 'عصر بخیر' : 'عصر بخیر'
  }
}

export function welcome () {
  let arr = null
  switch (currentLang.isoCode) {
    case 'zh':
      arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
      break
    case 'en':
      arr = ['Take a break', 'What are you going to eat?', 'Do you want to hit a DOTA', 'I guess you might be tired']
      break
    case 'fa':
      arr = ['استراحت کن', 'چی می خواهی بخوری؟', 'آیا می خواهید DOTA بزنید', 'من حدس می زنم شما ممکن است خسته باشید']
      break
  }
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader (callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

export function isIE () {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}
