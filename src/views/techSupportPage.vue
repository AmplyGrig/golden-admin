<template>
  <v-container
        class="px-8 main-body"
        fluid
        dark

      >
    <v-row class="px-8">
      <div class="logo-page">
              <v-list-item-content>
                <v-list-item-title>Техническая поддержка</v-list-item-title>
              </v-list-item-content>
      </div>
    </v-row>
    <v-row class="mx-8">

        <v-textarea
          rows="4"
          solo
          v-model="description"
          name="input-7-4"
          label="Описание проблемы"
          readonly
        ></v-textarea>
    </v-row>
        <v-row class="mx-8" color="transparent">
          <div v-for="(item, index) in techAttach" :key="index" id="preview" class="tech-files">
                <img  src="@/assets/attach-new.svg">
                <v-card class="techAttach"  flat style="text-align:center;top: 40%;">
                    <v-list-item-content>
                      <v-list-item-title>{{item.name}}</v-list-item-title>
                      <v-list-item-subtitle>{{Math.round(item.size/1024)}}kb</v-list-item-subtitle>
                    </v-list-item-content>
                </v-card>
          </div>
        </v-row>
        <v-row class="mx-8">
            <v-textarea
            rows="2"
             solo
             v-model="description"
            name="input-7-4"
            label="Введите ответ"
            ></v-textarea>
        </v-row>
        <v-row class="mx-8">
            <v-col
            cols="12"
            md="3"
            >
         <v-btn max-width="200px!important" rounded outlined large block color="white" dark>Отправить</v-btn>
         </v-col>
        </v-row>
  </v-container>
</template>

<script>
import axiosAuth from "@/api/axios-files"
export default {
  data: () => ({
    url:"",
    price: "",
    techAttach:[{name:"file",size: 10000}],
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
.tech-files{
      margin-right: 2%;
}
.techAttach.v-card.v-card--flat.v-sheet.theme--dark {
    position: absolute;
    min-width: 100%;
    background: transparent;
}
</style>
