<template>
  <div>
    <Navbar />
    <div class="subHeader">
      <h5 class="m-0 pt-2 pb-2">Sub menu</h5>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/NavbarComponent.vue";
export default {
  name: "HeaderComponent",
  components: {
    Navbar,
  },
};
</script>
