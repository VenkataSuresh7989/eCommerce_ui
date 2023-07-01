<template>
  <div>
    <Navbar v-if="getAuthToken" />
    <router-view />    
    <ModalRoot />
    <ModalChild />
    <ModalSubChild /> 
  </div>
</template>
  
<script>
import Navbar from "./components/Navbar.vue";
import ModalRoot from './modules/modals/components/ModalRoot.vue';
import ModalChild from './modules/modals/components/ModalChild.vue';
import ModalSubChild from './modules/modals/components/ModalSubChild.vue';
export default {
  name: "App",
  computed:{
    getAuthToken: function() {
      let getAuthKey = sessionStorage.getItem("auth_token");
      let token = "";
      if((getAuthKey != undefined) && (getAuthKey != null))
      {
        let getAuthToken = localStorage.getItem('auth_token' + getAuthKey.toString());
        if((getAuthToken != undefined) && (getAuthToken != null))
        {
          token = getAuthToken;
        }
        else
        {
          token = "";
        }
      }
      else
      {
        token = "";
      }
      
      return (token == "") ? false : true;
    }
  },
  components:{Navbar, ModalRoot, ModalChild, ModalSubChild},
};
</script>
