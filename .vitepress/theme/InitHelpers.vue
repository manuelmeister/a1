<script lang="ts">
import {onBeforeUnmount, onMounted, onUnmounted, ref} from "vue";
import {onContentUpdated} from "vitepress";

export default {
  name: "InitHelpers",
  setup() {
    const observer = ref(null);

    onMounted(() => {
      // Set up the Intersection Observer
      observer.value = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Update the hash when the headline becomes visible
            window.history.replaceState(null, '', `#${entry.target.id}`);
            break; // Stop after the first visible headline
          }
        }
      }, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the headline is visible
      });

      // Observe each headline
      document.querySelectorAll('h1,h2,h3,h4,h5,h6,.custom-block').forEach((headline) => {
        if (headline.id) {
          observer.value.observe(headline);
        }
      });
    });

    onContentUpdated(() => {
      if (observer.value) {
        // Observe each headline
        observer.value.disconnect();
        document.querySelectorAll('h1,h2,h3,h4,h5,h6,.custom-block').forEach((headline) => {
          if (headline.id) {
            observer.value.observe(headline);
          }
        });
      }
    })

    onBeforeUnmount(() => {
      observer.value.disconnect();
      observer.value = null;
    });
  }
}
</script>

<template>
  <div></div>
</template>

<style scoped>

</style>
