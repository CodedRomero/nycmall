<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EditProductPage',
  setup() {
    const name = ref(null);
    const price = ref(null);
    const description = ref(null);
    return {
      name,
      price,
      description,

      onSubmit() {
        console.log(name.value);
        console.log(price.value);
        console.log(description.value);
      },
    };
  },
});
</script>
<template>
  <div class="row items-center justify-evenly q-pb-md">
    <div class="col-8 col-md-8">
      <h6 class="text-center">Edit Product</h6>
      <q-form @submit="onSubmit">
        <!-- -----------------Product Name----------------- -->
        <q-input
          type="text"
          filled
          v-model="name"
          label="Name *"
          hint="Product Name"
          class="q-mb-md"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Type product name']"
        />

        <!-- -----------------Product Price----------------- -->
        <q-input
          type="number"
          filled
          v-model="price"
          label="Price *"
          hint="Product Price"
          class="q-mb-md"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Type product name']"
        />
        <!-- -----------------Product description----------------- -->
        <q-input
          filled
          type="textarea"
          v-model="description"
          label="Description*"
          hint="Describe product"
          class="q-mb-md"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Describe product']"
        />
        <div class="row items-center justify-center">
          <!-------------------- Action buttons------------------ -->
          <q-btn label="Update" type="submit" color="amber" glossy />
          <q-btn
            label="Cancel"
            to="/view"
            color="white"
            text-color="black"
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>
