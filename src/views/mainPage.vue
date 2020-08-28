<template>
  <v-container
        class="fill-height"
        fluid
        dark
      >
        <template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" class="text-left">{{column}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        columns: [ 'ФИО', 'Название объекта', 'Время изменения','' ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
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
</style>