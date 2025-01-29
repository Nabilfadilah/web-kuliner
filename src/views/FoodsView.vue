<template>
  <navbar-component />
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h2>Daftar <strong>Minuman</strong></h2>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Cari Minuman..."
            aria-label="cari"
            aria-describedby="basic-addon1"
            @keyup="searchFood"
          />
          <span class="input-group-text" id="basic-addon1">
            <i class="bi bi-search"></i>
          </span>
        </div>
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
      search: '',
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood() {
  axios
    .get("http://localhost:3000/products")
    .then((response) => {
      // Filter data berdasarkan nama
      this.products = response.data.filter((product) =>
        product.nama.toLowerCase().includes(this.search.toLowerCase())
      );
    })
    .catch((error) => console.log(error));
}

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