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

        <standard-form-row :title="$t('search.article.Other options')" grid last>
          <a-row>
            <a-col :lg="8" :md="10" :sm="10" :xs="24">
              <a-form-item :wrapper-col="{ sm: { span: 16 }, xs: { span: 24 } }" :label="$t('search.project.Author')">
                <a-select
                  style="max-width: 200px; width: 100%;"
                  mode="multiple"
                  :placeholder="$t('search.article.Unlimited')"
                  v-decorator="['author']"
                  @change="handleChange"
                >
                  <a-select-option value="lisa">{{ $t('search.project.Wang Zhaojun') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :lg="8" :md="10" :sm="10" :xs="24">
              <a-form-item :wrapper-col="{ sm: { span: 16 }, xs: { span: 24 } }" :label="$t('search.article.Praise of')">
                <a-select
                  style="max-width: 200px; width: 100%;"
                  :placeholder="$t('search.article.Unlimited')"
                  v-decorator="['rate']"
                >
                  <a-select-option value="good">{{ $t('search.article.excellent') }}</a-select-option>
                  <a-select-option value="normal">{{ $t('search.project.normal') }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </standard-form-row>
      </a-form>
    </a-card>

    <div class="ant-pro-pages-list-applications-filterCardList">
      <a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }" style="margin-top: 24px;">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card :body-style="{ paddingBottom: 20 }" hoverable>
            <a-card-meta :title="item.title">
              <template slot="avatar">
                <a-avatar size="small" :src="item.avatar"/>
              </template>
            </a-card-meta>
            <template slot="actions">
              <a-tooltip :title="$t('search.aplication.download')">
                <a-icon type="download" />
              </a-tooltip>
              <a-tooltip :title="$t('advancedform.table.edit')">
                <a-icon type="edit" />
              </a-tooltip>
              <a-tooltip :title="$t('search.aplication.shareit')">
                <a-icon type="share-alt" />
              </a-tooltip>
              <a-dropdown>
                <a class="ant-dropdown-link">
                  <a-icon type="ellipsis" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </template>
            <div class="">
              <card-info active-user="100" new-user="999"></card-info>
            </div>
          </a-card>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { TagSelect, StandardFormRow, Ellipsis, AvatarList } from '@/components'
import CardInfo from './components/CardInfo'
import { currentLang } from '@/locales'
const TagSelectOption = TagSelect.Option
const AvatarListItem = AvatarList.AvatarItem

export default {
  components: {
    AvatarList,
    AvatarListItem,
    Ellipsis,
    TagSelect,
    TagSelectOption,
    StandardFormRow,
    CardInfo
  },
  data () {
    return {
      data: [],
      form: this.$form.createForm(this),
      loading: true
    }
  },
  filters: {
    fromNow (date) {
      return moment(date).fromNow()
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
      this.$http.get(url, { params: { count: 8 } }).then(res => {
        console.log('res', res)
        this.data = res.result
        this.loading = false
      })
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
.ant-pro-pages-list-projects-cardList {
  margin-top: 24px;

  /deep/ .ant-card-meta-title {
    margin-bottom: 4px;
  }

  /deep/ .ant-card-meta-description {
    height: 44px;
    overflow: hidden;
    line-height: 22px;
  }

  .cardItemContent {
    display: flex;
    height: 20px;
    margin-top: 16px;
    margin-bottom: -4px;
    line-height: 20px;

    > span {
      flex: 1 1;
      color: rgba(0,0,0,.45);
      font-size: 12px;
    }

    /deep/ .ant-pro-avatar-list {
      flex: 0 1 auto;
    }
  }
}
</style>
