<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item :label="$t('rolelist.Role ID')">
              <a-input :placeholder="$t('rolelist.please enter')"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item :label="$t('rolelist.status')">
              <a-select :placeholder="$t('rolelist.please choose')" default-value="0">
                <a-select-option value="0">{{ $t('rolelist.All') }}</a-select-option>
                <a-select-option value="1">{{ $t('rolelist.normal') }}</a-select-option>
                <a-select-option value="2">{{ $t('rolelist.Disable') }}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <span class="table-page-search-submitButtons">
              <a-button type="primary">{{ $t('rolelist.Inquire') }}</a-button>
              <a-button style="margin-left: 8px">{{ $t('rolelist.Reset') }}</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <s-table
      ref="table"
      size="default"
      :columns="columns"
      :data="loadData"
    >
      <div
        slot="expandedRowRender"
        slot-scope="record"
        style="margin: 0">
        <a-row
          :gutter="24"
          :style="{ marginBottom: '12px' }">
          <a-col :span="12" v-for="(role, index) in record.permissions" :key="index" :style="{ marginBottom: '12px' }">
            <a-col :span="4">
              <span>{{ role.permissionName }}：</span>
            </a-col>
            <a-col :span="20" v-if="role.actionEntitySet.length > 0">
              <a-tag color="cyan" v-for="(action, k) in role.actionEntitySet" :key="k">{{ action.describe }}</a-tag>
            </a-col>
            <a-col :span="20" v-else>-</a-col>
          </a-col>
        </a-row>
      </div>
      <span slot="action" slot-scope="text, record">
        <a @click="$refs.modal.edit(record)">{{ $t('rolelist.edit') }}</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link">
            {{ $t('rolelist.More ') }} <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">{{ $t('rolelist.Details') }}</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">{{ $t('rolelist.Disable') }}</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">{{ $t('rolelist.delete') }}</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </s-table>

    <role-modal ref="modal" @ok="handleOk"></role-modal>

  </a-card>
</template>

<script>
import { STable } from '@/components'
import RoleModal from './modules/RoleModal'
import { i18nRender, currentLang } from '@/locales'

export default {
  name: 'TableList',
  components: {
    STable,
    RoleModal
  },
  data () {
    return {
      visible: false,

      form: null,
      mdl: {},

      // Advanced Search Expand / Close
      advanced: false,
      // Query parameters
      queryParam: {},
      // The load data method must be a Promise object
      loadData: parameter => {
        const url = `${currentLang.isoCode}/role`
        return this.$http.get(url, {
          params: Object.assign(parameter, this.queryParam)
        }).then(res => {
          return res.result
        })
      },

      selectedRowKeys: [],
      selectedRows: []
    }
  },
  methods: {
    handleEdit (record) {
      this.mdl = Object.assign({}, record)

      this.mdl.permissions.forEach(permission => {
        permission.actionsOptions = permission.actionEntitySet.map(action => {
          return { label: action.describe, value: action.action, defaultCheck: action.defaultCheck }
        })
      })

      console.log(this.mdl)
      this.visible = true
    },
    handleOk () {
      // When adding / modifying successfully, reload the list
      this.$refs.table.refresh()
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
          title: i18nRender('rolelist.columns.Unique identifier'),
          dataIndex: 'id'
        },
        {
          title: i18nRender('rolelist.columns.Role Name'),
          dataIndex: 'name'
        },
        {
          title: i18nRender('rolelist.columns.status'),
          dataIndex: 'status'
        },
        {
          title: i18nRender('rolelist.columns.Creation time'),
          dataIndex: 'createTime',
          sorter: true
        }, {
          title: i18nRender('rolelist.columns.operating'),
          width: '150px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ]
    },
      description () {
        return i18nRender('rolelist.description')
      }
  }
}
</script>
