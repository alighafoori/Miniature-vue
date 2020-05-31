<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <icon-selector v-model="currentSelectedIcon" @change="handleIconChange"/>

    <a-divider />
    <p>{{ $t('iconselector.function') }}</p>
    <a-button @click="changeIcon('down')">{{ $t('iconselector.Change Icon-down') }}</a-button>
    <a-divider type="vertical" />
    <a-button @click="changeIcon('cloud-download')">{{ $t('iconselector.Change Icon-cloud-download') }}</a-button>
  </a-card>
</template>

<script>
import IconSelector from '@/components/IconSelector'
import { i18nRender } from '@/locales'
export default {
  name: 'IconSelectorView',
  components: {
    IconSelector
  },
  data () {
    return {
      currentSelectedIcon: 'pause-circle'
    }
  },
  methods: {
    handleIconChange (icon) {
      console.log('change Icon', icon)
      this.$message.info(<span>{i18nRender('iconselector.info')} <code>{icon}</code></span>)
    },
    changeIcon (type) {
      this.currentSelectedIcon = type
    }
  }
}
</script>
