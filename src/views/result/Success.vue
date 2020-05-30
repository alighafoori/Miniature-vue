<template>
  <a-card :bordered="false">
    <a-result status="success" :sub-title="description" :title="title">
      <template #extra>
        <a-button type="primary">{{ $t('success.Back to list') }}</a-button>
        <a-button style="margin-left: 8px">{{ $t('success.View project') }}</a-button>
        <a-button style="margin-left: 8px">{{ $t('success.print') }}</a-button>
      </template>
      <div class="content">
        <div style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 20px;">{{ $t('success.project name') }}</div>
        <a-row style="margin-bottom: 16px">
          <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
            <span style="color: rgba(0, 0, 0, 0.85)">{{ $t('success.ProjectID') }}：</span>
            20180724089
          </a-col>
          <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
            <span style="color: rgba(0, 0, 0, 0.85)">{{ $t('success.principal') }}：</span>
            {{ $t('success.Who is Qu Lili?') }}
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
            <span style="color: rgba(0, 0, 0, 0.85)">{{ $t('success.Effective') }}：</span>
            2016-12-12 ~ 2017-12-12
          </a-col>
        </a-row>
        <a-steps :current="1" :direction="isMobile && directionType.vertical || directionType.horizontal" progressDot>
          <a-step >
            <span style="font-size: 14px" slot="title">{{ $t('success.Create project') }}</span>
            <template slot="description">
              <div style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;" slot="description" >
                <div style="margin: 8px 0 4px">
                  {{ $t('success.Qu Lili') }}
                  <a-icon style="margin-left: 8px" type="dingding-o" />
                </div>
                <div>2016-12-12 12:32</div>
              </div>
            </template>
          </a-step>
          <a-step :title="$t('success.Departmental')">
            <span style="font-size: 14px" slot="title">{{ $t('success.Departmental') }}</span>
            <template slot="description">
              <div style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;" slot="description" >
                <div style="margin: 8px 0 4px">
                  {{ $t('success.Zhou Maomao') }}
                  <a-icon style="margin-left: 8px; color: #00A0E9" type="dingding-o" />
                </div>
                <div><a href="">{{ $t('success.Hurry') }}</a></div>
              </div>
            </template>
          </a-step>
          <a-step :title="$t('success.Financial review')">
            <span style="font-size: 14px" slot="title">{{ $t('success.Financial review') }}</span>
          </a-step>
          <a-step :title="$t('success.carry out')" >
            <span style="font-size: 14px" slot="title">{{ $t('success.carry out') }}</span>
          </a-step>
        </a-steps>
      </div>
    </a-result>
  </a-card>
</template>

<script>
import { baseMixin } from '@/store/app-mixin'
import { i18nRender } from '@/locales'
const directionType = {
  horizontal: 'horizontal',
  vertical: 'vertical'
}

export default {
  name: 'Success',
  mixins: [baseMixin],
  data () {
    // this.directionType = directionType
    return {
      directionType: directionType
    }
  },
  computed: {
    title () {
     return i18nRender('success.title')
    },
      description () {
        return i18nRender('success.description')
    }
  }
}
</script>
