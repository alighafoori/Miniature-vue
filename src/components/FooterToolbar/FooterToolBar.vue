<template>
  <div :class="prefixCls" :style="{ width: barWidth, transition: '0.3s all' }">
    <div class="first-col">
      <slot name="extra">{{ extra }}</slot>
    </div>
    <div class="second-col">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterToolBar',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-footer-toolbar'
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    siderWidth: {
      type: Number,
      default: undefined
    },
    extra: {
      type: [String, Object],
      default: ''
    }
  },
  computed: {
    barWidth () {
      return this.isMobile ? undefined : `calc(100% - ${this.collapsed ? 80 : this.siderWidth || 256}px)`
    }
  }
}
</script>

<style lang="less" scoped>
.first-col{
float: left
}
[dir='rtl'] .first-col{
  float: right
}
.second-col{
float: right
}
[dir='rtl'] .second-col{
  float: left
}
</style>
