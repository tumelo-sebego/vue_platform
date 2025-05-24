<template>
  <AppShell>
    <CacheForm />
  </AppShell>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppShell from './components/AppShell.vue';
import CacheForm from './components/CacheForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppShell,
    CacheForm
  }
});
</script>

<style>
/* Add any global styles here */
</style>