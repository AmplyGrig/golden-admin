<template>
<v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="black"
      class="pl-8"
      flat
    >
      <v-list  class="mainmenu">
        <v-list-item  link to="main">
          <v-list-item-action>
            <v-icon color="white">mdi-home-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="lksettings">
          <v-list-item-action>
            <v-icon color="white">mdi-message-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Общение</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/course">
          <v-list-item-action>
            <v-icon color="white">mdi-book-open-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Обучение</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="user">
          <v-list-item-action>
            <v-icon color="white">mdi-account-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Профиль</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="settings">
          <v-list-item-action>
            <v-icon color="white">mdi-cog-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Настройки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon color="white">mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Log out</v-list-item-title>
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
    border-right: 1px solid white;
}
.mainmenu {
    padding-left: 40px;
}
</style>