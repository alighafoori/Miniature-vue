<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item :label="$t('tablelistview.Rule number')">
                <a-input v-model="queryParam.id" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item :label="$t('tablelistview.status of use')">
                <a-select v-model="queryParam.status" :placeholder="$t('tablelistview.please choose')" default-value="0">
                  <a-select-option value="0">{{ $t('tablelistview.All') }}</a-select-option>
                  <a-select-option value="1">{{ $t('tablelistview.shut down') }}</a-select-option>
                  <a-select-option value="2">{{ $t('tablelistview.Running') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item :label="$t('tablelistview.Calls')">
                  <a-input-number v-model="queryParam.callNo" style="width: 100%"/>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item :label="$t('tablelistview.Updated')">
                  <a-date-picker v-model="queryParam.date" style="width: 100%" :placeholder="$t('tablelistview.Please enter the update date')"/>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item :label="$t('tablelistview.status of use')">
                  <a-select v-model="queryParam.useStatus" :placeholder="$t('tablelistview.please choose')" default-value="0">
                    <a-select-option value="0">{{ $t('tablelistview.All') }}</a-select-option>
                    <a-select-option value="1">{{ $t('tablelistview.shut down') }}</a-select-option>
                    <a-select-option value="2">{{ $t('tablelistview.Running') }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item :label="$t('tablelistview.status of use')">
                  <a-select :placeholder="$t('tablelistview.please choose')" default-value="0">
                    <a-select-option value="0">{{ $t('tablelistview.All') }}</a-select-option>
                    <a-select-option value="1">{{ $t('tablelistview.shut down') }}</a-select-option>
                    <a-select-option value="2">{{ $t('tablelistview.Running') }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="!advanced && 8 || 24" :sm="24">
              <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
                <a-button type="primary" @click="$refs.table.refresh(true)">{{ $t('tablelistview.Inquire') }}</a-button>
                <a-button style="margin-left: 8px" @click="() => queryParam = {}">{{ $t('tablelistview.Reset') }}</a-button>
                <a @click="toggleAdvanced" style="margin-left: 8px">
                  {{ advanced ? $t('tablelistview.Collapse') : $t('tablelistview.Unfold') }}
                  <a-icon :type="advanced ? 'up' : 'down'"/>
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="$refs.createModal.add()">{{ $t('tablelistview.New') }}</a-button>
        <a-button type="dashed" @click="tableOption">{{ optionAlertShow && $t('tablelistview.shut down') || $t('tablelistview.Open') }} alert</a-button>
        <a-dropdown v-action:edit v-if="selectedRowKeys.length > 0">
          <a-menu slot="overlay">
            <a-menu-item key="1"><a-icon type="delete" />{{ $t('tablelistview.delete') }}</a-menu-item>
            <!-- lock | unlock -->
            <a-menu-item key="2"><a-icon type="lock" />{{ $t('tablelistview.locking') }}</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            {{ $t('tablelistview.Bulk operations') }} <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="options.alert"
        :rowSelection="options.rowSelection"
        showPagination="auto"
      >
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
        </span>
        <span slot="status" slot-scope="text">
          <a-badge :status="text | statusTypeFilter" :text="text | statusFilter" />
        </span>
        <span slot="description" slot-scope="text">
          <ellipsis :length="4" tooltip>{{ text }}</ellipsis>
        </span>

        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleEdit(record)">{{ $t('tablelistview.Configuration') }}</a>
            <a-divider type="vertical" />
            <a @click="handleSub(record)">{{ $t('tablelistview.Subscribe to alarm') }}</a>
          </template>
        </span>
      </s-table>
      <create-form ref="createModal" @ok="handleOk" />
      <step-by-step-modal ref="modal" @ok="handleOk"/>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './modules/CreateForm'
import { getRoleList, getServiceList } from '@/api/manage'
import { i18nRender } from '@/locales'
const statusMap = {
  0: {
    status: 'default',
    text: 'tablelistview.shut down'
  },
  1: {
    status: 'processing',
    text: 'tablelistview.Running'
  },
  2: {
    status: 'success',
    text: 'tablelistview.Online'
  },
  3: {
    status: 'error',
    text: 'tablelistview.abnormal'
  }
}

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    StepByStepModal
  },
  data () {
    return {
      mdl: {},
      advanced: false,
      queryParam: {},
      loadData: parameter => {
        return getServiceList(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      },
      selectedRowKeys: [],
      selectedRows: [],
      options: {
        alert: { show: true, clear: () => { this.selectedRowKeys = [] } },
        rowSelection: {
          selectedRowKeys: this.selectedRowKeys,
          onChange: this.onSelectChange
        }
      },
      optionAlertShow: false
    }
  },
  computed: {
    columns () {
      return ([
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: i18nRender('tablelistview.Rule number'),
          dataIndex: 'no'
        },
        {
          title: i18nRender('tablelistview.description'),
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        },
        {
          title: i18nRender('tablelistview.Service calls'),
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + ' ' + i18nRender('tablelistview.Times')
        },
        {
          title: i18nRender('tablelistview.status'),
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: i18nRender('tablelistview.Update time'),
          dataIndex: 'updatedAt',
          sorter: true
        },
        {
          title: i18nRender('tablelistview.operating'),
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ])
    }
  },
  filters: {
    statusFilter (type) {
      return i18nRender(statusMap[type].text)
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  created () {
    this.tableOption()
    getRoleList({ t: new Date() })
  },
  methods: {
    tableOption () {
      if (!this.optionAlertShow) {
        this.options = {
          alert: { show: true, clear: () => { this.selectedRowKeys = [] } },
          rowSelection: {
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onSelectChange,
            getCheckboxProps: record => ({
              props: {
                disabled: record.no === 'No 2', // Column configuration not to be checked
                name: record.no
              }
            })
          }
        }
        this.optionAlertShow = true
      } else {
        this.options = {
          alert: false,
          rowSelection: null
        }
        this.optionAlertShow = false
      }
    },

    handleEdit (record) {
      console.log(record)
      this.$refs.modal.edit(record)
    },
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} wtf ${i18nRender('tablelistview.Subscriptionsuccessful')}`)
      } else {
        this.$message.error(`${record.no} ${i18nRender('tablelistview.Subscriptionfailed')}`)
      }
    },
    handleOk () {
      this.$refs.table.refresh()
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>
