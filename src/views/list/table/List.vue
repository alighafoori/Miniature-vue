<template>
  <div>
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="{{ $t('tablelist.Rule number') }}">
              <a-input v-model="queryParam.id" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="{{ $t('tablelist.status of use') }}">
              <a-select v-model="queryParam.status" placeholder="{{ $t('tablelist.please choose') }}" default-value="0">
                <a-select-option value="0">{{ $t('tablelist.All') }}</a-select-option>
                <a-select-option value="1">{{ $t('tablelist.shut down') }}</a-select-option>
                <a-select-option value="2">{{ $t('tablelist.Running') }}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item label="{{ $t('tablelist.Calls') }}">
                <a-input-number v-model="queryParam.callNo" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="{{ $t('tablelist.Updated') }}">
                <a-date-picker v-model="queryParam.date" style="width: 100%" placeholder="{{ $t('tablelist.Please enter the update date') }}"/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="{{ $t('tablelist.status of use') }}">
                <a-select v-model="queryParam.useStatus" placeholder="{{ $t('tablelist.please choose') }}" default-value="0">
                  <a-select-option value="0">{{ $t('tablelist.All') }}</a-select-option>
                  <a-select-option value="1">{{ $t('tablelist.shut down') }}</a-select-option>
                  <a-select-option value="2">{{ $t('tablelist.Running') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="{{ $t('tablelist.status of use') }}">
                <a-select placeholder="{{ $t('tablelist.please choose') }}" default-value="0">
                  <a-select-option value="0">{{ $t('tablelist.All') }}</a-select-option>
                  <a-select-option value="1">{{ $t('tablelist.shut down') }}</a-select-option>
                  <a-select-option value="2">{{ $t('tablelist.Running') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="!advanced && 8 || 24" :sm="24">
            <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
              <a-button type="primary" @click="$refs.table.refresh(true)">{{ $t('tablelist.Inquire') }}</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">{{ $t('tablelist.Reset') }}</a-button>
              <a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? $t('tablelist.Collapse') : $t('tablelist.Unfold') }}
                <a-icon :type="advanced ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="handleEdit()">{{ $t('tablelist.New') }}</a-button>
      <a-button type="dashed" @click="tableOption">{{ optionAlertShow && $t('tablelist.shut down') || $t('tablelist.Open') }} alert</a-button>
      <a-dropdown v-action:edit v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1"><a-icon type="delete" />{{ $t('tablelist.delete') }}</a-menu-item>
          <!-- lock | unlock -->
          <a-menu-item key="2"><a-icon type="lock" />{{ $t('tablelist.locking') }}</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          {{ $t('tablelist.Bulk operations') }} <a-icon type="down" />
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
    >
      <span slot="serial" slot-scope="text, record, index">
        {{ index + 1 }}
      </span>
      <span slot="action" slot-scope="text, record">
        <template>
          <a @click="handleEdit(record)">{{ $t('tablelist.edit') }}</a>
          <a-divider type="vertical" />
        </template>
        <a-dropdown>
          <a class="ant-dropdown-link">
            {{ $t('tablelist.More ') }} <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">{{ $t('tablelist.Details') }}</a>
            </a-menu-item>
            <a-menu-item v-if="$auth('table.disable')">
              <a href="javascript:;">{{ $t('tablelist.Disable') }}</a>
            </a-menu-item>
            <a-menu-item v-if="$auth('table.delete')">
              <a href="javascript:;">{{ $t('tablelist.delete') }}</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </s-table>
  </div>
</template>

<script>
import moment from 'moment'
import { STable } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'

export default {
  name: 'TableList',
  components: {
    STable
  },
  data () {
    return {
      mdl: {},
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '规则编号',
          dataIndex: 'no'
        },
        {
          title: '描述',
          dataIndex: 'description'
        },
        {
          title: '服务调用次数',
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + ' 次'
        },
        {
          title: '状态',
          dataIndex: 'status',
          needTotal: true
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
          sorter: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        return getServiceList(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      },
      selectedRowKeys: [],
      selectedRows: [],

      // custom table alert & rowSelection
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
            onChange: this.onSelectChange
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
      this.$emit('onEdit', record)
    },
    handleOk () {

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
