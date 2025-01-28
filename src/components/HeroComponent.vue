<template>
  <div class="hero">
    <!-- hero web -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Menu Makanan Enak,</strong><br />
                hanya dari Handphone
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
              <button class="btn btn-sm btn-success">
                <i class="bi bi-arrow-right"></i> Pesan
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <img src="../assets/images/hero.svg" width="100%" />
        </div>
      </div>
    </div>

    <!-- hero mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.svg" width="100%" />
        </div>

        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Menu Makanan Enak,</strong><br />
                hanya dari Handphone
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
              <button class="btn btn-sm btn-success">
                <i class="bi bi-arrow-right"></i> Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
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