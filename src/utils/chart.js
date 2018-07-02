import echarts from 'echarts'
const chartfunction = {
  pointline(dom, xData,yData,titleStr) {
  let option = {
    xAxis: {
      type: 'category',
      data: xData
    },
    yAxis: {
      type: 'value',
      minInterval : 1
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    title: {
      text: titleStr,
      textStyle: {
        fontWeight: 'normal',
        fontSize: 14,
      }
    },
    series: [{
      data: yData,
      type: 'line'
    }]
  }
  let chart = echarts.init(dom)
  chart.setOption(option)
  return chart
}
}

export default chartfunction
