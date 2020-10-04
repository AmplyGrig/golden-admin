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
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down">
              Название курса
              <v-btn icon color="indigo" class="pen-rewrite">
                <img src="@/assets/pen.svg">
              </v-btn>
            </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list  class="mainmenu" flat>
            <v-list-item  link to="lksettings">
              <v-list-item-content>
                <v-list-item-title>Название урока</v-list-item-title>
              </v-list-item-content>
              <v-btn icon color="indigo" class="pen-rewrite">
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

export default {
  components: {
  },
  beforeCreate() {
  },
  beforeDestroy() {
  }
};
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
</style>
