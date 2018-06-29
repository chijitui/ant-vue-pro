<template>
  <div :id="chartId"></div>
</template>

<script>
import G2 from '@antv/g2';

export default {
  name: 'mini-area',
  props: {
    data: Array,
    height: {
      type: Number,
      default: 100,
    },
    color: {
      type: String,
      default: '#1890FF',
    },
    hideLine: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chart: null,
      chartId: `${+new Date()}`,
    };
  },
  watch: {
    height(_height) {
      this.chart.changeHeight(_height);
    },
    data(_data) {
      this.chart.changeData(_data);
    },
  },
  mounted() {
    this.chart = new G2.Chart({
      container: this.chartId,
      height: this.height,
      forceFit: true,
      padding: 'auto',
    });
    this.chart.source(this.data);
    this.chart.axis(false);
    this.chart.tooltip({
      showTitle: false,
      itemTpl: '<li style="font-weight:600"><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{title}：{value}</li>',
    });
    if (!this.hideLine) {
      this.chart.line().position('date*value').color(this.color).shape('smooth');
    }
    this.chart.area().position('date*value').color(this.color).shape('smooth');
    this.chart.render();
  },
};
</script>
