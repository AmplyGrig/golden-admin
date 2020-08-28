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
          <h1 class="page-title">Вход в аккаунт</h1>
          <br>
          <br>
            <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Пароль"
            required
          ></v-text-field>
        </v-col>
      </v-row>


            <v-row
            align="end"
            justify="center"
            >
            <v-col
            cols="12"
            md="3"
          >
            <v-btn
              text
              color="white"
              absolute
              right
            >
              Забыли пароль?
            </v-btn>
          </v-col>
            </v-row>
          <br>
          <br>
         
      <v-row 
      >
        <v-col
            cols="12"
            md="3"
          >
          </v-col>
         <v-col
            cols="12"
            md="6"
          >
             <v-btn rounded outlined large block color="#FFC700" dark>Войти</v-btn>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
          <v-btn
            text
            color="white"
            absolute
            right
          >
            Назад
          </v-btn>
          </v-col>

      </v-row>


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