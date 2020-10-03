import Vue from "vue";
import VueRouter from "vue-router";
import landingPage from "@/views/landingPage";
import loginPage from "@/views/loginPage"
// import forgotPassPage from "@/views/forgotPassPage"
import coursesPage from "@/views/coursesPage"
import registrationPage from "@/views/registrationPage"
import mainPage from "@/views/mainPage"
import recoverPage from "@/views/recoveryPage"
import wellcome from "@/views/wellcome"
import course from "@/views/course"
import newCourse from "@/views/newCourse"
import newLesson from "@/views/newLesson"
import settings from "@/views/settingsPage"
import techEach from "@/views/techSupportPage"
import alltech from "@/views/allTechPage"

// import { VueResponsiveComponents } from "vue-responsive-components"
// import approveMail from "@/views/approveMail"
// import axiosAuth from '@/api/axios-auth'

// Vue.use(VueResponsiveComponents);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: landingPage,
  },
  {
    path: "/login",
    name: "MainPage",
    component: loginPage,
  },
  {
    path: "/main",
    name: "MainPage",
    component: mainPage,
  },
  {
    path: "/registration",
    name: "MainPage",
    component: registrationPage,
  },
  {
    path: "/recover",
    name: "MainPage",
    component: recoverPage,
  },
  {
    path: "/wellcome",
    name: "wellcome",
    component: wellcome,
  }
  ,
  {
    path: "/course",
    name: "wellcome",
    component: coursesPage,
  },
  {
    path: "/new-course",
    name: "wellcome",
    component: newCourse,
  },
  {
    path:"/course/:id/new-lesson",
    name:"lk_item",
    component: newLesson,
    // meta: { requiresAuth: true, requiresRole: [Role.user] }
  },
  {
    path:"/course/:id",
    name:"lk_item",
    component: course,
    // meta: { requiresAuth: true, requiresRole: [Role.user] }
  },
  {
    path:"/settings",
    name:"settings",
    component: settings,
    // meta: { requiresAuth: true, requiresRole: [Role.user] }
  },
  {
    path:"/tech/1",
    name:"ts",
    component: techEach,
    // meta: { requiresAuth: true, requiresRole: [Role.user] }
  },
  {
    path:"/tech",
    name:"ts",
    component: alltech,
    // meta: { requiresAuth: true, requiresRole: [Role.user] }
  },


  
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// const urlClosed = [
//   '/sign-up',
//   '/forgot-password',
//   '/reset-password-with-token',
//   '/approve-mail',
// ]

// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('token');

//   let requireRole = to.meta.requiresRole;
//   let requireAuth = to.matched.some(record => record.meta.requiresAuth);
  
//   if (!requireAuth) {
// 		next();
// 	}

// 	if (requireAuth && !token) {
// 		next('/sign-in');
// 	}

// 	if (to.path === '/sign-in' || to.path === '/sign-up' || (urlClosed.indexOf(to.path) != -1)) {
// 		if (token) {
// 			axiosAuth.get('/api/verify').then(response => {
//         if (response.data.valid === true) {
// 				  next(from);
//         }
//         else{
//           next()
//         }
// 			}).catch(() => {
// 				next();
// 			});
// 		}
// 		else {
// 			next();
// 		}
//   }

// 	if (requireAuth && token) {
// 		axiosAuth.get('/api/verify').then(response => {
// 			if (response.data.valid === true) {
//         next();
//       }
//       else{
//         next('/sign-in')
//       }
// 		}).catch(() => {
// 			next('/sign-in');
// 		})
//   }

//   if (requireRole) {
//     axiosAuth.get('/api/me').then(response => {
//       // console.log(response.data.me.role)
//       // if (!requireRole.includes(response.data.me.role[0])){
//       //   next('/')
//       // }
//       if (response.data.me.role[0] == 'user'){
//         next('/lkmain')
//       } else if (response.data.me.role[0] == 'admin'){
//         next('/lkadmin')
//       }
//     }).catch(() =>{
//       next()
//     })
//   }
// });

export default router;
