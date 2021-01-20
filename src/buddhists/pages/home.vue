<script lang="ts">
import Vue from 'vue';
import store from '@/buddhists/store/index';
import LuohaoDrawer from 'common/components/luohao-drawer.vue';
import { Chart } from '@antv/g2';
const Drawer = Vue.extend(LuohaoDrawer)
export default {
  name: 'home',
  components: {
    LuohaoDrawer
  },
  data() {
    return {
      dynasties: [
        {
          name: '秦朝',
          start: -221,
          end: -207
        },
        {
          name: '西汉',
          start: 202,
          end: 8
        },
        {
          name: '东汉',
          start: 25,
          end: 220
        },
        {
          name: '西晋',
          start: 266,
          end: 316
        },
        {
          name: '东晋',
          start: 317,
          end: 420
        },
        {
          name: '隋朝',
          start: 581,
          end: 618
        },
        {
          name: '唐朝',
          start: 618,
          end: 907
        },
        {
          name: '北宋',
          start: 960,
          end: 1127
        },
        {
          name: '南宋',
          start: 1127,
          end: 1279
        },
        {
          name: '元朝',
          start: 1271,
          end: 1368
        },
        {
          name: '明朝',
          start: 1368,
          end: 1644
        },
        {
          name: '清朝',
          start: 1644,
          end: 1911
        }
      ],
      towers: [
        {
          name: '须弥塔',
          dynasty: '唐代',
          year: 680,
          location: '河北正定',
          style: '',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Xumi_Pagoda_1.jpg/450px-Xumi_Pagoda_1.jpg',
          temple: '开元寺'
        },
        {
          name: '琉璃塔',
          dynasty: '宋代',
          year: 1000,
          location: '河南开封',
          style: '',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg/81px-%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg',
          temple: '开宝寺'
        },
        {
          name: '凌霄塔',
          dynasty: '金代',
          year: 1100,
          location: '河北正定',
          style: '',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lingxiaopagodazhengding.jpg/90px-Lingxiaopagodazhengding.jpg',
          temple: ''
        },
        {
          name: '振风塔',
          dynasty: '明代',
          year: 1300,
          location: '安徽安庆',
          style: '',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Zhenfeng_Pagoda_2.JPG/90px-Zhenfeng_Pagoda_2.JPG',
          temple: ''
        },
        {
          name: '万松老人塔',
          dynasty: '清代',
          year: 1700,
          location: '北京',
          style: '',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Wan_song_monk_pagoda01.jpg/82px-Wan_song_monk_pagoda01.jpg',
          temple: ''
        }
      ]
    }
  },
  methods: {
    openDrawer() {
      const hooker = this.getContainer();
      const options = {
        width: 80,
        visible: true,
        container: '.container'
      };
      let drawer = new Drawer({
        store: store,
        data: options
      });
      drawer.$mount();
      drawer.$on('close', function() {
        drawer.$destroy();
        drawer = null;
      });
      document.body.appendChild(drawer.$el);
    },
    handleClik() {
      this.openDrawer();
    },
    getContainer() {
      return document.querySelector('.container');
    },
    createChart() {
      const chart = new Chart({
        container: 'chart',
        visible: true,
        autoFit: true,
        padding: [40, 40, 40, 40]
      });
      return chart;
    },
    addLineView(chart) {
      // 时间线视图
      const datas = this.towers.map(elem => {
        return Object.assign(elem, {
          value: 0
        });
      });
      const lineView = chart.createView({
        id: 'line-ciew',
        visible: true,
      });
      lineView.line().position('year*value').style({
        stroke: '#969696'
      });
      lineView.axis('value', false);
      lineView.tooltip(false);
      lineView.data(datas);
    },
    addPointView(chart: Chart) {
      const datas = this.towers.map(elem => elem);
      const pointView = chart.createView({
        id: 'point-view',
        visible: true,
      });
      pointView.point().position('year*name');
      pointView.axis('year', false);
      pointView.axis('name', false);
      pointView.data(datas);
    }
  },
  render(h) {
    return h('div', {
      class: {
        container: true
      }
    }, [h('div', {
      attrs: {
        id: 'chart'
      },
      class: {
        chart: true
      }
    })]);
  },
  mounted() {
    const chart = this.createChart();
    this.addLineView(chart);
    this.addPointView(chart);
    this.chart = chart;
    this.chart.render();
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>