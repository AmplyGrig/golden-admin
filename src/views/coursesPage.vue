<template>
  <v-container
        class="ma-8 main-body"
        fluid
        dark

      >
    <v-row class="px-3">
      <div class="logo-page">
              <v-list-item-content>
                <v-list-item-title>Обучение</v-list-item-title>
                <v-list-item-subtitle>Курсы и уроки</v-list-item-subtitle>
              </v-list-item-content>
      </div>
    </v-row>
    <v-row class="px-4">
    <v-col>
    <v-expansion-panels color= "transparent" class="bg-transparent" flat>
      <v-expansion-panel
        v-for="(item,i) in courseList"
        :key="i"
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down">
              <a class="direct-link" :href="'/course/'+item.id">
              {{item.name}}
              </a>

              <v-btn icon color="indigo" class="pen-rewrite" :to="'/course/'+item.id+'/edit'">
                <img src="@/assets/pen.svg">
              </v-btn>
            </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list  class="mainmenu" flat>
            <v-list-item  v-for="(lesson,k) in item.lessons" :key="k" link :to="'/course/'+item.id+'/lesson/'+lesson.id">
              <v-list-item-content>
                <v-list-item-title>{{lesson.name}}</v-list-item-title>
              </v-list-item-content>
              <v-btn icon color="indigo" class="pen-rewrite" :to="'/course/'+item.id+'/lesson/'+lesson.id+'/edit'" >
                <img src="@/assets/pen.svg">
              </v-btn>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-col>
    <v-col 
    align="center"
    justify="center"
    >
      <v-list  class="mainmenu" width="300px" color= "transparent">
            <v-list-item  link to="new-course">
              <v-list-item-action>
                <v-icon color="white" large>mdi-plus</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Добавить курс</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item  link to="">
              <v-list-item-action>
                <v-icon color="white" large>mdi-upload</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Массовая загрузка</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
      </v-list>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axiosAuth from "@/api/axios-auth"
export default {
  data: () => ({
    courseList: []
  }),
  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
    },
    // formatDate(date){
    //   var dd = date.getDate();
    //   if (dd < 10) dd = '0' + dd;
    //   var mm = date.getMonth() + 1;
    //   if (mm < 10) mm = '0' + mm;
    //   var yy = date.getFullYear() 
    //   return dd + '.' + mm + '.' + yy;
    // },
    getCourseList(){
      axiosAuth.get("/get-course-list").then((response) => {
        console.log(response.data)
        // response.data.users.forEach(element => {
        //   // let date = new Date(element['change_time'])
        //   // element['change_time'] = this.formatDate(date)
        // });
        this.courseList = response.data.courses

      }).catch(error => {
        console.log(error)
      })
    }
  },
  created(){
    this.getCourseList()
  },
}
</script>

<style>
.logo-page .v-list-item__title {
    font-family: Qanelas;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 30px;
}
.logo-page .v-list-item__subtitle {
  font-family: Qanelas;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
}
.main-body *{
  background:transparent;
}
.v-expansion-panel-header__icon {
    margin: 0!important;
}
.v-expansion-panel-header {
    padding: 0!important;
}
.v-expansion-panel-content__wrap{
  padding:  0 0 0 50px;
}
.pen-rewrite {
    position: absolute;
    left: 100%;
}
.bg-transparent *{
  background:transparent!important;
}
.direct-link{
        max-width: 65%;
        text-decoration: none;
}

</style>
