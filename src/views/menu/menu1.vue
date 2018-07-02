<template>
  <div class="login-container">
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>

<script>
  import charts from '@/utils/chart.js'
  import businessOrderApi from '@/api/businessOrder'
  export default {
    name: 'Menu1',
    data() {
      return {
        pageName: '菜单1',
        xData:[],
        xData:[]
      }
    },
  mounted(){
    this.drawLine();
  },
  methods: {

    drawLine(){
      businessOrderApi.consumeStatistics().then(res=>{
        console.log(res.data);
      this.xData = res.data.data.xData;
      this.yData = res.data.data.yData;
      let titleStr =  res.data.data.titleStr;
//      let pointline = document.querySelector('.chartright');
      let pointline = document.getElementById('myChart');
      charts.pointline(pointline,this.xData,this.yData,titleStr);
    })
    },
  }
  }
</script>

