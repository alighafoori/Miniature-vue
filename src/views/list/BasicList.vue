<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-row>
        <a-col :sm="8" :xs="24">
          <info :title="$t('basiclist.My to-do')" :value="8+$t('basiclist.Tasks')" :bordered="true" />
        </a-col>
        <a-col :sm="8" :xs="24">
          <info :title="$t('basiclist.Average')" :value="32+$t('basiclist.minute')" :bordered="true" />
        </a-col>
        <a-col :sm="8" :xs="24">
          <info :title="$t('basiclist.TasksWeek')" :value="24+$t('basiclist.Pc')" />
        </a-col>
      </a-row>
    </a-card>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      :title="$t('basiclist.Standard list')">

      <div slot="extra">
        <a-radio-group v-model="status">
          <a-radio-button value="all">{{ $t('basiclist.All') }}</a-radio-button>
          <a-radio-button value="processing">{{ $t('basiclist.processing') }}</a-radio-button>
          <a-radio-button value="waiting">{{ $t('basiclist.Waiting') }}</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div>

      <div class="operate">
        <a-button type="dashed" style="width: 100%" icon="plus" @click="add">{{ $t('basiclist.Add to') }}</a-button>
      </div>

      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">
        <a-list-item :key="index" v-for="(item, index) in data">
          <a-list-item-meta :description="item.description">
            <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar"/>
            <a slot="title">{{ item.title }}</a>
          </a-list-item-meta>
          <div slot="actions">
            <a @click="edit(item)">{{ $t('basiclist.edit') }}</a>
          </div>
          <div slot="actions">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item><a>{{ $t('basiclist.edit') }}</a></a-menu-item>
                <a-menu-item><a>{{ $t('basiclist.delete') }}</a></a-menu-item>
              </a-menu>
              <a>{{ $t('basiclist.More') }}<a-icon type="down"/></a>
            </a-dropdown>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>Owner</span>
              <p>{{ item.owner }}</p>
            </div>
            <div class="list-content-item">
              <span>{{ $t('basiclist.Starting time') }}</span>
              <p>{{ item.startAt }}</p>
            </div>
            <div class="list-content-item">
              <a-progress :percent="item.progress.value" :status="!item.progress.status ? null : item.progress.status" style="width: 180px" />
            </div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import TaskForm from './modules/TaskForm'
import Info from './components/Info'
import { currentLang } from '@/locales'

export default {
  name: 'StandardList',
  components: {
    TaskForm,
    Info
  },
  data () {
    return {
      data: [],
      status: 'all'
    }
  },
  methods: {
        add () {
      this.$dialog(TaskForm,
        // component props
        {
          record: {},
          on: {
            ok () {
              console.log('ok 回调')
            },
            cancel () {
              console.log('cancel 回调')
            },
            close () {
              console.log('modal close 回调')
            }
          }
        },
        // modal props
        {
          title: '新增',
          width: 700,
          centered: true,
          maskClosable: false
        })
    },
    edit (record) {
      // mockdata
      // record.taskName = 'فثسفهدل '
      console.log('edit')
      console.log(record)
      // mockend
      this.$dialog(TaskForm,
        // component props
        {
          record
        },
        // modal props
        {
          title: '操作',
          width: 700,
          centered: true,
          maskClosable: false
        })
    },
    getData () {
      const url = `/${currentLang.isoCode}/basiclistdata`
      this.$http.get(url)
        .then(res => {
          this.data = res.result && res.result.data
        })
    }
  },
  mounted () {
    this.getData()
    this.$store.watch(() => this.$store.getters.langObj, () => {
      this.getData()
    })
  }
}
</script>

<style lang="less" scoped>
.ant-avatar-lg {
    width: 48px;
    height: 48px;
    line-height: 48px;
}

.list-content-item {
    color: rgba(0, 0, 0, .45);
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 40px;
    span {
        line-height: 20px;
    }
    p {
        margin-top: 4px;
        margin-bottom: 0;
        line-height: 22px;
    }
}
</style>
