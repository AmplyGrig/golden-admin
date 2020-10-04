<template>
<v-container
        class="ma-8 main-body"
        fluid
        dark
      >
      <v-row class="px-3">
      <div class="logo-page">
              <v-list-item-content>
                <v-list-item-title>Главная</v-list-item-title>
                <v-list-item-subtitle>Основные показатели</v-list-item-subtitle>
              </v-list-item-content>
      </div>
    </v-row>
    <v-row class="px-8"> 
      <v-col
      cols="12"
      md = "8"
      >
        <line-chart class="chart-container" :chart-data="datacollection" :options="options"></line-chart>
      </v-col>
      <v-col class="stat" cols="12" md = "4">
        <div class="numStat">
          <p>85125</p>
          <span>руб. дохода от реферальной программы</span>
        </div>
        <div class="numStat">
          <p>129</p>
          <span>Пользователей реферальной программы</span>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-8">
    <div class="logo-page">
              <v-list-item-content>
                <v-list-item-subtitle>Обращения в техническую поддержку</v-list-item-subtitle>
              </v-list-item-content>
      </div>
    </v-row>
    <v-row class="px-8">
        <v-list  class="techinmain mr-8 pr-8" color="transparent">
                    <v-list-item  link to="tech" class="settings-refs">
                    <v-list-item-content>
                        <v-list-item-title>
                          <div>
                            <p>ФИО</p>
                            <span>Последнее обновление</span>
                          </div>
                        </v-list-item-title>
                    </v-list-item-content>
                                    <v-list-item-action>
                        <v-icon color="white" x-large>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                    </v-list-item>
                </v-list>
    </v-row>
</v-container>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        monthNames :["янв", "фев", "мар", "апр", "май", "июн",
              "июл", "авг", "сен", "окт", "ноя", "дек"
        ],
        datacollection: null,
        options:null
      }
    },
    mounted () {
      this.fillData()
    },
     created: function(){
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: this.getMonths(),
          datasets: [
            {
              type: "line",
              label: 'Доход от реферальных ссылок, тыс.руб.',
              data: [0,1,5,3,2,4,4,3,2,3,1,5],
              borderColor: ['#FFC700'],
              pointBackgroundColor :'#FFC700',
              pointRadius: 5
               
            }
          ]
        },
        this.options =  {
           responsive: true,
            lineTension: 1,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                  stepSize: 5,
                  max: 30,
                }
              }]
            }
          }
      },
      getMonths: function() {
        var date = new Date();
        var months = [];
        for (var i = 0; i < 7; i++) {
          months.push(this.monthNames[date.getMonth()]);
          date.setMonth(date.getMonth() - 1)
        }
        return months.reverse();
      }
    }
  }
</script>

<style>
.chart-container {
    max-height: 55vh;
    position:relative;
}

.numStat p {
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
    margin: 0;
}
.numStat:first-of-type  {
  margin-bottom:20px;
}
.numStat span {
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
}
.stat {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
.techinmain p {
font-weight: bold;
font-size: 15px;
line-height: 19px;
margin: 0;
}
.techinmain span{
font-weight: normal;
font-size: 13px;
line-height: 15px;
}
</style>