<template>
  <a-result status="500" title="500" :sub-title="$t('500.content')">
    <template #extra>
      <a-button type="primary" @click="toHome">
        {{ $t('403.Back') }}
      </a-button>
    </template>
  </a-result>
</template>

<script>
  export default {
    name: 'Exception500',
    methods: {
      toHome () {
        this.$router.push({ path: '/' })
      }
    }
  }
</script>
