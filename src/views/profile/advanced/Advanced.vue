<template>
  <page-header-wrapper
    title="advancedprofile.Number"
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    @tabChange="handleTabChange"
  >
    <template v-slot:content>
      <a-descriptions size="small" :column="isMobile ? 1 : 2">
        <a-descriptions-item :label="$t('advancedprofile.founder')">{{ $t('advancedprofile.Qu Lili') }}</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.Ordering Products')">XX {{ $t('advancedprofile.service') }}</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.Creation time')">2017-07-07</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.Related documents')">
          <a href="">12421</a>
        </a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.effective date')">2017-07-07 ~ 2017-08-08</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.Remarks')">{{ $t('advancedprofile.confirm') }}</a-descriptions-item>
      </a-descriptions>
    </template>

    <!-- actions -->
    <template v-slot:extra>
      <a-button-group style="margin-right: 4px;">
        <a-button>{{ $t('advancedprofile.operating') }}</a-button>
        <a-button>{{ $t('advancedprofile.operating') }}</a-button>
        <a-button><a-icon type="ellipsis"/></a-button>
      </a-button-group>
      <a-button type="primary" >{{ $t('advancedprofile.Main operation') }}</a-button>
    </template>

    <template v-slot:extraContent>
      <a-row class="status-list">
        <a-col :xs="12" :sm="12">
          <div class="text">{{ $t('advancedprofile.status') }}</div>
          <div class="heading">{{ $t('advancedprofile.Pending') }}</div>
        </a-col>
        <a-col :xs="12" :sm="12">
          <div class="text">{{ $t('advancedprofile.order amount') }}</div>
          <div class="heading">¥ 568.08</div>
        </a-col>
      </a-row>
    </template>

    <a-card :bordered="false" :title="$t('advancedprofile.Process progress')">
      <a-steps :direction="isMobile && 'vertical' || 'horizontal'" :current="1" progressDot>
        <a-step :title="$t('advancedprofile.Create project')">
        </a-step>
        <a-step :title="$t('advancedprofile.Departmental')">
        </a-step>
        <a-step :title="$t('advancedprofile.Financial review')">
        </a-step>
        <a-step :title="$t('advancedprofile.carry out')">
        </a-step>
      </a-steps>
    </a-card>

    <a-card style="margin-top: 24px" :bordered="false" :title="$t('advancedprofile.User Info')">
      <a-descriptions>
        <a-descriptions-item :label="$t('advancedprofile.username')">{{ $t('advancedprofile.Fu Xiaoxiao') }}</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.member card number')">32943898021309809423</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.ID card')">3321944288191034921</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.contact details')">18112345678</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.contact address')">{{ $t('advancedprofile.address') }}</a-descriptions-item>
      </a-descriptions>
      <a-descriptions :title="$t('advancedprofile.Information Group')">
        <a-descriptions-item :label="$t('advancedprofile.XX data')">725</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.The data update time')">2018-08-08</a-descriptions-item>
        <a-descriptions-item ></a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.XX data')">725</a-descriptions-item>
        <a-descriptions-item :label="$t('advancedprofile.The data update time')">2018-08-08</a-descriptions-item>
        <a-descriptions-item ></a-descriptions-item>
      </a-descriptions>
      <a-card type="inner" :title="$t('advancedprofile.Multi-layer information group')">
        <a-descriptions :title="$t('advancedprofile.Group name')" size="small">
          <a-descriptions-item :label="$t('advancedprofile.principal')">{{ $t('advancedprofile.Lin Dongdong') }}</a-descriptions-item>
          <a-descriptions-item :label="$t('advancedprofile.Character code')">1234567</a-descriptions-item>
          <a-descriptions-item :label="$t('advancedprofile.Department')">XX{{ $t('advancedprofile.Company-YY Department') }}</a-descriptions-item>
          <a-descriptions-item :label="$t('advancedprofile.expire date')">2018-08-08</a-descriptions-item>
          <a-descriptions-item :label="$t('advancedprofile.description')">{{ $t('advancedprofile.description.content') }}</a-descriptions-item>
        </a-descriptions>
        <a-divider style="margin: 16px 0" />
        <a-descriptions :title="$t('advancedprofile.Group name')" size="small" :col="1">
          <a-descriptions-item :label="$t('advancedprofile.scientific name')">	Citrullus lanatus (Thunb.) Matsum. et Nakai{{ $t('advancedprofile.Annual') }}</a-descriptions-item>
        </a-descriptions>
        <a-divider style="margin: 16px 0" />
        <a-descriptions :title="$t('advancedprofile.Group name')" size="small" :col="2">
          <a-descriptions-item :label="$t('advancedprofile.principal')">{{ $t('advancedprofile.Fu Xiaoxiao') }}</a-descriptions-item>
          <a-descriptions-item :label="$t('advancedprofile.Character code')">1234567</a-descriptions-item>
        </a-descriptions>
      </a-card>

    </a-card>

    <a-card style="margin-top: 24px" :bordered="false" :title="$t('advancedprofile.User call history in the past six months')">
      <div class="no-data"><a-icon type="frown-o"/>{{ $t('advancedprofile.No data') }}</div>
    </a-card>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      :tabList="operationTabList"
      :activeTabKey="operationActiveTabKey"
      @tabChange="(key) => {this.operationActiveTabKey = key}"
    >
      <a-table
        v-if="operationActiveTabKey === '1'"
        :columns="operationColumns"
        :dataSource="operation1"
        :pagination="false"
      >
        <template
          slot="status"
          slot-scope="status">
          <a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
        </template>
      </a-table>
      <a-table
        v-if="operationActiveTabKey === '2'"
        :columns="operationColumns"
        :dataSource="operation2"
        :pagination="false"
      >
        <template
          slot="status"
          slot-scope="status">
          <a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
        </template>
      </a-table>
      <a-table
        v-if="operationActiveTabKey === '3'"
        :columns="operationColumns"
        :dataSource="operation3"
        :pagination="false"
      >
        <template
          slot="status"
          slot-scope="status">
          <a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
        </template>
      </a-table>
    </a-card>

  </page-header-wrapper>
