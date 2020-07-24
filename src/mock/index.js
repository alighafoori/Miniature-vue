import { isIE } from '@/utils/util'

// if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  if (isIE()) {
    console.error('[antd-pro] ERROR: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.')
  }
  // Use synchronous loading of dependencies
  // Prevent GetInfo in vuex from running earlier than mock, resulting in failure to return results from mock requests
  console.log('[antd-pro] mock mounting')
  const Mock = require('mockjs2')
  require('./services/auth')
  require('./services/user')
  require('./services/manage')
  require('./services/other')
  require('./services/tagCloud')
  require('./services/article')
  require('./services/basic-list-data')
  require('./services/chats')

  Mock.setup({
    timeout: 800 // setter delay time
  })
  console.log('[antd-pro] mock mounted')
// }
