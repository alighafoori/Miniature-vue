<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item :label="$t('userlist.Role ID')">
              <a-input :placeholder="$t('userlist.please enter')"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item :label="$t('userlist.status')">
              <a-select :placeholder="$t('userlist.please choose')" default-value="0">
                <a-select-option value="0">{{ $t('userlist.All') }}</a-select-option>
                <a-select-option value="1">{{ $t('userlist.shut down') }}</a-select-option>
                <a-select-option value="2">{{ $t('userlist.Running') }}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <span class="table-page-search-submitButtons">
              <a-button type="primary">{{ $t('userlist.Inquire') }}</a-button>
              <a-button style="margin-left: 8px">{{ $t('userlist.Reset') }}</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <s-table
      row-key="id"
      size="default"
      :columns="columns"
      :data="loadData"
      :expandedRowKeys="expandedRowKeys"
      @expand="handleExpand"
    >
      <div
        slot="expandedRowRender"
        slot-scope="record"
        style="margin: 0">
        <a-row
          :gutter="24"
          :style="{ marginBottom: '12px' }">
          <a-col :span="12" v-for="(role, index) in record.permissions" :key="index" :style="{ marginBottom: '12px', height: '23px' }">
            <a-col :lg="4" :md="24">
              <span>{{ role.permissionName }}：</span>
            </a-col>
            <a-col :lg="20" :md="24" v-if="role.actionList && role.actionList.length > 0">
              <a-tag color="cyan" v-for="action in role.actionList" :key="action">{{ action | permissionFilter }}</a-tag>
            </a-col>
            <a-col :span="20" v-else>-</a-col>
          </a-col>
        </a-row>
      </div>
      <a-tag color="blue" slot="status" slot-scope="text">{{ text | statusFilter }}</a-tag>
      <span slot="createTime" slot-scope="text">{{ text | moment }}</span>
      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(record)">{{ $t('userlist.edit') }}</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link">
            {{ $t('userlist.More ') }} <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">{{ $t('userlist.Details') }}</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">{{ $t('userlist.Disable') }}</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">{{ $t('userlist.delete') }}</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </s-table>

    <a-modal
      :title="$t('userlist.operating')"
      style="top: 20px;"
      :width="800"
      v-model="visible"
      @ok="handleOk"
    >
      <a-form class="permission-form" :form="form">

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('userlist.Unique identifier')"
          hasFeedback
          validateStatus="success"
        >
          <a-input
            :placeholder="$t('userlist.Unique identifier')"
            disabled="disabled"
            v-decorator="['id']"
          />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('userlist.Role Name')"
          hasFeedback
          validateStatus="success"
        >
          <a-input
            :placeholder="$t('userlist.Give a name')"
            v-decorator="['name']"
          />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('userlist.status')"
          hasFeedback
          validateStatus="warning"
        >
          <a-select v-decorator="['status', { initialValue: 1 }]">
            <a-select-option :value="1">{{ $t('userlist.normal') }}</a-select-option>
            <a-select-option :value="2">{{ $t('userlist.Disable') }}</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="$t('userlist.description')"
          hasFeedback
        >
          <a-textarea
            :rows="5"
            placeholder="..."
            id="describe"
            v-decorator="['describe']"
          />
        </a-form-item>

        <a-divider>{{ $t('userlist.Have permissions') }}</a-divider>
        <template v-for="permission in permissions">
          <a-form-item
            class="permission-group"
            v-if="permission.actionsOptions && permission.actionsOptions.length > 0"
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            :key="permission.permissionId"
            :label="permission.permissionName"
          >
            <a-checkbox>{{ $t('userlist.select all') }}</a-checkbox>
            <a-checkbox-group v-decorator="[`permissions.${permission.permissionId}`]" :options="permission.actionsOptions"/>
          </a-form-item>
        </template>

      </a-form>
    </a-modal>

  </a-card>
</template>

<script>
import pick from 'lodash.pick'
import { STable } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'
import { PERMISSION_ENUM } from '@/utils/helper/permission'
import { i18nRender } from '@/locales'

const STATUS = {
  1: 'userlist.status.Enable',
  2: 'userlist.status.Disable'
}
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
      form: this.$form.createForm(this),
      permissions: [],

      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getRoleList(parameter)
          .then(res => {
            console.log('getRoleList', res)
            // 展开全部行
            this.expandedRowKeys = res.result.data.map(item => item.id)
            return res.result
          })
      },

      expandedRowKeys: [],
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter (key) {
      return i18nRender(STATUS[key])
    },
    permissionFilter (key) {
      const permission = PERMISSION_ENUM[key]
      return permission && i18nRender(permission.label)
    }
  },
  created () {
    getServiceList().then(res => {
      console.log('getServiceList.call()', res)
    })

    getRoleList().then(res => {
      console.log('getRoleList.call()', res)
    })
    this.$store.watch(() => this.$store.getters.langObj, () => {
      getServiceList().then(res => {
      console.log('getServiceList.call()', res)
    })

    getRoleList().then(res => {
      console.log('getRoleList.call()', res)
    })
     })
  },
  methods: {
    handleEdit (record) {
      this.visible = true
      console.log('record', record)

      const checkboxGroup = {}
      this.permissions = record.permissions.map(permission => {
        const groupKey = `permissions.${permission.permissionId}`
        checkboxGroup[groupKey] = permission.actionList
        const actionsOptions = permission.actionEntitySet.map(action => {
          return {
            label: action.describe,
            value: action.action,
            defaultCheck: action.defaultCheck
          }
        })
        return {
          ...permission,
          actionsOptions
        }
      })

      this.$nextTick(() => {
        console.log('permissions', this.permissions)
        console.log('checkboxGroup', checkboxGroup)

        this.form.setFieldsValue(pick(record, ['id', 'status', 'describe', 'name']))
        this.form.setFieldsValue(checkboxGroup)
      })
    },
    handleOk (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        console.log(err, values)
      })
    },
    onChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handleExpand (expanded, record) {
      console.log('expanded', expanded, record)
      if (expanded) {
        this.expandedRowKeys.push(record.id)
      } else {
        this.expandedRowKeys = this.expandedRowKeys.filter(item => record.id !== item)
      }
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
    title: i18nRender('userlist.columns.Unique identifier'),
    dataIndex: 'id'
  },
  {
    title: i18nRender('userlist.columns.Role Name'),
    dataIndex: 'name'
  },
  {
    title: i18nRender('userlist.columns.status'),
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: i18nRender('userlist.columns.Creation time'),
    dataIndex: 'createTime',
    scopedSlots: { customRender: 'createTime' },
    sorter: true
  }, {
    title: i18nRender('userlist.columns.operating'),
    width: '150px',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
    },
    description () { return i18nRender('userlist.desciption') }
  }
}
</script>

<style lang="less" scoped>
.permission-form {
  /deep/ .permission-group {
    margin-top: 0;
    margin-bottom: 0;
  }
}

</style>
