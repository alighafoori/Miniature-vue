<template>
  <a-result status="403" title="403" :sub-title="$t('403.content')">
    <template #extra>
      <a-button type="primary" @click="toHome">
        {{ $t('403.Back') }}
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception403',
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
