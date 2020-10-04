<template>  
        <v-container
          class=" ma-8 lk-body lk-admin"
          fluid
          >
          <v-row class="px-3">
          <div class="logo-page">
          
              <v-list-item-content><v-list-item-title>Пользователи</v-list-item-title></v-list-item-content>
          </div>
          </v-row>
              <v-row  class="mr-10" style="margin-top: 20px;">
                <v-text-field
                    v-model="search"
                    label="Поиск"
                    solo
                    class="rounded-pill"
                    prepend-inner-icon="mdi-magnify"
                    ></v-text-field>
              </v-row>

          <v-card  class="mr-8 ml-3 table-tr"
              width="90%%"
              color="transparent"
              >
              <v-simple-table color="transparent" fixed-header dark >
                  <template v-slot:default>
                    <thead > 
                      <tr>
                        <th v-for="(column, index) in columns" :key="index" id="table-head">
                        <a href="#" @click="sortBy(column)" :class="{ active: sortKey === getsrc[column] }">
                          {{ column }}
                        </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  v-for="(item, index) in filteredList" :key="index" :to="'/users/' + item.object_id">
                       <td>{{ item.telephone }}
                       <td>{{ item.email }}
                      <td>{{ item.surname + ' '+ item.name +' '+ item.father }}</td>
                       <td>{{item.role_id}}</td>
                        <td>{{ item.activity }}</td>
                      </tr>
                    </tbody>
                  </template>
              </v-simple-table>
          </v-card>
        </v-container>
</template>
<script>
import axiosAuth from "@/api/axios-auth"
export default {
  data: () => ({
    usersList: [],
    sortKey: 'user_name',
    reverse: false,
    search: '',
    columns: [ 'Телефон', 'EMAIL', 'ФИО','Уровень доступа','Активность' ],
    getsrc: {'ФИО' : 'surename', 'Телефон' : 'telephone', 'EMAIL': 'email','Уровень доступа': 'role_id','Активность': 'activity'}
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
    getUserList(){
      axiosAuth.get("/get-users").then((response) => {
        console.log(response.data)
        // response.data.users.forEach(element => {
        //   // let date = new Date(element['change_time'])
        //   // element['change_time'] = this.formatDate(date)
        // });
        this.usersList = response.data.users
        
        for (const [key, value] of Object.entries(this.usersList)){
          this.usersList[key]['fullname'] = value.surname + ' '+ value.name +' '+ value.father
        }
      }).catch(error => {
        console.log(error)
      })
    },
    sortBy(sortKey) {
      this.reverse = (this.sortKey == this.getsrc[sortKey]) ? !this.reverse : false;
      this.sortKey = this.getsrc[sortKey];
    }
  },
  created(){
    this.getUserList()
  },
  computed: {
    sortedUsers() {
      const k = this.sortKey
      let tmp = this.usersList
      return tmp.sort((a, b) => {
        return (a[k] < b[k] ? -1 : a[k] > b[k] ? 1 : 0) * [ 1, -1 ][+this.reverse];
      });
    },
    filteredList() {
      return this.sortedUsers.filter(post => {
        return post.fullname.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style>
.logo-page .v-list-item__title {
    font-style: normal;
    font-weight: bold;
    font-size: 34px!important;
    line-height: 42px;
    margin-bottom: 30px;
}
.table-tr * {
    background: transparent!important;
    box-shadow: none!important;
}

#table-head {
    border-bottom: 1px solid white!important;
}
</style>