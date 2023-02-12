<template>
  <div>
    <Navbar />
    <div>
      <h5>Sub menu</h5>
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
