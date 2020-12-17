const Home = window.httpVueLoader('./components/Home.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Visualisation = window.httpVueLoader('./components/Visualisation.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/algo', component: Visualisation}
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app'
})
