<template>
  <v-container
        fluid
        dark
        class="ma-8"
      >
      <v-row class="px-3">
      <div class="logo-page">
              <v-list-item-content>
                <v-list-item-title>Профиль</v-list-item-title>
              </v-list-item-content>
      </div>
    </v-row>
       <v-row class="user-body mx-8">
        <v-col class="user-info" cols=12 md=5 >
                <v-list-item-avatar color="grey darken-3" width="150px" height="150px">
                    <label for="file-upload" class="custom-file-upload">
                        <v-img v-if="url" :src="url"></v-img>
                        <v-img v-else src="@/assets/no-photo-course.svg"></v-img>
                    </label>
                    <input id="file-upload" type="file"  @change="onFileChange"/>
                    <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                </v-list-item-avatar>
                <div class="user-name">
                    <div>
                    <v-text-field
                        v-model="name"
                        class="user-form-item form-name"
                        label="ФИО"
                        solo
                    ></v-text-field>
                    <v-text-field
                        v-model="role"
                        class="user-form-item form-role"
                        label="Роль"
                        solo
                    ></v-text-field>
                     </div>
                    <v-btn icon color="indigo" class="pen-rewrite" to="/profile">
                        <img src="@/assets/remove.svg" class="profile-btn">
                    </v-btn>
                </div>
                <br>
                <div class="profile-other-info">
                    <v-text-field
                        v-model="email"
                        class="user-form-item form-email"
                        label="Email"
                        solo
                    ></v-text-field>
                    <v-text-field
                        v-model="phone"
                        class="user-form-item form-phone"
                        label="Телефон"
                        solo
                    ></v-text-field>
                </div>
                <br>
            <v-btn min-width="200px!important" rounded outlined large block color="white" dark>Сохранить</v-btn>
        </v-col>

    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'profile',

    data: () => ({
    }),
    methods: {
        onFileChange(e) {
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
        this.img = file
        }
    }
  }
</script>
<style>

</style>