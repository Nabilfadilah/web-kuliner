<template>
  <router-view/>
  <footer-component />
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FooterComponent
  }
}


</script>
