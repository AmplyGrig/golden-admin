<template>
<v-app-bar
      app
      clipped-left
      class="px-8"
      flat
      height="80px"
    >
     <v-toolbar-title>GOLDEN GENOM</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-badge
        :content="messages"
        :value="messages"
        color="#FFC700"
        overlap
      >
        <v-icon large>mdi-bell-outline</v-icon>
      </v-badge>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
      
    }),
  }
</script>
<style>
.v-toolbar {
    border-bottom:1px solid #ffffff29!important;
    background: black!important;
}


</style>
