<template>
  <navbar-component />
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h2>Daftar <strong>Makanan</strong></h2>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
        <card-component :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavbarComponent,
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
      .get("http://localhost:3000/products")
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

<style></style>