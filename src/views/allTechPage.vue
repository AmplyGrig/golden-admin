<template>
  <v-container
        fluid
        dark
        class="ma-8"
      >
      <v-row class="px-3">
      <div class="logo-page back">
              <v-list-item-content>
              <v-list  class="back-button mr-2 " color="transparent">
                    <v-list-item  link to="/main" class="settings-refs">
                    <v-icon color="white" >mdi-chevron-left</v-icon>
                    <v-list-item-content>
                        Главная
                    </v-list-item-content>
                                    <v-list-item-action>
                        
                    </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-list-item-title>Техническая поддержка</v-list-item-title>
                
              </v-list-item-content>
      </div>
    </v-row>
    <v-row class="px-8 mr-8">
        <v-col cols="12" md="10" >

        <v-row>
          <v-col v-for="(item,i) in tech" :key="i" cols="12" md="6">
          <v-list-item   class="grow tech-part" :to="'/tech/'+item.id" >
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            
            :src="item.user_image"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{item.name +' '+ item.surname}}</v-list-item-title>
          <v-list-item-subtitle>{{item.date}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-icon color="white" x-large>mdi-chevron-right</v-icon>
        </v-list-item >
        </v-col>
        </v-row>
        </v-col>
     </v-row>
         

  </v-container>
</template>

<script>
import axiosAuth from "@/api/axios-auth"
export default {
  data: () => ({
    tech: []
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
      axiosAuth.get("/get-tech-request").then((response) => {
        console.log(response.data)
        // response.data.users.forEach(element => {
        //   // let date = new Date(element['change_time'])
        //   // element['change_time'] = this.formatDate(date)
        // });
        this.tech = response.data.results

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
.logo-page.back .v-list-item__content > * {
    flex: auto;
}
.logo-page.back .v-list-item__title {
    margin: 0;
}
.tech-part {
    display: flex;
}
</style>