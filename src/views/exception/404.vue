<template>
  <a-result status="404" title="404" :sub-title="$t('404.content')">
    <template #extra>
      <a-button type="primary" @click="toHome">
        {{ $t('403.Back') }}
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception404',
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
