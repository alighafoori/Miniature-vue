<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-descriptions :title="$t('basicprofile.refund application')">
        <a-descriptions-item :label="$t('basicprofile.Pickup number')">1000000000</a-descriptions-item>
        <a-descriptions-item :label="$t('basicprofile.status')">{{ $t('basicprofile.Picked up') }}</a-descriptions-item>
        <a-descriptions-item :label="$t('basicprofile.Sales order number')">1234123421</a-descriptions-item>
        <a-descriptions-item :label="$t('basicprofile.Child order')">3214321432</a-descriptions-item>
      </a-descriptions>
      <a-divider style="margin-bottom: 32px"/>
      <a-descriptions :title="$t('basicprofile.User Info')">
        <a-descriptions-item :label="$t('basicprofile.username')">{{ $t('basicprofile.Fu Xiaoxiao') }}</a-descriptions-item>
        <a-descriptions-item :label="$t('basicprofile.contact number')">18100000000</a-descriptions-item>
        <a-descriptions-item :label="$t('basicprofile.Commonly used express')">{{ $t('basicprofile.Rookie storage') }}</a-descriptions-item>
        <a-descriptions-item :label="$t('basicprofile.Pickup address')">{{ $t('basicprofile.address') }}</a-descriptions-item>
        <a-descriptions-item :label="$t('basicprofile.Remarks')">	{{ $t('basicprofile.no') }}</a-descriptions-item>
      </a-descriptions>
      <a-divider style="margin-bottom: 32px"/>

      <div class="title">{{ $t('basicprofile.Returned goods') }}</div>
      <s-table
        style="margin-bottom: 24px"
        row-key="id"
        :columns="goodsColumns"
        :data="loadGoodsData">

      </s-table>

      <div class="title">{{ $t('basicprofile.Return progress') }}</div>
      <s-table
        style="margin-bottom: 24px"
        row-key="key"
        :columns="scheduleColumns"
        :data="loadScheduleData">

        <template
          slot="status"
          slot-scope="status">
          <a-badge :status="status" :text="status | statusFilter"/>
        </template>

      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { STable } from '@/components'
import { i18nRender } from '@/locales'

export default {
  components: {
    STable
  },
  data () {
    return {
      goodsColumns: [
        {
          title: i18nRender('basicprofile.Product Number'),
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: i18nRender('basicprofile.product name'),
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: i18nRender('basicprofile.barcode'),
          dataIndex: 'barcode',
          key: 'barcode'
        },
        {
          title: i18nRender('basicprofile.unit price'),
          dataIndex: 'price',
          key: 'price',
          align: 'right'
        },
        {
          title: i18nRender('basicprofile.Quantity / piece)'),
          dataIndex: 'num',
          key: 'num',
          align: 'right'
        },
        {
          title: i18nRender('basicprofile.Amount'),
          dataIndex: 'amount',
          key: 'amount',
          align: 'right'
        }
      ],
      // The load data method must be a Promise object
      loadGoodsData: () => {
        return new Promise(resolve => {
          resolve({
            data: [
              {
                id: '1234561',
                name: i18nRender('basicprofile.Mineral water 550ml'),
                barcode: '12421432143214321',
                price: '2.00',
                num: '1',
                amount: '2.00'
              },
              {
                id: '1234562',
                name: i18nRender('basicprofile.Herbal tea 300ml'),
                barcode: '12421432143214322',
                price: '3.00',
                num: '2',
                amount: '6.00'
              },
              {
                id: '1234563',
                name: i18nRender('basicprofile.Delicious potato chips'),
                barcode: '12421432143214323',
                price: '7.00',
                num: '4',
                amount: '28.00'
              },
              {
                id: '1234564',
                name: i18nRender('basicprofile.Especially delicious egg rolls'),
                barcode: '12421432143214324',
                price: '8.50',
                num: '3',
                amount: '25.50'
              }
            ],
            pageSize: 10,
            pageNo: 1,
            totalPage: 1,
            totalCount: 10
          })
        }).then(res => {
          return res
        })
      },

      scheduleColumns: [
        {
          title: i18nRender('basicprofile.time'),
          dataIndex: 'time',
          key: 'time'
        },
        {
          title: i18nRender('basicprofile.Current progress'),
          dataIndex: 'rate',
          key: 'rate'
        },
        {
          title: i18nRender('basicprofile.status'),
          dataIndex: 'status',
          key: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: i18nRender('basicprofile.Operator ID'),
          dataIndex: 'operator',
          key: 'operator'
        },
        {
          title: i18nRender('basicprofile.time consuming'),
          dataIndex: 'cost',
          key: 'cost'
        }
      ],
      loadScheduleData: () => {
        return new Promise(resolve => {
          resolve({
            data: [
              {
                key: '1',
                time: '2017-10-01 14:10',
                rate: i18nRender('basicprofile.contact clients'),
                status: 'processing',
                operator: i18nRender('basicprofile.Pickup ID1234'),
                cost: '5mins'
              },
              {
                key: '2',
                time: '2017-10-01 14:05',
                rate: i18nRender('basicprofile.Pickup Departure'),
                status: 'success',
                operator: i18nRender('basicprofile.Pickup ID1234'),
                cost: '1h'
              },
              {
                key: '3',
                time: '2017-10-01 13:05',
                rate: i18nRender('basicprofile.Pick up the order'),
                status: 'success',
                operator: i18nRender('basicprofile.Pickup ID1234'),
                cost: '5mins'
              },
              {
                key: '4',
                time: '2017-10-01 13:00',
                rate: i18nRender('basicprofile.Application approved'),
                status: 'success',
                operator: i18nRender('basicprofile.system'),
                cost: '1h'
              },
              {
                key: '5',
                time: '2017-10-01 12:00',
                rate: i18nRender('basicprofile.Initiate'),
                status: 'success',
                operator: i18nRender('basicprofile.user'),
                cost: '5mins'
              }
            ],
            pageSize: 10,
            pageNo: 1,
            totalPage: 1,
            totalCount: 10
          })
        }).then(res => {
          return res
        })
      }
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        'processing': i18nRender('basicprofile.processing'),
        'success': i18nRender('basicprofile.carry out'),
        'failed': i18nRender('basicprofile.failure')
      }
      return statusMap[status]
    }
  },
  computed: {
    title () {
      return this.$route.meta.title
    }
  }

}
</script>

<style lang="less" scoped>
  .title {
    color: rgba(0,0,0,.85);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }
</style>
