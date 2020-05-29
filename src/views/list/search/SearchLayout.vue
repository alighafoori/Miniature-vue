<template>
  <page-header-wrapper :tab-list="tabList" :tab-active-key="tabActiveKey" :tab-change="handleTabChange">
    <template v-slot:content>
      <div class="ant-pro-page-header-search">
        <a-input-search size="large" style="width: 80%; max-width: 522px;">
          <template v-slot:enterButton>
            {{ $t('searchlayout.enterbutton') }}
          </template>
        </a-input-search>
      </div>
    </template>
    <router-view />
  </page-header-wrapper>
</template>

<script>
import { i18nRender } from '@/locales'
export default {
  name: 'SearchLayout',
  data () {
    return {
      tabActiveKey: '1',
      search: true
    }
  },
  methods: {
    handleTabChange (key) {
      this.tabActiveKey = key
      switch (key) {
        case '1':
          this.$router.push('/list/search/article')
          break
        case '2':
          this.$router.push('/list/search/project')
          break
        case '3':
          this.$router.push('/list/search/application')
          break
        default:
          this.$router.push('/workplace')
      }
    }
  },
  computed: {
    tabList () {
      return [
        { key: '1', tab: 'searchlayout.article' },
        { key: '2', tab: 'searchlayout.project' },
        { key: '3', tab: 'searchlayout.application' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-page-header-search {
  text-align: center;
  margin-bottom: 16px;
}
</style>
