<template>
  <a-list itemLayout="horizontal">
    <a-list-item>
      <a-list-item-meta>
        <template v-slot:title>
          <a>{{ $t('accountsetting.custom.Stylecolor') }}</a>
        </template>
        <template v-slot:description>
          <span>
            {{ $t('accountsetting.custom.Overall') }}
          </span>
        </template>
      </a-list-item-meta>
      <template v-slot:actions>
        <a-switch :checkedChildren="$t('accountsetting.custom.Dark')" :unCheckedChildren="$t('accountsetting.custom.white')" :defaultChecked="navTheme === 'dark' && true || false" @change="onChange" />
      </template>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template v-slot:title>
          <a>{{ $t('accountsetting.custom.Themecolor') }}</a>
        </template>
        <template v-slot:description>
          <span>
            {{ $t('accountsetting.custom.Pagestyle') }} <a>{{ colorFilter(primaryColor) }}</a>
          </span>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
import { colorList } from '@/components/SettingDrawer/settingConfig'
import { baseMixin } from '@/store/app-mixin'
import { NAV_THEME, TOGGLE_NAV_THEME } from '@/store/mutation-types'
import { i18nRender } from '@/locales'

const themeMap = {
  'dark': 'accountsetting.custom.Dark',
  'light': 'accountsetting.custom.white'
}

export default {
  mixins: [baseMixin],
  data () {
    return {
    }
  },
  filters: {
    themeFilter (theme) {
      return i18nRender(themeMap[theme])
    }
  },
  methods: {
    colorFilter (color) {
      const c = colorList().find(o => o.color === color)
      return c && c.key
    },

    onChange (checked) {
      if (checked) {
        this.$store.commit(TOGGLE_NAV_THEME, NAV_THEME.DARK)
      } else {
        this.$store.commit(TOGGLE_NAV_THEME, NAV_THEME.LIGHT)
      }
    }
  }
}
</script>
