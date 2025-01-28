<template>
  <div class="home">
    <!-- import navbar  -->
    <navbar-component /> 
    
    <!-- import hero  -->
     <div class="container">
       <hero-component />
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    HeroComponent
  }
}
</script>

    HeroComponent