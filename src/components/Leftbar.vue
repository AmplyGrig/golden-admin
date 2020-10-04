<template>
<v-navigation-drawer
      app
      clipped
      color="black"
      class="pl-8"
      flat
    >
      <v-list  class="mainmenu">
        <v-list-item class="menu-list" link to="/main">
          <v-list-item-action>
              <div class="menu-item-logo home"></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Главная</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="menu-list" link to="/course">
          <v-list-item-action>
             <div class="menu-item-logo book"></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Обучение</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="menu-list" link to="/users">
          <v-list-item-action>
             <div class="menu-item-logo users"></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Пользователи</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  class="menu-list" link to="/chat">
          <v-list-item-action>
             <div class="menu-item-logo chat"></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Общение</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="menu-list" link to="/referal">
          <v-list-item-action>
             <div class="menu-item-logo referal"></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Реферальная <br> программа</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="menu-list" link to="/stat">
          <v-list-item-action>
             <div class="menu-item-logo stat-logo"></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Статистика</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="menu-list" link to="/profile">
          <v-list-item-action>
             <div class="menu-item-logo user"></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Профиль</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="menu-list" link to="/settings">
          <v-list-item-action>
             <div class="menu-item-logo settings"></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-title">Настройки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Leftbar',

    data: () => ({
      
    }),
  }
</script>

<style>
.v-navigation-drawer__content {
    border-right: 1px solid #ffffff29;
}
.mainmenu {
    padding-left: 40px;
}
.menu-item-logo{
    background-color: white;
     height: 50px;
     width:50px
   
}

.menu-list .v-list-item__action {
    margin-right: 15px!important;
}
a.v-list-item.v-list-item--link.menu-list.theme--dark {
    height: 50px;
}
.menu-item-logo.book{
  -webkit-mask: url('../assets/book.svg') no-repeat center;
  mask: url('../assets/book.svg') no-repeat center;
}
.menu-item-logo.home{
    -webkit-mask: url('../assets/Home.svg') no-repeat center;
  mask: url('../assets/Home.svg') no-repeat center;
}
.menu-item-logo.settings{
    -webkit-mask: url('../assets/settings.svg') no-repeat center;
  mask: url('../assets/settings.svg') no-repeat center;
}
.menu-item-logo.stat-logo{
    -webkit-mask: url('../assets/stat.svg') no-repeat center;
  mask: url('../assets/stat.svg') no-repeat center;
}
.menu-item-logo.referal{
    -webkit-mask: url('../assets/referal.svg') no-repeat center;
  mask: url('../assets/referal.svg') no-repeat center;
}
.menu-item-logo.user{
    -webkit-mask: url('../assets/User.svg') no-repeat center;
  mask: url('../assets/User.svg') no-repeat center;
}
.menu-item-logo.users{
    -webkit-mask: url('../assets/users.svg') no-repeat center;
  mask: url('../assets/users.svg') no-repeat center;
}
.menu-item-logo.chat{
    -webkit-mask: url('../assets/Chat.svg') no-repeat center;
  mask: url('../assets/Chat.svg') no-repeat center;
}
.menu-list {
    opacity:0.25;

}
.menu-list:before{
  width:0;
}
.menu-list.v-list-item--active{
  opacity:1;
}
.menu-list:hover{
   opacity:1;
       -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

</style>