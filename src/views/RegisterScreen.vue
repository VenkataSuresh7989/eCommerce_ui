<template>
	<div class="register">		
		<div class="register_form">
			<h3 class="text-center">Register</h3>
			<b-form @submit="btnRegister">
				<b-form-group id="input-group-1" label="Name" label-for="input-1">
					<b-form-input id="input-1" v-model="name" type="text" placeholder="Enter Name" required></b-form-input>
				</b-form-group>
				<b-form-group id="input-group-2" label="Email" label-for="input-1">
					<b-form-input id="input-2" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
				</b-form-group>
				<b-form-group id="input-group-3" label="Password" label-for="input-2">
					<b-form-input id="input-3" v-model="password" type="password" placeholder="Enter Password" required></b-form-input>
				</b-form-group>				
				<b-button v-if="isValid" class="btn_submit" type="submit" variant="primary">Register</b-button>
			</b-form>
			<b-button v-if="!isValid" @click="btnRegister" class="btn_submit" type="submit" variant="primary">Register</b-button>
		</div>
	</div>
</template>
<script>
import { displayPageInfo } from '@/assets/scripts/script';
import { eventBus } from '@/main';
export default {
    name:'RegisterScreen',
	data() {
		return {       
			name:'', 
			email: '',
			password: '',
		}
	},
	computed: {
		isValid :  function()
		{
			return (this.name != "" && this.email != "" && this.password != "") ? false : true;
		}
	},
	mounted(){
		eventBus.$on("getInfo",(resp)=>{
			console.log("resp : ",resp);
		});
	},
	destroyed(){
		eventBus.$off("getInfo");
	},
	methods: {
		btnRegister: function()
		{
			if(this.name != "" && this.email != "" && this.password != "")
			{
				let chgData = { "username" : this.name , "email" : this.email , "password" : this.password };
				displayPageInfo("/createUser","POST",chgData);
				this.name = "";
				this.email = "";
				this.password = "";
			}
				
		}
	}
}
</script>