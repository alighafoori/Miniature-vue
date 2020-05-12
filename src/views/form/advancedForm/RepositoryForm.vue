<template>
  <a-form @submit="handleSubmit" :form="form" class="form">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item :label="$t('advancedform.fieldLabels.name')">
          <a-input
            :placeholder="$t('repositoryform.name.placeholder')"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: $t('repositoryform.name.error'), whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.url')">
          <a-input
            addonBefore="http://"
            addonAfter=".com"
            :placeholder="$t('repositoryform.url.placeholder')"
            style="direction:ltr"
            v-decorator="[
              'url',
              {rules: [{ required: true, message: $t('repositoryform.url.error'), whitespace: true}, {validator: validate}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.owner')">
          <a-select :placeholder="$t('repositoryform.owner.placeholder')" v-decorator="[ 'owner', {rules: [{ required: true, message: $t('repositoryform.owner.error')}]} ]">
            <a-select-option :value="$t('repositoryform.owner.opt1')">{{ $t('repositoryform.owner.opt1') }}</a-select-option>
            <a-select-option :value="$t('repositoryform.owner.opt2')">{{ $t('repositoryform.owner.opt2') }}</a-select-option>
            <a-select-option :value="$t('repositoryform.owner.opt3')">{{ $t('repositoryform.owner.opt3') }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.approver')">
          <a-select :placeholder="$t('repositoryform.approver.placeholder')" v-decorator="[ 'approver', {rules: [{ required: true, message: $t('repositoryform.approver.error')}]} ]">
            <a-select-option :value="$t('repositoryform.approver.opt1')">{{ $t('repositoryform.approver.opt1') }}</a-select-option>
            <a-select-option :value="$t('repositoryform.approver.opt2')">{{ $t('repositoryform.approver.opt2') }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.dateRange')">
          <a-range-picker
            style="width: 100%"
            v-decorator="[
              'dateRange',
              {rules: [{ required: true, message: $t('repositoryform.dateRange.error')}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.type')">
          <a-select
            :placeholder="$t('repositoryform.type.placeholder')"
            v-decorator="[
              'type',
              {rules: [{ required: true, message: $t('repositoryform.type.error')}]}
            ]" >
            <a-select-option :value="$t('repositoryform.type.opt1')">{{ $t('repositoryform.type.opt1') }}</a-select-option>
            <a-select-option :value="$t('repositoryform.type.opt2')">{{ $t('repositoryform.type.opt2') }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button htmlType="submit" >Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { i18nRender } from '@/locales'
export default {
  name: 'RepositoryForm',
  props: {
    showSubmit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$notification['error']({
            message: 'Received values of form:',
            description: values
          })
        }
      })
    },
    validate (rule, value, callback) {
      const regex = /^user-(.*)$/
      if (!regex.test(value)) {
        callback(new Error(`${i18nRender('repositoryform.url.validatemsg')}`))
      }
      callback()
    }
  }
}
</script>

<style scoped>

</style>
