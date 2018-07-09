<template>
  <div class="dashboard-analysis">
    <a-row class="row-layout" :gutter="24">
      <a-col :span="6">
        <div id="analysis-mini-area" class="analysis-first-row">
          <mini-area :data="miniAreaData" :height="50" :width="miniWidth" chartId="mini-area-1">
          </mini-area>
        </div>
      </a-col>
      <a-col :span="6">
        <div id="analysis-mini-area" class="analysis-first-row">
          <mini-area :data="miniAreaData" :height="50" :width="miniWidth" chartId="mini-area-2">
          </mini-area>
        </div>
      </a-col>
      <a-col :span="6">
        <div id="analysis-mini-area" class="analysis-first-row">
          <mini-area :data="miniAreaData" :height="50" :width="miniWidth" chartId="mini-area-3">
          </mini-area>
        </div>
      </a-col>
      <a-col :span="6">
        <div id="analysis-mini-area" class="analysis-first-row">
          <mini-area :data="miniAreaData" :height="50" :width="miniWidth" chartId="mini-area-4">
          </mini-area>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import moment from 'moment';
import miniArea from '@/components/chart/mini-area/index';

export default {
  name: 'dashboard-analysis',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    miniArea,
  },
  data() {
    return {
      miniAreaData: [],
      miniWidth: 200,
    };
  },
  watch: {
    collapsed() {
      this.setWidth('analysis-mini-area', 'miniWidth');
    },
  },
  methods: {
    setWidth(id, name) {
      setTimeout(() => {
        const dom = document.getElementById(id);
        if (dom) {
          this[name] = dom.clientWidth;
        }
      }, 300);
    },
    getMiniAreaData() {
      const beginDay = new Date().getTime();
      for (let i = 0; i < 20; i += 1) {
        this.miniAreaData.push({
          date: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
          value: Math.floor(Math.random() * 100) + 10,
        });
      }
    },
  },
  created() {
    this.setWidth('analysis-mini-area', 'miniWidth');
    this.getMiniAreaData();
  },
};
</script>

<style lang="less" scoped>
@import './analysis.less';
</style>
