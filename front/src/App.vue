<template>
  <div class="container">
    <h1>Welcome to My PrimeVue Site</h1>
    <p-button
      label="Click Me"
      class="p-button-raised p-button-rounded"
      @click="handleClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "primevue/button";

export default defineComponent({
  components: {
    "p-button": Button,
  },
  methods: {
    handleClick() {
      alert("Hello from PrimeVue!");
    },
  },
});
</script>

<style>
.container {
  text-align: center;
  margin-top: 20%;
}
</style>
