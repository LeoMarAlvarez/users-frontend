<template>
  <div class="mx-auto">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/views/Login.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

export default {
  name: "Home",
  components: {
    Login
  },
  mounted(){
    axios.get('sanctum/csrf-cookie')
    .then(res =>{
      console.log(res.data);
    });
  }
};
</script>
