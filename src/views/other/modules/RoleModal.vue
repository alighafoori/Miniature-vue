<template>
  <a-modal
    :title="$t('rolemodal.title')"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-steps :current="1">
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template slot="title">
          Finished
        </template>
        <span slot="description">{{ $t('rolemodal.description') }}</span>
      </a-step>
      <a-step :title="$t('rolemodal.progress.title')" :description="$t('rolemodal.description')" />
      <a-step :title="$t('rolemodal.wating.title')" :description="$t('rolemodal.description')" />
    </a-steps>
  </a-modal>
</template>

<script>
import { getPermissions } from '@/api/manage'
import { actionToObject } from '@/utils/permissions'
import pick from 'lodash.pick'
import { i18nRender } from '../../../locales'

export default {
  name: 'RoleModal',
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
      mdl: {},

      form: this.$form.createForm(this),
      permissions: []
    }
  },
  created () {
    this.loadPermissions()
  },
  methods: {
    add () {
      this.edit({ id: 0 })
    },
    edit (record) {
      this.mdl = Object.assign({}, record)
      this.visible = true

      // There is permission table, processing check
      if (this.mdl.permissions && this.permissions) {
        // Process the permission structure to be checked first
        const permissionsAction = {}
        this.mdl.permissions.forEach(permission => {
          permissionsAction[permission.permissionId] = permission.actionEntitySet.map(entity => entity.action)
        })
        // Iterate through the permission table and set the permission action to be checked
        this.permissions.forEach(permission => {
          permission.selected = permissionsAction[permission.id] || []
        })
      }

      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.mdl, 'id', 'name', 'status', 'describe'))
      })
      console.log('this.mdl', this.mdl)
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
            _this.$message.success(i18nRender('rolemodal.success'))
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
    },
    onChangeCheck (permission) {
      permission.indeterminate = !!permission.selected.length && (permission.selected.length < permission.actionsOptions.length)
      permission.checkedAll = permission.selected.length === permission.actionsOptions.length
    },
    onChangeCheckAll (e, permission) {
      Object.assign(permission, {
        selected: e.target.checked ? permission.actionsOptions.map(obj => obj.value) : [],
        indeterminate: false,
        checkedAll: e.target.checked
      })
    },
    loadPermissions () {
      const that = this
      getPermissions().then(res => {
        const result = res.result
        that.permissions = result.map(permission => {
          const options = actionToObject(permission.actionData)
          permission.checkedAll = false
          permission.selected = []
          permission.indeterminate = false
          permission.actionsOptions = options.map(option => {
            return {
              label: option.describe,
              value: option.action
            }
          })
          return permission
        })
      })
    }

  }
}
</script>

<style scoped>

</style>
