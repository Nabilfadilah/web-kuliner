<template>
  <nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container">
      <a class="navbar-brand" href="#"><strong>Kopi Mandja</strong></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/keranjang"
              >Keranjang
              <i class="bi bi-bag"></i>
                <span class="badge text-bg-success ml-5">{{ updateKeranjang ? updateKeranjang.length : jumlah_pemesanan.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "NavbarComponent", // karena pake ESLint jadi harus multi-kata
  data() {
    return {
      jumlah_pemesanan: [],
    };
  },

  // pake props 
  props: ["updateKeranjang"],

  methods: {
    setJumlah(data) {
      this.jumlah_pemesanan = data;
    },
  },
  // ketika dijalankan/dipasang maka halaman code akan berjalan
  mounted() {
    // menggunakan axios
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        // handle success
        this.setJumlah(response.data);
        console.log("Berhasil GET data", response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style>
</style>