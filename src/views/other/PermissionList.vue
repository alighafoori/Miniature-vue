<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item :label="$t('permissionlist.Role ID')">
              <a-input :placeholder="$t('permissionlist.please enter')"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item :label="$t('permissionlist.status')">
              <a-select placeholder="$t('permissionlist.please choose')" default-value="0">
                <a-select-option value="0">{{ $t('permissionlist.All') }}</a-select-option>
                <a-select-option value="1">{{ $t('permissionlist.shut down') }}</a-select-option>
                <a-select-option value="2">{{ $t('permissionlist.Running') }}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <span class="table-page-search-submitButtons">
              <a-button type="primary">{{ $t('permissionlist.Inquire') }}</a-button>
              <a-button style="margin-left: 8px">{{ $t('permissionlist.Reset') }}</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <s-table :columns="columns" :data="loadData">

      <span slot="actions" slot-scope="text, record">
        <a-tag v-for="(action, index) in record.actionList" :key="index">{{ action.describe }}</a-tag>
      </span>

      <span slot="status" slot-scope="text">
        {{ text | statusFilter }}
      </span>

      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(record)">{{ $t('permissionlist.edit') }}</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link">
            {{ $t('permissionlist.More ') }} <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">{{ $t('permissionlist.Details') }}</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">{{ $t('permissionlist.Disable') }}</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">{{ $t('permissionlist.delete') }}</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </s-table>

    <a-modal
      :title="$t('permissionlist.operating')"
      :width="800"
      v-model="visible"
      @ok="handleOk"
    >
      <a-form :autoFormCreate="(form)=>{this.form = form}">

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('permissionlist.Unique identifier')"
          hasFeedback
          validateStatus="success"
        >
          <a-input :placeholder="$t('permissionlist.Unique identifier')" v-model="mdl.id" id="no" disabled="disabled" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('permissionlist.Permission name')"
          hasFeedback
          validateStatus="success"
        >
          <a-input :placeholder="$t('permissionlist.Give a name')" v-model="mdl.name" id="permission_name" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('permissionlist.status')"
          hasFeedback
          validateStatus="warning"
        >
          <a-select v-model="mdl.status">
            <a-select-option value="1">{{ $t('permissionlist.normal') }}</a-select-option>
            <a-select-option value="2">{{ $t('permissionlist.Disable') }}</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('permissionlist.description')"
          hasFeedback
        >
          <a-textarea :rows="5" v-model="mdl.describe" placeholder="..." id="describe"/>
        </a-form-item>

        <a-divider />

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('permissionlist.Give permissions')"
          hasFeedback
        >
          <a-select
            style="width: 100%"
            mode="multiple"
            v-model="mdl.actions"
            :allowClear="true"
          >
            <a-select-option v-for="(action, index) in permissionList" :key="index" :value="action.value">{{ action.label }}</a-select-option>
          </a-select>
        </a-form-item>

      </a-form>
    </a-modal>

  </a-card>
</template>

<script>
import { STable } from '@/components'
import { i18nRender, currentLang } from '@/locales'

export default {
  name: 'TableList',
  components: {
    STable
  },
  data () {
    return {
      visible: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      form: null,
      mdl: {},

      // Advanced Search Expand / Close
      advanced: false,
      // Query parameters
      queryParam: {},
       // Pull the list of available operations to the backend
      permissionList: null,
      // The load data method must be a Promise object
      loadData: parameter => {
        const url = `${currentLang.isoCode}/permission`
        return this.$http.get(url, {
          params: Object.assign(parameter, this.queryParam)
        }).then(res => {
          const result = res.result
          result.data.map(permission => {
            permission.actionList = JSON.parse(permission.actionData)
            return permission
          })
          return result
        })
      },

      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        1: 'permissionlist.statusmap.normal',
        2: 'permissionlist.statusmap.Disable'
      }
      return i18nRender(statusMap[status])
    }
  },
  created () {
    this.loadPermissionList()
  },
  methods: {
    loadPermissionList () {
      // permissionList
      new Promise(resolve => {
        const data = [
          { label: i18nRender('permissionlist.data.Add'), value: 'add', defaultChecked: false },
          { label: i18nRender('permissionlist.data.Inquire'), value: 'get', defaultChecked: false },
          { label: i18nRender('permissionlist.data.modify'), value: 'update', defaultChecked: false },
          { label: i18nRender('permissionlist.data.List'), value: 'query', defaultChecked: false },
          { label: i18nRender('permissionlist.data.delete'), value: 'delete', defaultChecked: false },
          { label: i18nRender('permissionlist.data.Import'), value: 'import', defaultChecked: false },
          { label: i18nRender('permissionlist.data.Export'), value: 'export', defaultChecked: false }
        ]
        setTimeout(resolve(data), 1500)
      }).then(res => {
        this.permissionList = res
      })
    },
    handleEdit (record) {
      this.mdl = Object.assign({}, record)
      console.log(this.mdl)
      this.visible = true
    },
    handleOk () {

    },
    onChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    }
  },
  watch: {
    /*
      'selectedRows': function (selectedRows) {
        this.needTotalList = this.needTotalList.map(item => {
          return {
            ...item,
            total: selectedRows.reduce( (sum, val) => {
              return sum + val[item.dataIndex]
            }, 0)
          }
        })
      }
      */
  },
  computed: {
      columns () {
        return [
        {
          title: i18nRender('permissionlist.columns.Unique identifier'),
          dataIndex: 'id'
        },
        {
          title: i18nRender('permissionlist.columns.Permission name'),
          dataIndex: 'name'
        },
        {
          title: i18nRender('permissionlist.columns.Operable authority'),
          dataIndex: 'actions',
          scopedSlots: { customRender: 'actions' }
        },
        {
          title: i18nRender('permissionlist.columns.status'),
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: i18nRender('permissionlist.columns.operating'),
          width: '150px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ]
    },
    description () {
      return i18nRender('permissionlist.description.content')
    }
  }
}
</script>
