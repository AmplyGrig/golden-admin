<template>
  <v-app>
    <Leftbar/>
    <Header/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Leftbar from './components/Leftbar';

export default {
  name: 'App',

  components: {
    Header,
    Leftbar
  },

  data: () => ({
    //
  }),
  created () {
      this.$vuetify.theme.dark = true
    },
};
</script>
<style>
@font-face {
font-family: 'Qanelas Regular';
src: url('/assets/fonts/Qanelas-Regular.eot');
src: url('/assets/fonts/Qanelas-Regular.eot?#iefix') format('embedded-opentype'),
url('/assets/fonts/Qanelas-Regular.woff') format('woff'),
url('/assets/fonts/Qanelas-Regular.ttf') format('truetype');
font-weight: normal;
font-style: normal;
}
@font-face {
  font-family: "Novatny Bold";
  src: url('assets/fonts/NovatnyBold.otf');
}
.v-toolbar__title{
  font-family:Novatny Bold!important;
  font-size:30px;
  color:#FFC700!important;
}
#app{
  background: black;
  padding: 0,20px;
}
.mainmenu *,#app *{
  color: white;
  font-family:Qanelas Regular;
}

</style>
