<template>
  <div class="app-shell">
    <h1>Platform App</h1>
    <CacheForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CacheForm from './CacheForm.vue';

export default defineComponent({
  name: 'AppShell',
  components: {
    CacheForm
  }
});
</script>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>