<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import Axios from 'axios';
import { useDialogPluginComponent } from 'quasar';

export default defineComponent({
  name: 'ViewProductPage',
  setup() {
    const $q = useQuasar();

    function getData() {
      const options = {
        method: 'GET',
        url: 'https://localhost:9000/',
      };
      Axios.request(options)
        .then(function (response: any) {
          console.log(response.data);
        })
        .catch(function (error: any) {
          console.error(error);
        });
    }

    function deleteProduct() {
      $q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          // console.log('>>>> OK')
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
    return { deleteProduct, getData };
  },
});
</script>
<template>
  <div class="column items-center justify-evenly q-pb-md">
    <h6>All Products</h6>
    <div class="row justify-center">
      <div class="col-6 col-sm-10 col-md-10">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <q-item class="q-pa-md">
              <q-item-section avatar top>
                <q-icon name="account_tree" color="black" size="34px" />
              </q-item-section>
              <q-item-section top>
                <!-- product name -->
                <q-item-label lines="1">
                  <span class="text-weight-medium">Product name</span>
                </q-item-label>
                <!-- description -->
                <q-item-label caption lines="1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </q-item-label>
                <q-item-label lines="1">Price </q-item-label>
              </q-item-section>
              <!-- side menu -->
              <q-item-section middle side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="more_vert">
                    <q-menu
                      transition-show="jump-down"
                      transition-hide="jump-up"
                    >
                      <q-list style="min-width: 100px">
                        <q-item clickable to="/view">
                          <q-item-section>Edit</q-item-section>
                        </q-item>

                        <q-item clickable @click="deleteProduct">
                          <q-item-section>Delete</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
