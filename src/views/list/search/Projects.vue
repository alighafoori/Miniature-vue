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

    <div class="ant-pro-pages-list-projects-cardList">
      <a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card class="ant-pro-pages-list-projects-card" hoverable>
            <img slot="cover" :src="item.cover" :alt="item.title" />
            <a-card-meta :title="item.title">
              <template slot="description">
                <ellipsis :length="50">{{ item.description }}</ellipsis>
              </template>
            </a-card-meta>
            <div class="cardItemContent">
              <span>{{ item.updatedAt | fromNow }}</span>
              <div class="avatarList">
                <avatar-list size="mini">
                  <avatar-list-item
                    v-for="(member, i) in item.members"
                    :key="`${item.id}-avatar-${i}`"
                    :src="member.avatar"
                    :tips="member.name"
                  />
                </avatar-list>
              </div>
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
    StandardFormRow
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
