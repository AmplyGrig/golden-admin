<template>  
        <v-container
          class=" lk-body lk-admin"
          fluid
          >
          <div class="logoUsers">
              <v-list-item-content>Пользователи</v-list-item-content>
          </div>
              <v-row  class="mx-10" style="margin-top: 20px;">
                <v-text-field
                    v-model="search"
                    label="Поиск"
                    solo
                    class="rounded-pill"
                    prepend-inner-icon="mdi-magnify"
                    ></v-text-field>
              </v-row>

          <v-card  class="mx-8"
              width="100%"
              color="transparent"
              >
              <v-simple-table color="transparent" fixed-header >
                  <template v-slot:default>
                    <thead color="transparent"> 
                      <tr>
                        <th v-for="(column, index) in columns" :key="index">
                        <a href="#" @click="sortBy(column)" :class="{ active: sortKey === getsrc[column] }">
                          {{ column }}
                        </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  v-for="(item, index) in filteredList" :key="index">
                        <td>{{ item.user_name }}</td>
                        <td>{{ item.object_name }}
                        <td>{{ item.change_time }}
                        <td><v-btn   :to="'/lkadmin/' + item.object_id"  color="#232020" dark>Смотреть</v-btn></td>
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
    usersList: [{user_name:"qwerty",object_name:"qwerty",change_time:"10"}],
    sortKey: 'user_name',
    reverse: false,
    search: '',
    columns: [ 'Телефон', 'EMAIL', 'ФИО','Уровень доступа','Активность' ],
    getsrc: {'ФИО' : 'user_name', 'Название объекта' : 'object_name', 'Время изменения': 'change_time'}
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
        // console.log(response.data)
        // response.data.users.forEach(element => {
        //   // let date = new Date(element['change_time'])
        //   // element['change_time'] = this.formatDate(date)
        // });
        this.usersList = response.data.users
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
        return post.user_name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>