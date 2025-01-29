<template>
  <div class="hero py-5">
    <!-- Hero Desktop -->
    <div class="container d-none d-md-block">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <h2 class="fw-bold text-dark">
            Menu Minuman Enak,<br />
            hanya dengan Tab layar
          </h2>
          <p class="text-muted">Ayo segera pilih dan pesan minuman favorit Anda</p>
          <router-link to="/foods" class="btn btn-sm btn-primary">
            <i class="bi bi-cart-fill"></i> Pesan Sekarang
          </router-link>
        </div>
        <div class="col-md-6 text-center">
          <img src="../assets/images/hero.webp" class="img-fluid rounded shadow-lg" alt="Menu Minuman" />
        </div>
      </div>
    </div>

    <!-- Hero Mobile -->
    <div class="container d-block d-md-none text-center">
      <img src="../assets/images/hero.webp" class="img-fluid rounded shadow-lg mb-3" alt="Menu Minuman" />
      <h2 class="fw-bold text-dark">
        Menu Minuman Enak,<br />
        hanya dengan Tab Layar
      </h2>
      <p class="text-muted">Ayo segera pilih dan pesan minuman favorit Anda</p>
      <button class="btn btn-sm btn-primary">
        <i class="bi bi-cart-fill"></i> Pesan Sekarang
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style>
</style>