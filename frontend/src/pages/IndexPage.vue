<template>
  <q-page class="row items-center justify-evenly">
    <view-product-page></view-product-page>
  </q-page>
</template>

<script lang="ts">
import ViewProductPage from './view_product.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ViewProductPage },
  // setup() {},
});
</script>
