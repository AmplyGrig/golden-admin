<template>
  <v-container
        class="ma-8 main-body"
        fluid
        dark

      >
    <v-row class="px-3">
      <div class="logo-page">
              <v-list-item-content>
                <v-list-item-title>Добавить урок</v-list-item-title>
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
        <input id="file-upload" type="file" @change="onFileChange"/>
        <v-btn min-width="200px!important" rounded outlined large block color="white" dark>Опубликовать</v-btn>
      </v-col>
      <v-col
      cols="12"
      md="8"
      >
        <v-text-field
                    v-model="search"
                    class="gray-bg"
                    label="Название урока"
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
            <input id="file-upload" type="file" @change="onFileChange"/>
          </v-col>
        </v-row>
        <v-textarea
          rows="3"
          solo
          class="textarea-mr"
          name="input-7-4"
          label="Описание урока после аудио"
        ></v-textarea>
          <v-row class="bg-transparent px-3 lessons extra-files">
          <div v-for="(item, index) in lessonFiles" :key="index" id="preview"  class="lesson-files">
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
            <input id="file-upload-lesson" type="file" @change="onFileChangeLessonFiles"/>
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
            <input id="file-upload-homework" type="file" @change="onFileChangeHomeworkFiles"/>
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
import axiosAuth from "@/api/axios-files"
export default {
  data: () => ({
    url:"",
    price: "",
    lessonFiles:[],
    homeworkFiles:[]
  }),
  components: {
  },
  beforeCreate() {
  },
  beforeDestroy() {
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.lessonFiles.push(file)
      // this.url = URL.createObjectURL(file);
    },
    onFileChangeLessonFiles(e) {
      const file = e.target.files[0];
      this.lessonFiles.push(file)
      // this.url = URL.createObjectURL(file);
    },
    onFileChangeHomeworkFiles(e) {
      const file = e.target.files[0];
      this.homeworkFiles.push(file)
      // this.url = URL.createObjectURL(file);
    },
    sendForm(){
      var form_data = new FormData()
      form_data.append('description', this.description)
      form_data.append('price', this.price)
      form_data.append('cover_img', this.img)
      form_data.append('name', this.name)
      axiosAuth.post('course/new', form_data).then((response) => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
      // console.log(this.name)
      // console.log(fd.get(name))
    }
  }
};
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
</style>
