<template>
  <div class="echarts">
    <h3>Eharts 表格制作</h3>
    <div id="bedroom"></div>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  data () {
    return {
      chart: null,
      opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好'],
      opinionData: [
        {value: 26, name: '学习氛围差'},
        {value: 31, name: '学习氛围一般'},
        {value: 8, name: '学习氛围很好'}
      ]
    }
  },
  methods: {
    drawPie (id) {
      this.chart = this.$echarts.init(document.getElementById(id))
      this.chart.setOption({
        title: {
          text: '寝室学习氛围情况调查',
          left: 'center',
          top: 10,
          textStyle: {
            fontSize: 24,
            fontFamily: 'Helvetica',
            fontWeight: 400
          }
        },
        tooltip: {
          trigger: 'item',
          formatte: '{b}: {c} ({d}%)'
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            dataView: {}
          },
          right: 15,
          top: 10
        },
        legend: {
          orient: 'vertical',
          left: 5,
          top: 10,
          data: this.opinion
        },
        series: [
          {
            name: '寝室学习氛围',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '24',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.opinionData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffset: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawPie('bedroom')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#bedroom {
  width: 800px;
  height: 600px;
}   
</style>
