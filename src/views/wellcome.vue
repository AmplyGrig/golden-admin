<template>
  <v-container
        class="fill-height"
        fluid
        dark
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="7"
            md="6"
          >
          <v-card flat dark color="transparent">
          <h1 class="page-title" style="text-align: center;">Добро пожаловать</h1>
          </v-card>
          </v-col>
        </v-row>

        

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

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
font-family: 'Qanelas Regular';
src: url('../assets/fonts/Qanelas-Regular.eot');
src: url('../assets/fonts/Qanelas-Regular.eot?#iefix') format('embedded-opentype'),
url('../assets/fonts/Qanelas-Regular.woff') format('woff'),
url('../assets/fonts/Qanelas-Regular.ttf') format('truetype');
font-weight: normal;
font-style: normal;
}
.cond{
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
}
.page-title{
  font-family: Qanelas Regular!important;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 42px;
}
</style>