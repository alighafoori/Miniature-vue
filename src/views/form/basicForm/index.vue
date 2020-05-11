<template>
  <page-header-wrapper :content="$t('basicform.header.content')">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          :label="$t('basicform.title.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            v-decorator="[
              'name',
              {rules: [{ required: true, message: $t('basicform.title.error') }]}
            ]"
            name="name"
            :placeholder="$t('basicform.title.placeholder')" />
        </a-form-item>
        <a-form-item
          :label="$t('basicform.startandend.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-range-picker
            name="buildTime"
            style="width: 100%"
            v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: $t('basicform.startandend.error') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :label="$t('basicform.goaldesc.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea
            rows="4"
            :placeholder="$t('basicform.goaldesc.placeholder')"
            v-decorator="[
              'description',
              {rules: [{ required: true, message: $t('basicform.goaldesc.error') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :label="$t('basicform.metrics.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea
            rows="4"
            :placeholder="$t('basicform.metrics.placeholder')"
            v-decorator="[
              'type',
              {rules: [{ required: true, message: $t('basicform.metrics.error') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :label="$t('basicform.client.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            :placeholder="$t('basicform.client.placeholder')"
            v-decorator="[
              'customer',
              {rules: [{ required: true, message: $t('basicform.client.error') }]}
            ]" />
        </a-form-item>
        <a-form-item
          :label="$t('basicform.reviewers.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          :required="false"
        >
          <a-input :placeholder="$t('basicform.reviewers.placeholder')" />
        </a-form-item>
        <a-form-item
          :label="$t('basicform.weights.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          :required="false"
        >
          <a-input-number :min="0" :max="100" />
          <span> %</span>
        </a-form-item>
        <a-form-item
          :label="$t('basicform.target.label')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          :required="false"
          :help="$t('basicform.target.help')"
        >
          <a-radio-group v-decorator="['target', { initialValue: 1 }]">
            <a-radio :value="1">{{ $t('basicform.target.public') }}</a-radio>
            <a-radio :value="2">{{ $t('basicform.target.partlypublic') }}</a-radio>
            <a-radio :value="3">{{ $t('basicform.target.private') }}</a-radio>
          </a-radio-group>
          <a-form-item v-show="form.getFieldValue('target') === 2">
            <a-select mode="multiple">
              <a-select-option value="4">{{ $t('basicform.target.colleagueone') }}</a-select-option>
              <a-select-option value="5">{{ $t('basicform.target.colleaguetwo') }}</a-select-option>
              <a-select-option value="6">{{ $t('basicform.target.colleague3') }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-form-item>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          style="text-align: center"
        >
          <a-button htmlType="submit" type="primary">{{ $t('basicform.submit.label') }}</a-button>
          <a-button class="save-btn">{{ $t('basicform.save.label') }}</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
// import { i18nRender } from '@/locales'
export default {
  name: 'BaseForm',
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
<style scoped>
.save-btn{
margin-left: 8px
}
[dir='rtl'] .save-btn{
  margin-right: 8px
}
</style>
