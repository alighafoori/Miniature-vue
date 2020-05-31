<template>
  <a-list
    itemLayout="horizontal"
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
      <a-list-item-meta>
        <a slot="title">{{ item.title }}</a>
        <span slot="description">
          <span class="security-list-description">{{ item.description }}</span>
          <span v-if="item.value"> : </span>
          <span class="security-list-value">{{ item.value }}</span>
        </span>
      </a-list-item-meta>
      <template v-if="item.actions">
        <a slot="actions" @click="item.actions.callback">{{ item.actions.title }}</a>
      </template>

    </a-list-item>
  </a-list>
</template>

<script>
import { i18nRender } from '@/locales'
export default {
  computed: {
    data () {
      return [
        { title: i18nRender('accountsetting.security.password'), description: i18nRender('accountsetting.security.passwordstrength'), value: i18nRender('accountsetting.security.Strong'), actions: { title: i18nRender('accountsetting.security.modify'), callback: () => { this.$message.info(i18nRender('accountsetting.security.info')) } } },
        { title: i18nRender('accountsetting.security.Secret'), description: i18nRender('accountsetting.security.Phone'), value: '138****8293', actions: { title: i18nRender('accountsetting.security.modify'), callback: () => { this.$message.success(i18nRender('accountsetting.security.success')) } } },
        { title: i18nRender('accountsetting.security.SecurityQuestion'), description: i18nRender('accountsetting.security.issue'), value: '', actions: { title: i18nRender('accountsetting.security.Setup'), callback: () => { this.$message.error(i18nRender('accountsetting.security.error')) } } },
        { title: i18nRender('accountsetting.security.Backup email'), description: i18nRender('accountsetting.security.Mailbox bound'), value: 'ant***sign.com', actions: { title: i18nRender('accountsetting.security.modify'), callback: () => { this.$message.warning(i18nRender('accountsetting.security.warning')) } } },
        { title: i18nRender('accountsetting.security.MFA equipment'), description: i18nRender('accountsetting.security.Unbound MFA device'), value: '', actions: { title: i18nRender('accountsetting.security.Binding'), callback: () => { this.$message.info(i18nRender('accountsetting.security.info')) } } }
      ]
    }
  }
}
</script>

<style scoped>

</style>
