<template>
  <div>
    <Header class="header_container" />
    <Body />  
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from "../views/HeaderComponent.vue";
import Body from "../views/BodyComponent.vue";
import Footer from "../views/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Body,
    Footer,
  }
};
</script>
