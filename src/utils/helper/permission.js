export const PERMISSION_ENUM = {
  'add': { key: 'add', label: 'permission.Add' },
  'delete': { key: 'delete', label: 'permission.delete' },
  'edit': { key: 'edit', label: 'permission.modify' },
  'query': { key: 'query', label: 'permission.Inquire' },
  'get': { key: 'get', label: 'permission.Details' },
  'enable': { key: 'enable', label: 'permission.Enable' },
  'disable': { key: 'disable', label: 'permission.Disable' },
  'import': { key: 'import', label: 'permission.Import' },
  'export': { key: 'export', label: 'permission.Export' }
}

function plugin (Vue) {
  if (plugin.installed) {
    return
  }

  !Vue.prototype.$auth && Object.defineProperties(Vue.prototype, {
    $auth: {
      get () {
        const _this = this
        return (permissions) => {
          const [permission, action] = permissions.split('.')
          const permissionList = _this.$store.getters.roles.permissions
          return permissionList.find((val) => {
            return val.permissionId === permission
          }).actionList.findIndex((val) => {
            return val === action
          }) > -1
        }
      }
    }
  })

  !Vue.prototype.$enum && Object.defineProperties(Vue.prototype, {
    $enum: {
      get () {
        // const _this = this;
        return (val) => {
          let result = PERMISSION_ENUM
          val && val.split('.').forEach(v => {
            result = result && result[v] || null
          })
          return result
        }
      }
    }
  })
}

export default plugin
