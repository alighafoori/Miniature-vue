<template>
  <a-result
    :isSuccess="true"
    :content="false"
    :title="email"
    :sub-title="description">

    <template #extra>
      <a-button size="large" type="primary">{{ $t('RegisterResult.View mailbox') }}</a-button>
      <a-button size="large" style="margin-left: 8px" @click="goHomeHandle">{{ $t('RegisterResult.Back to top') }}</a-button>
    </template>

  </a-result>
</template>

<script>
import { i18nRender } from '../../locales'
export default {
  name: 'RegisterResult',
  data () {
    return {
      form: {}
    }
  },
  computed: {
    description () {
      return i18nRender('RegisterResult.js.description')
    },
    email () {
      const v = this.form && this.form.email || 'xxx'
      return `${i18nRender('RegisterResult.js.your account')}：${v} ${i18nRender('RegisterResult.js.successfully registered')}`
    }
  },
  created () {
    this.form = this.$route.params
  },
  methods: {
    goHomeHandle () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>

</style>
