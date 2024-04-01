<template>
    <div>
        <h1>About</h1>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  setup() {
    // Using useHead to manage document head
    useHead({
      title: 'About Page Title',
      meta: [
        {
          name: 'description',
          content: 'Page description'
        }
      ]
    });

    // Data
    const pageTitle = 'Hello World';

    return {
      pageTitle
    };
  }
};
</script>