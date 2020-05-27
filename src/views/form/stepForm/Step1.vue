<template>
  <div>
    <a-form :form="form" style="max-width: 500px; margin: 40px auto 0;">
      <a-form-item
        :label="$t('stepform1.payment.account')"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <a-select
          placeholder="ant-design@alipay.com"
          v-decorator="['paymentUser', { rules: [{required: true, message: $t('stepform1.payment.account.error') }] }]">
          <a-select-option value="1">ant-design@alipay.com</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label="$t('stepform1.receiver')"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <a-input-group
          style="display: inline-block; vertical-align: middle"
          :compact="true"
        >
          <a-select defaultValue="alipay" style="width: 100px">
            <a-select-option value="alipay">{{ $t('stepform1.method.alipay') }}</a-select-option>
            <a-select-option value="wexinpay">{{ $t('stepform1.method.wechat') }}</a-select-option>
          </a-select>
          <a-input
            :style="{width: 'calc(100% - 100px)'}"
            v-decorator="['payType', { initialValue: 'test@example.com', rules: [{required: true, message: $t('stepform1.receiver.error')}]}]"
          />
        </a-input-group>
      </a-form-item>
      <a-form-item
        :label="$t('stepform1.payee.name')"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <a-input v-decorator="['name', { initialValue: 'Alex', rules: [{required: true, message: $t('stepform1.payee.name.error')}] }]"/>
      </a-form-item>
      <a-form-item
        :label="$t('stepform1.amount')"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <a-input prefix="￥" v-decorator="['momey', { initialValue: '5000', rules: [{required: true, message: $t('stepform1.amount.error')}] }]"/>
      </a-form-item>
      <a-form-item :wrapperCol="{span: 19, offset: 5}">
        <a-button type="primary" @click="nextStep">{{ $t('stepform1.nextstep') }}</a-button>
      </a-form-item>
    </a-form>
    <a-divider />
    <div class="step-form-style-desc">
      <h3>{{ $t('stepform1.explanation') }}</h3>
      <h4>{{ $t('stepform1.explanation.title') }}</h4>
      <p>{{ $t('stepform1.explanation.body') }}</p>
      <h4>{{ $t('stepform1.explanation2.title') }}</h4>
      <p>{{ $t('stepform1.explanation2.body') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step1',
  data () {
    return {
      labelCol: { lg: { span: 5 }, sm: { span: 5 } },
      wrapperCol: { lg: { span: 19 }, sm: { span: 19 } },
      form: this.$form.createForm(this)
    }
  },
  methods: {
    nextStep () {
      const { form: { validateFields } } = this
      validateFields((err, values) => {
        if (!err) {
          this.$emit('nextStep')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.step-form-style-desc {
  padding: 0 56px;
  color: rgba(0,0,0,.45);

  h3 {
    margin: 0 0 12px;
    color: rgba(0,0,0,.45);
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}
</style>
