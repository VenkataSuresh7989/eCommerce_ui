<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">eCommerce</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>          
          <b-nav-item href="#" active @click="btnRefresh()"><font-awesome-icon :icon="['fas', 'arrows-rotate']" /> Refresh </b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown text="Menu" right :class="{ show: true }">
          <b-dropdown-item @click="getRoute('/cart')">Shopping Cart</b-dropdown-item>
          <b-dropdown-item @click="getRoute('/customers')">Customers List</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right :class="{ show: true }">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ getUserName }}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="btnSignOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import { eventBus } from '../main';
import ModalService from '../modules/modals/services/modal.service';
import ConfirmationMessage from '../views/modals/ConfirmationMessage.vue';

export default {
  name:"Navbar",
  computed:{
    getUserName: function() {
      let usNrame = localStorage.getItem("username" + sessionStorage.getItem("auth_token").toString());
      let emailWithoutDomain = usNrame.replace('@gmail.com', '');
      usNrame = emailWithoutDomain.charAt(0).toUpperCase() + emailWithoutDomain.slice(1);
      return (usNrame.replace("",""));
    }
  },
  mounted(){
    eventBus.$on("isSignout",()=>{
      Object.keys(localStorage).forEach(itemId => {
        let resp = itemId.toString().includes(sessionStorage.getItem("auth_token").toString());
        if(resp)
          localStorage.removeItem(itemId.toString());
      });
      sessionStorage.clear();
      window.location.reload();
    });
  },
  destroyed(){
    eventBus.$off("isSignout");
  },
  methods:{
    getRoute: function(route) {
      this.$router.push(route.toString());
    },
    btnSignOut: function() {
      ModalService.open(ConfirmationMessage, [{msgTitle:"",msgInfo:'Are you sure you want to Logout?'}]);
    },
    btnRefresh: function() {
      eventBus.$emit("isRefresh");
    }
  }
}
</script>