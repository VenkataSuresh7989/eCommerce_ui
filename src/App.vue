<template>
	<div>
		<div v-if="isLogin">
			<div class="text-center">
				<b-button class="mr-2 mt-1" :class="visible1 ? null : 'collapsed'" :aria-expanded="visible1 ? 'true' : 'false'" aria-controls="collapse-1" @click="isVisible(1)"> Login </b-button>
				<b-button class="ml-2 mt-1" :class="visible2 ? null : 'collapsed'" :aria-expanded="visible2 ? 'true' : 'false'" aria-controls="collapse-2" @click="isVisible(2)"> Register </b-button>
			</div>
			<b-collapse id="collapse-1" v-model="visible1" class="mt-2">
				<Login /> 
      </b-collapse>
			<b-collapse id="collapse-2" v-model="visible2" class="mt-2">
				<Register /> 
      </b-collapse>
		</div>
		<div v-else>
			<HomeView /> 
    </div>
	</div>
</template>
<script>
import HomeView from "../src/views/HomeView.vue";
import Register from "../src/views/RegisterScreen.vue";
import Login from "../src/views/LoginScreen.vue";

export default {
  name: "App",
  data() {
    return {
      visible1: true,
      visible2: false,
    };
  },
  components: {
    HomeView,
    Login,
    Register,
  },
  computed: {
    isLogin : function()
    {
      let resp = localStorage.getItem("loginUser");
      return (resp == null || resp == "") ? true : false;
    }
  },
  methods: {
    isVisible(idx) {
      this.visible1 = (idx == 1) ? true : false;
      this.visible2 = !this.visible1;
    },
  },
};
</script>
