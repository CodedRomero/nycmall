<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-dark text-yellow">
      <q-toolbar>
        <q-toolbar-title> <strong>NYC</strong>MALL</q-toolbar-title>
        <q-separator color="yellow" vertical />
        <q-btn stretch flat label="View" to="/view" />
        <q-separator color="yellow" vertical />
        <q-btn stretch flat label="Add" to="/add" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    return {};
  },
});
</script>
