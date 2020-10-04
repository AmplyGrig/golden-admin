<template>
  <v-container
        class="ma-8 main-body"
        fluid
        dark

      >
    <v-row class="px-3">
      <div class="logo-page">
              <v-list-item-content>
                <v-list-item-title>Курс</v-list-item-title>
              </v-list-item-content>
      </div>
    </v-row>
    <v-row class="px-8">
      <v-form class="course-form" width="100%">
      <v-row>
      <v-col
      cols="12"
      md="4"
      >
        <label for="file-upload" class="custom-file-upload">
          <div id="preview" class="course-logo">
            <img  v-if="url" :src="url"  class="logo" />
            <img v-else src="@/assets/no-photo-course.svg" class="logo">
            <img src="@/assets/download.svg" class="upload">
          </div>
        </label>
        <input id="file-upload"  type="file"  @change="onFileChange"/>
         <v-btn min-width="200px!important" rounded outlined large block color="white" @click="updateCourse" dark>Опубликовать</v-btn>
        </v-col>
      <v-col
      cols="12"
      md="8"
      >
        <v-text-field
                    v-model="course.name"
                    class="gray-bg"
                    label="Название курса"
                    solo
          ></v-text-field>
          <v-textarea
          rows="3"
          solo
          v-model="course.description"
          name="input-7-4"
          label="Описание курса"
        ></v-textarea>
        <v-row>
          <v-col
          cols="12"
          md="3"
          >
            <v-text-field
                    v-model="course.price"
                    class="bg-transparent price"
                    prefix="р"
                    label=""
                    height="50px"
                    solo
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="1">
          </v-col>
          <v-col
          cols="12"
          md="5"
          >
          </v-col>
        </v-row>
      </v-col>
      </v-row>

      </v-form>
    </v-row>

    <v-row class="bg-transparent lessons">
        <router-link v-for="(lesson,k) in lessons" :key="k"  class="mx-3 lesson-mini" :to="'/course/'+course.id+'/lesson/'+lesson.id">
          <img src="@/assets/lesson.svg">
          <v-card class="lesson-description" flat>
              <v-list-item-content>
                <v-list-item-title>Урок №{{k+1}}</v-list-item-title>
                <v-list-item-subtitle>{{lesson.name}}</v-list-item-subtitle>
              </v-list-item-content>
          </v-card>
        </router-link>
         <router-link  class="mx-3 lesson-mini" :to="'/course/'+course.id+'/new-lesson'">
              <img  src="@/assets/plus-course.svg">
        </router-link>
    </v-row>
  </v-container>
</template>

<script>
import axiosAuth from "@/api/axios-auth"
import axios from "@/api/axios-files"
export default {
  data: () => ({
    course:{},
    lessons:[]
  }),
  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
    },
    // formatDate(date){
    //   var dd = date.getDate();
    //   if (dd < 10) dd = '0' + dd;
    //   var mm = date.getMonth() + 1;
    //   if (mm < 10) mm = '0' + mm;
    //   var yy = date.getFullYear() 
    //   return dd + '.' + mm + '.' + yy;
    // },
    getCourse(){
      axiosAuth.get("/get-courses/"+this.$route.params.id).then((response) => {
        console.log(response.data)
        // response.data.users.forEach(element => {
        //   // let date = new Date(element['change_time'])
        //   // element['change_time'] = this.formatDate(date)
        // });
        this.course = response.data.course[0]
        this.lessons = response.data.lessons

      }).catch(error => {
        console.log(error)
      })
    },
     onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.img = file
    },
    updateCourse(){
      var form_data = new FormData()
      // let course = {'description':this.description, 'price' : this.price,'cover_img': this.img,'name':this.name}
      form_data.append('description', this.description)
      form_data.append('price', this.price)
      form_data.append('cover_img', this.img)
      form_data.append('name', this.name)
      form_data.append('id', this.$route.params.id)
      // form_data.append('course',course)
      axios.post('course-edit', form_data).then((response) => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })

    }
  },
  created(){
    this.getCourse()
  },
}
</script>

<style>
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
input[type="file"] {
    display: none;
}
.custom-file-upload {
    cursor: pointer;
}
#preview img{
  width:100%;
}
.course-form{
  width:100%;
}
.gray-bg input{
color:"#262626";
}
.price *{
  font-size:40px;
  height: 50px;
}
.price .v-text-field__prefix {
    position: absolute;
    left: 107%;
}
.lesson-mini img {
    width: 100%;
}
.lesson-mini {
    width: 17%;
}
.lessons {
  margin-top: 50px;
}
.lesson-mini {
    position: relative;
}
.lesson-description {
    position: absolute;
    top: 50%;
    color: white;
    left: 6%;
}
img.upload {
    position: absolute;
    width: 30px!important;
    transform: rotate(180deg);
    left: calc(50% - 15px);
    top: calc(50% - 15px);
    opacity: 0;
}
div#preview.course-logo:hover img.logo {
    opacity: 0.5;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
div#preview.course-logo:hover img.upload {
    opacity: 1;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
.course-logo{
  min-height: 300px;
}
</style>
