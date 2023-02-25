<template>
  <div>
    <Login v-if="isLogin"/>
    <HomeView v-else/>    
  </div>
</template>
<script>
import HomeView from "../src/views/HomeView.vue";
import Login from "../src/views/LoginScreen.vue";

export default {
  name: "App",
  data(){
    return {
      isLogin : true,
    }
  },
  components: {
    HomeView,
    Login,
  },
};
</script>
