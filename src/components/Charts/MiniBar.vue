<template>
  <div class="antv-chart-mini">
    <div class="chart-wrapper" :style="{ height: 46 }">
      <v-chart :force-fit="true" :height="height" :data="data" :padding="[36, 5, 18, 5]">
        <v-tooltip />
        <v-bar position="x*y" />
      </v-chart>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { i18nRender, currentLang } from '../../locales'
const data = []
const beginDay = new Date().getTime()

for (let i = 0; i < 10; i++) {
  data.push({
    x: new Date(beginDay + 1000 * 60 * 60 * 24 * i),
    y: Math.round(Math.random() * 10)
  })
}

const tooltip = [
  'x*y',
  (x, y) => ({
    name: x,
    value: y
  })
]

const scale = [{
  dataKey: 'x',
  min: 2
}, {
  dataKey: 'y',
  title: 'miniarea.scale.title',
  min: 1,
  max: 30
}]

export default {
  name: 'MiniBar',
  data () {
    return {
      tooltip,
      height: 100
    }
  },
  computed: {
    scale () {
      const obj = [...scale]
      obj[1].title = i18nRender(obj[1].title)
      return obj
    },
    data () {
      return data.map(obj => Object.assign({}, obj, { x: currentLang.dateFormatter ? currentLang.dateFormatter(obj.x) : moment(obj.x).format('YYYY-MM-DD') }))
    }
  }
}
</script>

<style lang="less" scoped>
  @import "chart";
</style>
