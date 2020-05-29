<template>
  <div>
    <a-card :bordered="false" class="ant-pro-components-tag-select">
      <a-form :form="form" layout="inline">
        <standard-form-row :title="$t('search.article.catagory.Category')" block style="padding-bottom: 11px;">
          <a-form-item>
            <tag-select>
              <tag-select-option value="Category1">{{ $t('search.article.catagory.Category 1') }}</tag-select-option>
              <tag-select-option value="Category2">{{ $t('search.article.catagory.Category 2') }}</tag-select-option>
              <tag-select-option value="Category3">{{ $t('search.article.catagory.Category 3') }}</tag-select-option>
              <tag-select-option value="Category4">{{ $t('search.article.catagory.Category 4') }}</tag-select-option>
              <tag-select-option value="Category5">{{ $t('search.article.catagory.Category 5') }}</tag-select-option>
              <tag-select-option value="Category6">{{ $t('search.article.catagory.Category 6') }}</tag-select-option>
              <tag-select-option value="Category7">{{ $t('search.article.catagory.Category 7') }}</tag-select-option>
              <tag-select-option value="Category8">{{ $t('search.article.catagory.Category 8') }}</tag-select-option>
              <tag-select-option value="Category9">{{ $t('search.article.catagory.Category 9') }}</tag-select-option>
              <tag-select-option value="Category10">{{ $t('search.article.catagory.Category 10') }}</tag-select-option>
            </tag-select>
          </a-form-item>
        </standard-form-row>

        <standard-form-row title="owner" grid>
          <a-row>
            <a-col :md="24">
              <a-form-item :wrapper-col="{ span: 24 }">
                <a-select
                  style="max-width: 268px; width: 100%;"
                  mode="multiple"
                  :placeholder="$t('search.article.Select onwer')"
                  v-decorator="['owner']"
                  @change="handleChange"
                >
                  <a-select-option v-for="item in owners" :key="item.id">{{ item.name }}</a-select-option>
                </a-select>
                <a class="list-articles-trigger" @click="setOwner">{{ $t('search.article.Just look at your own') }}</a>
              </a-form-item>
            </a-col>
          </a-row>
        </standard-form-row>

        <standard-form-row :title="$t('search.article.Other options')" grid last>
          <a-row :gutter="16">
            <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
              <a-form-item :label="$t('search.article.active user')" :wrapper-col="{ xs: 24, sm: 24, md: 12 }">
                <a-select :placeholder="$t('search.article.Unlimited')" style="max-width: 200px; width: 100%;">
                  <a-select-option :value="$t('search.article.Li San')">{{ $t('search.article.Li San') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
              <a-form-item :label="$t('search.article.Praise of')" :wrapper-col="{ xs: 24, sm: 24, md: 12 }">
                <a-select :placeholder="$t('search.article.Unlimited')" style="max-width: 200px; width: 100%;">
                  <a-select-option :value="$t('search.article.excellent')">{{ $t('search.article.excellent') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </standard-form-row>
      </a-form>
    </a-card>

    <a-card style="margin-top: 24px;" :bordered="false">
      <a-list
        size="large"
        rowKey="id"
        :loading="loading"
        itemLayout="vertical"
        :dataSource="data"
      >
        <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
          <template slot="actions">
            <icon-text type="star-o" :text="item.star" />
            <icon-text type="like-o" :text="item.like" />
            <icon-text type="message" :text="item.message" />
          </template>
          <a-list-item-meta>
            <a slot="title" href="https://vue.ant.design/">{{ item.title }}</a>
            <template slot="description">
              <span>
                <a-tag>Ant Design</a-tag>
                <a-tag>{{ $t('search.article.Design language') }}</a-tag>
                <a-tag>{{ $t('search.article.Ant Financial') }}</a-tag>
              </span>
            </template>
          </a-list-item-meta>
          <article-list-content :description="item.description" :owner="item.owner" :avatar="item.avatar" :href="item.href" :updateAt="item.updatedAt" />
        </a-list-item>
        <div slot="footer" v-if="data.length > 0" style="text-align: center; margin-top: 16px;">
          <a-button @click="loadMore" :loading="loadingMore">{{ $t('search.article.load more') }}</a-button>
        </div>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import { TagSelect, StandardFormRow, ArticleListContent } from '@/components'
import IconText from './components/IconText'
import { currentLang, i18nRender } from '@/locales'

const TagSelectOption = TagSelect.Option

const owners = [
  {
    id: 'wzj',
    name: 'search.article.Myself'
  },
  {
    id: 'wjh',
    name: 'search.article.Wu Jiahao'
  },
  {
    id: 'zxx',
    name: 'search.article.Zhou Xingxing'
  },
  {
    id: 'zly',
    name: 'search.article.Zhao Liying'
  },
  {
    id: 'ym',
    name: 'search.article.Yao Ming'
  }
]

export default {
  components: {
    TagSelect,
    TagSelectOption,
    StandardFormRow,
    ArticleListContent,
    IconText
  },
  data () {
    return {
      loading: true,
      loadingMore: false,
      data: [],
      form: this.$form.createForm(this)
    }
  },
  mounted () {
    this.getList()
    this.$store.watch(() => this.$store.getters.langObj, () => {
      this.getList()
    })
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    getList () {
      const url = `${currentLang.isoCode}/list/article`
      this.$http.get(url).then(res => {
        console.log('res', res)
        this.data = res.result
        this.loading = false
      })
    },
    loadMore () {
      this.loadingMore = true
      const url = `${currentLang.isoCode}/list/article`
      this.$http.get(url).then(res => {
        this.data = this.data.concat(res.result)
      }).finally(() => {
        this.loadingMore = false
      })
    },
    setOwner () {
      const { form: { setFieldsValue } } = this
      setFieldsValue({
        owner: ['wzj']
      })
    }
  },
  computed: {
    owners () {
      return owners.map(x => Object.assign({}, x, { 'name': i18nRender(x.name) }))
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-components-tag-select {
  /deep/ .ant-pro-tag-select .ant-tag {
    margin-right: 24px;
    padding: 0 8px;
    font-size: 14px;
  }
}

.list-articles-trigger {
  margin-left: 12px;
}
</style>
