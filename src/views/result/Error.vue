<template>
  <a-card :bordered="false">
    <a-result status="error" :title="title" :sub-title="description">
      <template #extra>
        <a-button type="primary" >{{ $t('error.Back') }}</a-button>
      </template>
      <div class="desc">
        <div style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 16px">
          {{ $t('error.content') }}
        </div>
        <div style="margin-bottom: 16px">
          <a-icon type="close-circle-o" style="color: #f5222d; margin-right: 8px"/>
          {{ $t('error.frozen') }}
          <a style="margin-left: 16px">{{ $t('error.Thawnow') }} <a-icon type="right" /></a>
        </div>
        <div>
          <a-icon type="close-circle-o" style="color: #f5222d; margin-right: 8px"/>
          {{ $t('error.eligible') }}
          <a style="margin-left: 16px">{{ $t('error.upgrade') }} <a-icon type="right" /></a>
        </div>
      </div>
    </a-result>
  </a-card>
</template>

<script>
import { i18nRender } from '@/locales'

export default {
  name: 'Error',
  computed: {
    title () {
      return i18nRender('error.title')
    },
    description () {
      return i18nRender('error.description')
    }
  }
}
</script>
