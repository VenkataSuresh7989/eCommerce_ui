<template>
  <div class="body_container">
    <div class="container-fluid">
      <ShoppingCart/>
    </div>    
  </div>
</template>
<script>
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  name: "BodyComponent",
  components:{
    ShoppingCart
  }
};
</script>
