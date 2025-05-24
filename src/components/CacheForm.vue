<template>
  <div class="cache-form">
    <input v-model="link" type="text" placeholder="Enter link" />
    <button @click="submitLink">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      link: ''
    };
  },
  methods: {
    submitLink() {
      // Logic to handle the link submission
      console.log('Link submitted:', this.link);
      // Here you can call a method to save the link or perform other actions
    }
  }
});
</script>

<style scoped>
.cache-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>