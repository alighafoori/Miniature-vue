<template>
  <div>
    <a-form>
      <a-result :title="$t('stepform3.result.title')" :is-success="true" :sub-title="$t('stepform3.result.subtitle')" style="max-width: 560px; margin: 40px auto 0;">
        <div class="information">
          <a-row>
            <a-col :sm="8" :xs="24">{{ $t('stepform3.account') }}</a-col>
            <a-col :sm="16" :xs="24">ant-design@alipay.com</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">{{ $t('stepform3.receiver') }}</a-col>
            <a-col :sm="16" :xs="24">test@example.com</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">{{ $t('stepform3.payee.name') }}</a-col>
            <a-col :sm="16" :xs="24">{{ $t('stepform3.payee.name.value') }}</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">{{ $t('stepform3.amount') }}</a-col>
            <a-col :sm="16" :xs="24"><span class="money">500</span> {{ $t('stepform3.currency') }}</a-col>
          </a-row>
        </div>
        <template #extra>
          <a-button type="primary" @click="finish">{{ $t('stepform3.finish') }}</a-button>
          <a-button style="margin-left: 8px" @click="toOrderList">{{ $t('stepform3.toOrderList') }}</a-button>
        </template>
      </a-result>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Step3',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    },
    toOrderList () {
      this.$router.push('/list/table-list')
    }
  }
}
</script>
<style lang="less" scoped>
  .information {
    line-height: 22px;

    .ant-row:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  .money {
    font-family: "Helvetica Neue",sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 14px;
  }
</style>
