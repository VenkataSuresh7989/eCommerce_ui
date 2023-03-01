<template>
	<div>
		<div v-if="isLogin">
			<Login /> </div>
		<div v-else>
			<HomeView /> </div>
	</div>
</template>
<script>
import HomeView from "../src/views/HomeView.vue";
import Login from "../src/views/LoginScreen.vue";

export default {
  name: "App",
  data(){
    return {
      isLogin : false,
    }
  },
  components: {
    HomeView,
    Login,
  },
};
</script>
