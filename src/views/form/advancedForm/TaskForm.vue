<template>
  <a-form @submit="handleSubmit" :form="form" class="form">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.name2')">
          <a-input :placeholder="$t('taskform.name2.placeholder')" v-decorator="[ 'name2', {rules: [{ required: true, message: $t('taskform.name2.error'), whitespace: true}]} ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.url2')">
          <a-input :placeholder="$t('taskform.url2.placeholder')" v-decorator="[ 'url2', {rules: [{ required: true, message: $t('taskform.url2.error'), whitespace: true}]} ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.owner2')">
          <a-select
            :placeholder="$t('taskform.owner2.placeholder')"
            v-decorator="[
              'owner2',
              {rules: [{ required: true, message: $t('taskform.owner2.placeholder')}]}
            ]" >
            <a-select-option :value="$t('taskform.owner2.opt1')">{{ $t('taskform.owner2.opt1') }}</a-select-option>
            <a-select-option :value="$t('taskform.owner2.opt2')">{{ $t('taskform.owner2.opt2') }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.approver2')">
          <a-select
            :placeholder="$t('taskform.approver2.placeholder')"
            v-decorator="[
              'approver2',
              {rules: [{ required: true, message: $t('taskform.approver2.placeholder')}]}
            ]" >
            <a-select-option :value="$t('taskform.approver2.opt1')">{{ $t('taskform.approver2.opt1') }}</a-select-option>
            <a-select-option :value="$t('taskform.approver2.opt2')">{{ $t('taskform.approver2.opt2') }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
          :label="$t('taskform.dateRange2.label')">
          <a-time-picker
            style="width: 100%"
            v-decorator="[
              'dateRange2',
              {rules: [{ required: true, message: $t('taskform.dateRange2.error')}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
          :label="$t('advancedform.fieldLabels.type2')">
          <a-select
            :placeholder="$t('repositoryform.type2.placeholder')"
            v-decorator="[ 'type2', {rules: [{ required: true, message: $t('repositoryform.type2.error')}]} ]" >
            <a-select-option :value="$t('repositoryform.type2.opt1')">{{ $t('repositoryform.type2.opt1') }}</a-select-option>
            <a-select-option :value="$t('repositoryform.type2.opt2')">{{ $t('repositoryform.type2.opt2') }}</a-select-option>
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
export default {
  name: 'TaskForm',
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
    }
  }
}
</script>

<style scoped>

</style>