</template>

<script>
import { baseMixin } from '@/store/app-mixin'
import { i18nRender } from '@/locales'

export default {
  name: 'Advanced',
  mixins: [baseMixin],
  data () {
    return {
      tabList: [
        { key: 'detail', tab: 'advancedprofile.Details' },
        { key: 'rule', tab: 'advancedprofile.rule' }
      ],
      tabActiveKey: 'detail',

      operationTabList: [
        {
          key: '1',
          tab: i18nRender('advancedprofile.Operation log one')
        },
        {
          key: '2',
          tab: i18nRender('advancedprofile.Operation log two')
        },
        {
          key: '3',
          tab: i18nRender('advancedprofile.Operation log three')
        }
      ],
      operationActiveTabKey: '1',

      operationColumns: [
        {
          title: i18nRender('advancedprofile.Operation type'),
          dataIndex: 'type',
          key: 'type'
        },
        {
          title: i18nRender('advancedprofile.Operator'),
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: i18nRender('advancedprofile.Results of the'),
          dataIndex: 'status',
          key: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: i18nRender('advancedprofile.Operating time'),
          dataIndex: 'updatedAt',
          key: 'updatedAt'
        },
        {
          title: i18nRender('advancedprofile.Remarks'),
          dataIndex: 'remark',
          key: 'remark'
        }
      ],
      operation1: [
        {
          key: 'op1',
          type: i18nRender('advancedprofile.Ordering relationship effective'),
          name: i18nRender('advancedprofile.Qu Lili'),
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        },
        {
          key: 'op2',
          type: i18nRender('advancedprofile.Financial review'),
          name: i18nRender('advancedprofile.Fu Xiaoxiao'),
          status: 'reject',
          updatedAt: '2017-10-03  19:23:12',
          remark: i18nRender('advancedprofile.Reason for failure')
        },
        {
          key: 'op3',
          type: i18nRender('advancedprofile.Departmental Preliminary Examination'),
          name: i18nRender('advancedprofile.Zhou Maomao'),
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        },
        {
          key: 'op4',
          type: i18nRender('advancedprofile.Submit Order'),
          name: i18nRender('advancedprofile.Lin Dongdong'),
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: i18nRender('advancedprofile.Great')
        },
        {
          key: 'op5',
          type: i18nRender('advancedprofile.Create Order'),
          name: i18nRender('advancedprofile.Sweaty teeth'),
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        }
      ],
      operation2: [
        {
          key: 'op2',
          type: i18nRender('advancedprofile.Financial review'),
          name: i18nRender('advancedprofile.Fu Xiaoxiao'),
          status: 'reject',
          updatedAt: '2017-10-03  19:23:12',
          remark: i18nRender('advancedprofile.Reason for failure')
        },
        {
          key: 'op3',
          type: i18nRender('advancedprofile.Departmental Preliminary Examination'),
          name: i18nRender('advancedprofile.Zhou Maomao'),
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        },
        {
          key: 'op4',
          type: i18nRender('advancedprofile.Submit Order'),
          name: i18nRender('advancedprofile.Lin Dongdong'),
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: i18nRender('advancedprofile.Great')
        }
      ],
      operation3: [
        {
          key: 'op2',
          type: i18nRender('advancedprofile.Financial review'),
          name: i18nRender('advancedprofile.Fu Xiaoxiao'),
          status: 'reject',
          updatedAt: '2017-10-03  19:23:12',
          remark: i18nRender('advancedprofile.Reason for failure')
        },
        {
          key: 'op3',
          type: i18nRender('advancedprofile.Departmental Preliminary Examination'),
          name: i18nRender('advancedprofile.Zhou Maomao'),
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        }
      ]
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        'agree': i18nRender('advancedprofile.success'),
        'reject': i18nRender('advancedprofile.turn down')
      }
      return statusMap[status]
    },
    statusTypeFilter (type) {
      const statusTypeMap = {
        'agree': 'success',
        'reject': 'error'
      }
      return statusTypeMap[type]
    }
  },
  methods: {
    handleTabChange (key) {
      console.log('')
      this.tabActiveKey = key
    }
  }
}
</script>

<style lang="less" scoped>

  .detail-layout {
    margin-left: 44px;
  }
  .text {
    color: rgba(0, 0, 0, .45);
  }

  .heading {
    color: rgba(0, 0, 0, .85);
    font-size: 20px;
  }

  .no-data {
    color: rgba(0, 0, 0, .25);
    text-align: center;
    line-height: 64px;
    font-size: 16px;

    i {
      font-size: 24px;
      margin-right: 16px;
      position: relative;
      top: 3px;
    }
  }

  .mobile {
    .detail-layout {
      margin-left: unset;
    }
    .status-list {
      text-align: left;
    }
  }
</style>
