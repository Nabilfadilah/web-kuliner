<template>
  <div class="food-detail">
    <navbar-component />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-3">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- content detail -->
      <div class="row">
        <div class="col-md-6">
          <img
            v-if="product.gambar"
            :src="require('@/assets/images/' + product.gambar)"
            class="img-fluid shadow"
            alt="Product Image"
          />
          <p v-else>Gambar tidak tersedia</p>
        </div>
        <div class="col-md-6">
          <h4>
            <strong>{{ product.nama }}</strong>
          </h4>
          <h4>
            Harga : <strong>Rp. {{ product.harga }}</strong>
          </h4>

          <!-- agar tidak realod -->
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                class="form-control"
                placeholder="Keterangan sprt : Packing produk..."
                v-model="pesan.keterangan"
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-success mt-3"
              @click="pemesanan"
            >
              <i class="bi bi-bag"></i> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    NavbarComponent,
  },
  // nantinya data API akan disimpan disini
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    // pemesanan ini akan beraksi jika user klik
    pemesanan() {
      console.log(this.pesan);
      
      if(this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => {
          this.$toast.open({
            message: "Sukses Masuk Keranjang",
            type: "success",
            position: 'top-right',
            duration: 3000,
            dismissible: true
          });
        })
        .catch((err) => console.log(err));
      } else {
        this.$toast.open({
            message: "Pesanan Harus diisi",
            type: "error",
            position: 'top-right',
            duration: 3000,
            dismissible: true
          });
      }

     
    },
  },
  // ketika dijalankan/dipasang maka halaman code akan berjalan
  mounted() {
    // menggunakan axios
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
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