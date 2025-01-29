<template>
  <div class="home">
    <!-- import navbar  -->
    <navbar-component />

    <!-- import hero  -->
    <div class="container">
      <hero-component />

      <div class="d-flex justify-content-between align-items-center mt-4">
        <h3 class="fw-bold">Rekomendasi</h3>
        <router-link to="/menu" class="btn btn-sm btn-outline-primary">
          <i class="bi bi-arrow-right"></i> Lihat Semua
        </router-link>
      </div>

      <!-- Grid Produk -->
      <!-- <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-4 mt-4"
      >
        <card-component
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div> -->

      <div class="row mb-4">
        <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
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
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HeroComponent,
    CardComponent,
  },
  // nantinya data API akan disimpan disini
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
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
      });
  },
};
</script>