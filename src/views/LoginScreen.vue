<template>
	<div class="login">		
		<div class="login_form">
			<h3 class="text-center">Login</h3>
			<b-form>
				<b-form-group id="input-group-1" label="Email" label-for="input-1">
					<b-form-input id="input-1" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
				</b-form-group>
				<b-form-group id="input-group-2" label="Password" label-for="input-2">
					<b-form-input id="input-2" v-model="password" type="password" placeholder="Enter Password" required></b-form-input>
				</b-form-group>				
			</b-form>
			<b-button class="btn_submit" @click="btnLogin" type="submit" variant="primary">Login</b-button>
			<span v-if="isLogin" class="text-danger">Invalid user credentials.</span>
		</div>
	</div>
</template>
<script>
export default {
  name: "LoginScreen",
  data() {
    return {        
        email: '',
        password: '',
		isLogin: false,
    }
  },
  methods: {
    btnLogin: function(){
		if(this.email != "" && this.password != "")
		{
			console.log("Email : "+this.email,"Password : "+this.password);
			this.isLogin = (this.email == "suresh@gmail.com" && this.password == "Suresh@7989") ? false : true;
		}
    }
  },
};
</script>