<template>
  <div class="home">
    <!-- import navbar  -->
    <navbar-component />

    <!-- import hero  -->
    <div class="container">
      <hero-component />

      <div class="row mt-4">
        <div class="col">
          <h3>Best <strong>Foods</strong></h3>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-sm btn-success float-right"
            ><i class="bi bi-arrow-right"></i>  Lihat Semua</router-link>
        </div>
      </div>

      <!-- Grid Produk -->
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <card-component :product="product" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import axios from 'axios';

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HeroComponent,
    CardComponent
  },
  // nantinya data API akan disimpan disini
  data() {
    return {
      products: []
    }
  },
  methods: {
    setProduct(data) {
      this.products = data
    }
  },
  // ketika dijalankan/dipasang maka halaman code akan berjalan 
  mounted() {
    // menggunakan axios
    axios 
      .get("http://localhost:3000/best-products")
      .then((response) => {
        // handle success
        this.setProduct(response.data);
        console.log("Berhasil GET data", response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }
};
</script>