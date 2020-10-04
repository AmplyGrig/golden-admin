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
                        readonly
                        solo
                    ></v-text-field>
                    <v-text-field
                        v-model="role"
                        class="user-form-item form-role"
                        label="Роль"
                        readonly
                        solo
                    ></v-text-field>
                     </div>
                    <v-btn icon color="indigo" to="/profile/edit" class="pen-rewrite">
                        <img src="@/assets/pen.svg" class="profile-btn">
                    </v-btn>
                </div>
                <br>
                <div class="profile-other-info">
                    <v-text-field
                        v-model="email"
                        class="user-form-item form-email"
                        label="Email"
                        readonly
                        solo
                    ></v-text-field>
                    <v-text-field
                        v-model="phone"
                        class="user-form-item form-phone"
                        label="Телефон"
                        readonly
                        solo
                    ></v-text-field>
                </div>
  
        </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'profile',

    data: () => ({
    }),
  }
</script>
<style>
.user-name {
    position: relative;
    display: flex;
    align-items: center;
}
.user-name > div{
    width:100%;
}
.user-name .v-input__slot,.profile-other-info .v-input__slot{
    background: transparent!important;
    margin:0!important;
    padding:0!important;
}
.profile-btn{
    height:27px
}
.user-form-item{
    margin-bottom: -10px!important;
}

.user-name .v-text-field__details, .profile-other-info .v-text-field__details {
    display: none;
}
.form-name *{
    font-weight: bold;
    font-size: 17px;
    line-height: 160%;
}
.form-role *{
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
}
.form-email *{
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
}
.form-phone *{
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
}
</style>