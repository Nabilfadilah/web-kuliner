<template>
  <div 
    class="card product-card border-0 shadow-2xl rounded mb-4"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Gambar Produk -->
    <div class="card-img-container">
      <img
        :src="require('@/assets/images/' + product.gambar)"
        class="card-img-top"
        alt="Product image"
      />
    </div>

    <div class="card-body text-center">
      <!-- Nama Produk -->
      <h5 class="card-title fw-bold text-dark">{{ product.nama }}</h5>

      <!-- Harga Produk -->
      <p class="card-text text-success fw-semibold">{{ formatRupiah(product.harga) }}</p>

      <!-- Status Ketersediaan -->
      <router-link :to="'/foods/'+product.id" class="btn btn-sm btn-outline-success">
        <i class="bi bi-bag"></i> Pesan
      </router-link>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: "CardComponent",
    props: ["product"],
    computed: {
    formatRupiah() {
      return (value) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(value);
      };
    },
  },
  };
  </script>
  
<style scoped>
.product-card {
  max-width: 100%;
  background-color: #f8f9fa;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important; /* shadow-2xl */
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-img-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.btn-primary {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
  