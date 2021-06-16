<script>
const Echarts = require("echarts");
export default /*#__PURE__*/{
  name: 'TrinityDashboardSample', // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null,
      },
    };
  },
  computed: {
    changedBy() {
      const { message } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    },
  },
  mounted() {
    this.draw(); d
  },
  methods: {
    draw() {
      let myChart = Echarts.init(document.getElementById('main'));
      // 指定图表的配置项和数据
      let option = {
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    increment(arg) {
      const amount = (typeof arg !== 'number') ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement(arg) {
      const amount = (typeof arg !== 'number') ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    },
  },
};
</script>

<template>
  <div class="trinity-dashboard-sample">
    <p>The counter was {{ changedBy }} to <b>{{ counter }}</b>.</p>
    <button @click="increment">
      Click +1
    </button>
    <button @click="decrement">
      Click -1
    </button>
    <button @click="increment(5)">
      Click +5
    </button>
    <button @click="decrement(5)">
      Click -5
    </button>
    <button @click="reset">
      Reset
    </button>

    <div id="main"></div>
  </div>
</template>

<style scoped>
  .trinity-dashboard-sample {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .trinity-dashboard-sample p {
    margin: 0 0 1em;
  }

  #main {
    width: 500px;
    height: 500px;
  }
</style>
