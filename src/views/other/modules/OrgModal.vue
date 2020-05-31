<template>
  <a-modal
    :title="$t('orgmodal.operating')"
    :width="600"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item
          :label="$t('orgmodal.Parent ID')"
        >
          <a-input v-decorator="['parentId', {}]" disabled />
        </a-form-item>

        <a-form-item
          :label="$t('orgmodal.institution name')"
        >
          <a-input v-decorator="['orgName', {}]" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { i18nRender } from '@/locales'
export default {
  name: 'OrgModal',
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      visible: false,
      confirmLoading: false,
      mdl: {}
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
    console.log('form::', this.form)
  },
  created () {

  },
  methods: {
    add (id) {
      this.edit({ parentId: id })
    },
    edit (record) {
      this.mdl = Object.assign({}, record)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue({ ...record })
      })
    },
    close () {
      this.$emit('close')
      this.visible = false
    },
    handleOk () {
      const _this = this
      // Trigger form validation
      this.form.validateFields((err, values) => {
        // The verification form is correct
        if (!err) {
          console.log('form values', values)

          _this.confirmLoading = true
          // Simulate back-end requests with 2000 ms delay
          new Promise((resolve) => {
            setTimeout(() => resolve(), 2000)
          }).then(() => {
            // Do something
            _this.$message.success(i18nRender('orgmodal.success'))
            _this.$emit('ok')
          }).catch(() => {
            // Do something
          }).finally(() => {
            _this.confirmLoading = false
            _this.close()
          })
        }
      })
    },
    handleCancel () {
      this.close()
    }

  }
}
</script>
