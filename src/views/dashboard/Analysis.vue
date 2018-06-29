<template>
  <div class="dashboard-analysis">
    <a-row class="row-layout">
      <div class="analysis-first-row">
        <mini-area :data="miniAreaData" :height="50"></mini-area>
      </div>
    </a-row>
  </div>
</template>

<script>
import moment from 'moment';
import miniArea from '@/components/chart/mini-area/index';

export default {
  name: 'dashboard-analysis',
  components: {
    miniArea,
  },
  data() {
    return {
      miniAreaData: [],
    };
  },
  methods: {
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
    this.getMiniAreaData();
  },
};
</script>

<style lang="less" scoped>
@import './analysis.less';
</style>
