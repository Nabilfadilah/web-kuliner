<template>
  <div class="pesanan">
    <navbar-component />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/hero2.svg" width="300" />
          <h2 class="mt-5"><strong>Sukses!!</strong></h2>
          <h4>Pesanan Anda sedang diproses <br />Selamat Menunggu</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "PesananSukses",
  components: {
    NavbarComponent,
  },
};
</script>

<style>
</style>