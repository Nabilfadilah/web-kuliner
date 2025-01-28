<template>
  <div class="home">
    <!-- import navbar  -->
    <navbar-component /> 
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent
  }
}
</script>
