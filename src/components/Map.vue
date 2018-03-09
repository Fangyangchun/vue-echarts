<template>
  <div class="Map">
    <h3>中国地图制作</h3>
    <div id="bedroom"></div>
  </div>
</template>

<script>
import 'echarts/map/js/china.js'
export default {
  name: 'Map',
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
    drawMap (id) {
      this.chart = this.$echarts.init(document.getElementById(id))
      this.chart.setOption({
        title: {
          text: 'iphone销量',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['iphone3', 'iphone4', 'iphone5']
        },
        visualMap: {
          min: 0,
          max: 2500,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],
          calculable: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {name: '天津', value: Math.round(Math.random() * 1000)},
              {name: '北京', value: Math.round(Math.random() * 1000)},
              {name: '上海', value: Math.round(Math.random() * 1000)},
              {name: '重庆', value: Math.round(Math.random() * 1000)},
              {name: '河北', value: Math.round(Math.random() * 1000)},
              {name: '河南', value: Math.round(Math.random() * 1000)},
              {name: '云南', value: Math.round(Math.random() * 1000)},
              {name: '辽宁', value: Math.round(Math.random() * 1000)},
              {name: '黑龙江', value: Math.round(Math.random() * 1000)},
              {name: '湖南', value: Math.round(Math.random() * 1000)},
              {name: '安徽', value: Math.round(Math.random() * 1000)},
              {name: '山东', value: Math.round(Math.random() * 1000)},
              {name: '新疆', value: Math.round(Math.random() * 1000)},
              {name: '江苏', value: Math.round(Math.random() * 1000)},
              {name: '浙江', value: Math.round(Math.random() * 1000)},
              {name: '江西', value: Math.round(Math.random() * 1000)},
              {name: '湖北', value: Math.round(Math.random() * 1000)},
              {name: '广西', value: Math.round(Math.random() * 1000)},
              {name: '甘肃', value: Math.round(Math.random() * 1000)},
              {name: '山西', value: Math.round(Math.random() * 1000)},
              {name: '内蒙古', value: Math.round(Math.random() * 1000)},
              {name: '陕西', value: Math.round(Math.random() * 1000)},
              {name: '吉林', value: Math.round(Math.random() * 1000)},
              {name: '福建', value: Math.round(Math.random() * 1000)},
              {name: '贵州', value: Math.round(Math.random() * 1000)},
              {name: '广东', value: Math.round(Math.random() * 1000)},
              {name: '青海', value: Math.round(Math.random() * 1000)},
              {name: '西藏', value: Math.round(Math.random() * 1000)},
              {name: '四川', value: Math.round(Math.random() * 1000)},
              {name: '宁夏', value: Math.round(Math.random() * 1000)},
              {name: '海南', value: Math.round(Math.random() * 1000)},
              {name: '台湾', value: Math.round(Math.random() * 1000)},
              {name: '香港', value: Math.round(Math.random() * 1000)},
              {name: '澳门', value: Math.round(Math.random() * 1000)}
            ]
          },
          {
            name: 'iphone4',
            type: 'map',
            mapType: 'china',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {name: '北京', value: Math.round(Math.random() * 1000)},
              {name: '天津', value: Math.round(Math.random() * 1000)},
              {name: '上海', value: Math.round(Math.random() * 1000)},
              {name: '重庆', value: Math.round(Math.random() * 1000)},
              {name: '河北', value: Math.round(Math.random() * 1000)},
              {name: '安徽', value: Math.round(Math.random() * 1000)},
              {name: '新疆', value: Math.round(Math.random() * 1000)},
              {name: '浙江', value: Math.round(Math.random() * 1000)},
              {name: '江西', value: Math.round(Math.random() * 1000)},
              {name: '山西', value: Math.round(Math.random() * 1000)},
              {name: '内蒙古', value: Math.round(Math.random() * 1000)},
              {name: '吉林', value: Math.round(Math.random() * 1000)},
              {name: '福建', value: Math.round(Math.random() * 1000)},
              {name: '广东', value: Math.round(Math.random() * 1000)},
              {name: '西藏', value: Math.round(Math.random() * 1000)},
              {name: '四川', value: Math.round(Math.random() * 1000)},
              {name: '宁夏', value: Math.round(Math.random() * 1000)},
              {name: '香港', value: Math.round(Math.random() * 1000)},
              {name: '澳门', value: Math.round(Math.random() * 1000)}
            ]
          },
          {
            name: 'iphone5',
            type: 'map',
            mapType: 'china',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {name: '北京', value: Math.round(Math.random() * 1000)},
              {name: '天津', value: Math.round(Math.random() * 1000)},
              {name: '上海', value: Math.round(Math.random() * 1000)},
              {name: '广东', value: Math.round(Math.random() * 1000)},
              {name: '台湾', value: Math.round(Math.random() * 1000)},
              {name: '香港', value: Math.round(Math.random() * 1000)},
              {name: '澳门', value: Math.round(Math.random() * 1000)}
            ]
          }
        ]
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawMap('bedroom')
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
  width: 700px;
  height: 500px;
} 
</style>
