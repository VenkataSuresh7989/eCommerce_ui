<template>
  <form @submit.prevent="btnLogin()">
    <div class="mb-2">
      <h1>Sign in</h1>
      <!-- <div class="social-container">
      <a href="#" class="social"><box-icon type='logo' name='facebook'></box-icon></a>
      <a href="#" class="social"><box-icon name='google-plus' type='logo' ></box-icon></a>
      <a href="#" class="social"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
      </div> -->
      <span>or use your account</span>
    </div>
    <div class="w-100">
      <div class="form-group">
        <input type="email" v-model="txtEmail" placeholder="Email" required autocomplete />  
      </div>
      <div class="form-group">
        <input type="password" v-model="txtPassword" placeholder="Password" required autocomplete />
      </div>
      <div class="d-flex justify-content-between w-100">
        <a @click="isSignUp" class="mt-0 mb-3 visible-sm">Sign up</a>
        <a href="/forgotpwd" class="mt-0 mb-3">Forgot your password?</a>
      </div>    
      <button type="submit">Sign In</button>
    </div> 
    <p v-if="isErrMsg" class="text-danger erMsg text-center mt-3">{{ errMsg }}</p>
  </form>
</template>
  
<script>
import { displayPageInfo } from '../assets/scripts/common';

export default {
  name: "LoginScreen",
  data(){
    return {
      txtEmail:"ravi@gmail.com",
      txtPassword:"Ravi@123",
      errMsg:"",
    }
  },
  computed:{
    isErrMsg: function() {
      return (this.errMsg == "") ? false : true;
    }
  },
  methods: {   
    isSignUp: function() {
      if(document .getElementById("container") != undefined && document .getElementById("container") != null)
        document.getElementById("container").classList.add("right-panel-active");
    },
    btnLogin: function() {
      displayPageInfo("get", "/login?email="+this.txtEmail +"&password="+this.txtPassword).then(response => {
        if(response.status == 200)
        {          
          sessionStorage.setItem("auth_token",Date.now());
          localStorage.setItem("username" + sessionStorage.getItem("auth_token").toString(),this.txtEmail);
          localStorage.setItem("auth_token" + sessionStorage.getItem("auth_token").toString(),response.auth_token);
          this.txtEmail = "";
          this.txtPassword = "";
          // this.$router.push("/dashboard");
          window.location.href = "/dashboard";
        }
        else
        {
          this.errMsg = response.data;
          setTimeout(() => {
            this.errMsg = "";
          }, 5000);
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  },
};
</script>