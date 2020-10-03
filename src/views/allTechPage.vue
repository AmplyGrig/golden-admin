<template>
  <v-container
        fluid
        dark
      >
      <v-row class="px-8">
      <div class="logo-page back">
              <v-list-item-content>
              <v-list  class="back-button mr-2 " color="transparent">
                    <v-list-item  link to="main" class="settings-refs">
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
        <v-col cols="12" md="10" style="display:flex">
          <v-list-item class="grow tech-part">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Имя Фамилия</v-list-item-title>
          <v-list-item-subtitle>Вт. 5 ноя</v-list-item-subtitle>
        </v-list-item-content>
        <v-icon color="white" x-large>mdi-chevron-right</v-icon>
        </v-list-item >
              <v-list-item class="grow tech-part">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Имя Фамилия</v-list-item-title>
          <v-list-item-subtitle>Вт. 5 ноя</v-list-item-subtitle>
        </v-list-item-content>
        <v-icon color="white" x-large>mdi-chevron-right</v-icon>
        </v-list-item >
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
.logo-page.back .v-list-item__content > * {
    flex: auto;
}
.logo-page.back .v-list-item__title {
    margin: 0;
}
.tech-part {
    display: flex;
    max-width: 50%;
}
</style>