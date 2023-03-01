<template>
	<div class="register">
		<h3 class="text-center">Register</h3>
		<div class="register_form">
			<b-form @submit="onSubmit">
				<b-form-group id="input-group-1" label="Email:" label-for="input-1">
					<b-form-input id="input-1" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
				</b-form-group>
				<b-form-group id="input-group-2" label="Password:" label-for="input-2">
					<b-form-input id="input-2" v-model="password" type="password" placeholder="Enter Password" required></b-form-input>
				</b-form-group>
				<b-button class="btn_submit" type="submit" variant="primary">Submit</b-button>
			</b-form>
		</div>
	</div>
</template>
<script>
export default {
    name:'RegisterScreen',
}
</script>