<template>
  <v-container
        fluid
        dark
        class="ma-8"
      >
      <v-row class="px-3">
      <div class="logo-page">
              <v-list-item-content>
                <v-list-item-title>Настройки</v-list-item-title>
              </v-list-item-content>
      </div>
    </v-row>
        <v-row
        class="settings-body"
        >
          <v-col
            cols="12"
            md="5"
          >
          <v-card flat  color="transparent">
                <v-list-item-content>
                <v-list-item-title class="settings-subtitle">Уведомления</v-list-item-title>
              </v-list-item-content>
             <v-row class="px-3 mr-8 pr-8" justify="space-between" >
              <v-list-item-content> 
                  <v-list-item-subtitle class="settings-switch-text">Получать уведомления <br>
                    из категории “Все”</v-list-item-subtitle>
              </v-list-item-content>
              <v-switch v-model="switch2" inset flat color="white"></v-switch>
             </v-row>
            <v-row class="px-3 mr-8 pr-8" justify="space-between" >
              <v-list-item-content> 
                  <v-list-item-subtitle class="settings-switch-text">Получать уведомления <br>
                    из категории “Уроки”</v-list-item-subtitle>
              </v-list-item-content>
              <v-switch v-model="switch2" inset flat color="white"></v-switch>
             </v-row>
            <v-row class="px-3 mr-8 pr-8" justify="space-between" >
              <v-list-item-content> 
                  <v-list-item-subtitle class="settings-switch-text">Получать уведомления <br>
                    из категории “Чаты”</v-list-item-subtitle>
              </v-list-item-content>
              <v-switch v-model="switch2" inset flat color="white"></v-switch>
             </v-row>
            
          </v-card>
          </v-col>
            <v-col
            cols="12"
            md="1"
          >
               </v-col>
          <v-col
            cols="12"
            md="5"
          >
        <v-card flat color="transparent">
                        <v-list-item-content>
                <v-list-item-title class="settings-subtitle px-4">Прочее</v-list-item-title>
              </v-list-item-content>
                <v-list  class="settingsList mr-8 pr-8" color="transparent">
                    <v-list-item  link to="lksettings" class="settings-refs">
                    <v-list-item-content>
                        <v-list-item-title>Политика конфиденциальности</v-list-item-title>
                    </v-list-item-content>
                                    <v-list-item-action>
                        <v-icon color="white" x-large>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                    </v-list-item>
                    <v-list-item  link to="lksettings" class="settings-refs">
                    <v-list-item-content>
                        <v-list-item-title>Пользовательское соглашение</v-list-item-title>
                    </v-list-item-content>
                                    <v-list-item-action>
                        <v-icon color="white" x-large>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                    </v-list-item>
                                        <v-list-item  link to="lksettings" class="settings-refs">
                    <v-list-item-content>
                        <v-list-item-title>Правила использования</v-list-item-title>
                    </v-list-item-content>
                                    <v-list-item-action>
                        <v-icon color="white" x-large>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                    </v-list-item>
                </v-list>
          </v-card>
          </v-col>
          
        </v-row>
         

  </v-container>
</template>

<script>
  export default {
    name: 'mainPage',

    data: () => ({
    }),
  }
</script>
<style>
@font-face {
  font-family: "Novatny Bold";
  src: url('../assets/fonts/NovatnyBold.otf');
}
@font-face {
font-family: 'Qanelas Thin';
src: url('../assets/fonts/Qanelas-Thin.eot');
src: url('../assets/fonts/Qanelas-Thin.eot?#iefix') format('embedded-opentype'),
url('../assets/fonts/Qanelas-Thin.woff') format('woff'),
url('../assets/fonts/Qanelas-Thin.ttf') format('truetype');
font-weight: normal;
font-style: normal;
}
.head-logo{
font-family: Novatny Bold!important;
font-weight: bold!important;
font-size: 48px!important;
line-height: 48px!important;
text-align: center!important;
display: block!important;
color:#FFC700;
}
.head-sub-logo{
  font-family: Qanelas Thin!important;
  font-style: normal!important;
  font-weight: 300!important;
  font-size: 18px!important;
  line-height: 21px!important;
  text-align: center!important;
  color: #FFC700!important;
}
.logo-page .v-list-item__title {
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
.v-input--switch__track.theme--dark.white--text {
    color: #FFC700!important;
    opacity: 1!important;
}
.v-list-item__subtitle.settings-switch-text {
    font-size: 15px!important;
    line-height: 18px!important;
}
.v-list-item__title.settings-subtitle {
    font-size: 17px!important;
    line-height: 21px;
    font-weight: bold!important;
}
a.settings-refs.v-list-item.v-list-item--link.theme--dark {
    max-height: 21px!important;
    height: 21px!important;
     font-size: 15px!important;
}
.settings-body{
    width: 95%;
}


</style>