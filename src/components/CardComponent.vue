<template>
    <div class="card shadow-sm border-light rounded mb-4" style="max-width: 18rem; background-color: #f8f9fa;">
      <!-- Gambar Produk -->
      <img
        :src="require('@/assets/images/' + product.gambar)"
        class="card-img-top img-fluid"
        alt="Product image"
        style="height: 200px; object-fit: cover;"
      />
      
      <div class="card-body">
        <!-- Nama Produk -->
        <h5 class="card-title font-weight-bold text-truncate" style="max-width: 100%;">{{ product.nama }}</h5>
  
        <!-- Harga Produk -->
        <p class="card-text text-success font-weight-bold">
          Rp. {{ product.harga }}
        </p>
  
        <!-- Status Ketersediaan -->
        <router-link :to="'/foods/'+product.id" class="btn btn-sm btn-success">
          <i class="bi bi-bag"></i> Pesan
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardComponent",
    props: ["product"],
  };
  </script>
  
  <style scoped>
  .card-product {
    border-radius: 10px;
  }
  
  .card-body {
    padding: 1.25rem;
  }
  
  .card-img-top {
    border-radius: 10px 10px 0 0;
  }
  </style>
  