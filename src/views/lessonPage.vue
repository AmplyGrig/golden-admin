<template>
  <v-container
        class="ma-8 main-body"
        fluid
        dark

      >
    <v-row class="px-3">
      <div class="logo-page back">
              <v-list-item-content>
              <v-list  class="back-button mr-2 " color="transparent">
                    <v-list-item  link :to="'/course/'+lesson.id" class="settings-refs">
                    <v-icon color="white" >mdi-chevron-left</v-icon>
                    <v-list-item-content>
                        Курс
                    </v-list-item-content>
                                    <v-list-item-action>
                        
                    </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-list-item-title>Урок</v-list-item-title>
              </v-list-item-content>
      </div>
    </v-row>
    <v-row class="px-8">
      <v-form class="course-form" width="100%">
      <v-row>
      <v-col
      cols="12"
      md="4"
      align="center"
          justify="center"
      >
        <label for="file-upload" class="custom-file-upload">
          <div id="preview" class="px-8">
            <img  src="@/assets/plus-video.svg">
            <p>+</p>
          </div>
        </label>
      </v-col>
      <v-col
      cols="12"
      md="8"
      >
        <v-text-field
                    class="gray-bg"
                    label="Название урока"
                    v-model="lesson.name"
                    solo
          ></v-text-field>
          <v-textarea
          rows="3"
          solo
          name="input-7-4"
          label="Описание урока до аудио"
        ></v-textarea>
        <v-row>
          <v-col cols="12" md="8">
            <label for="file-upload" class="custom-file-upload">
              <div id="preview" class=" music">
                <img  src="@/assets/music.svg">
              </div>
            </label>
          </v-col>
        </v-row>
        <v-textarea
          rows="3"
          solo
          class="textarea-mr"
          name="input-7-4"
          label="Описание урока после аудио"
          v-model="lesson.description"
        ></v-textarea>
          <v-row class="bg-transparent px-3 lessons extra-files">
          <div v-for="(item, index) in lesson.lessonFiles" :key="index" id="preview"  class="lesson-files">
                <img  src="@/assets/upload-files.svg">
                <v-card class="lesson-description" max-width="88%" flat style="text-align:center;top: 40%;">
                    <v-list-item-content>
                      <v-list-item-title>{{item.name}}</v-list-item-title>
                      <v-list-item-subtitle>{{Math.round(item.size/1024)}}kb</v-list-item-subtitle>
                    </v-list-item-content>
                </v-card>
          </div>
          <label for="file-upload-lesson" class="custom-file-upload">
              <div id="preview">
                <img  src="@/assets/plus-file-lesson.svg">
              </div>
            </label>
          </v-row>
          <div class="logo-page">
              <v-list-item-content>
                <v-list-item-subtitle>Домашнее задание</v-list-item-subtitle>
              </v-list-item-content>
          </div>
          <v-textarea
          rows="3"
          solo
          name="input-7-4"
          class="textarea-mr"
          label="Описание домашнего задания"
        ></v-textarea>
          <v-row class="bg-transparent px-3 lessons extra-files">
          <div v-for="(item, index) in homeworkFiles" :key="index" id="preview" class="lesson-files">
                <img  src="@/assets/upload-files.svg">
                <v-card class="lesson-description" max-width="88%" flat style="text-align:center;top: 40%;">
                    <v-list-item-content>
                      <v-list-item-title>{{item.name}}</v-list-item-title>
                      <v-list-item-subtitle>{{Math.round(item.size/1024)}}kb</v-list-item-subtitle>
                    </v-list-item-content>
                </v-card>
          </div>
          <label for="file-upload-homework" class="custom-file-upload">
              <div id="preview">
                <img  src="@/assets/plus-file-lesson.svg">
              </div>
            </label>
          </v-row>
      </v-col>
      </v-row>

      </v-form>
    </v-row>

    <v-row class="bg-transparent lessons">
    </v-row>
  </v-container>
</template>

<script>
import axiosAuth from "@/api/axios-auth"
export default {
  data: () => ({
    lesson:{}
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
    getLesson(){
      axiosAuth.get("/get-courses/"+this.$route.params.id).then((response) => {
        console.log(response.data)
        // response.data.users.forEach(element => {
        //   // let date = new Date(element['change_time'])
        //   // element['change_time'] = this.formatDate(date)
        // });
        // this.course = response.data.course[0]
        this.lesson = response.data.lessons[this.$route.params.id - 1]

      }).catch(error => {
        console.log(error)
      })
    }
  },
  created(){
    this.getLesson()
  },
}
</script>

<style>
#preview p {
    position: absolute;
    height: 30px;
    font-size: 30px;
    top: 50%;
    margin-top: -23px;
    width: 100%;
    left: 0;
    text-align: center;
}
#preview {
  position:relative;
   margin-bottom:15px;
}
.music {
  margin-bottom: 0!important;
  margin-top: -15px;
}
.textarea-mr{
  margin-bottom: -30px!important;
}
.lesson-files{
      margin-right: 2%;
}
.back-button .v-list-item--link:before {
    width: 0;
}
</style>
