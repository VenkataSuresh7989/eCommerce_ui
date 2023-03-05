<template>
  <div>
    <Navbar />
    <div class="subHeader">
      <div class="row pt-2 pl-2">
        <div class="col-lg-3">
          <box-icon v-b-tooltip.hover title="refresh" @click="isRefresh" name='refresh'></box-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { displayPageInfo } from '@/assets/scripts/script';
import Navbar from "../components/NavbarComponent.vue";
export default {
  name: "HeaderComponent",
  components: {
    Navbar,
  },
  methods: {
    isRefresh : function()
    {
      displayPageInfo("/getProducts","GET");
    }
  }
};
</script>
