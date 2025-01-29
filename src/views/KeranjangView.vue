<template>
  <div class="keranjang">
    <navbar-component :updateKeranjang="keranjangs" />

    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-3">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/menu" class="text-dark">Menu</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Keranjang -->
      <div class="row mt-3">
        <div class="col">
          <h4>Keranjang <strong>Saya</strong></h4>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
        <div v-for="keranjang in keranjangs" :key="keranjang.id" class="col">
          <div class="card shadow-sm">
            <img
              v-if="keranjang.products.gambar"
              :src="require('@/assets/images/' + keranjang.products.gambar)"
              class="card-img-top"
              alt="Product Image"
            />
            <div class="card-body">
              <h5 class="card-title">{{ keranjang.products.nama }}</h5>
              <p class="card-text text-muted">
                {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span>Jumlah: {{ keranjang.jumlah_pemesanan }}</span>
                <span class="fw-bold">
                  {{
                    formatRupiah(
                      keranjang.products.harga * keranjang.jumlah_pemesanan
                    )
                  }}
                </span>
              </div>
              <button
                class="btn btn-danger mt-2 w-100"
                @click="hapusKeranjang(keranjang.id)"
              >
                <i class="bi bi-trash"></i> Hapus
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Total Harga -->
      <div class="row mt-4">
        <div class="col text-end">
          <h5>
            <strong>Total Harga: {{ formatRupiah(totalHarga) }}</strong>
          </h5>
        </div>
      </div>

      <!-- Form Checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" @submit.prevent="checkout">
            <div class="form-group mb-3">
              <label for="nama" class="fw-bold">Nama</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>

            <div class="form-group">
              <label for="noMeja" class="fw-bold">No Meja</label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>

            <button type="submit" class="btn btn-success mt-3 w-100">
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
  name: "KeranjangView",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.open({
            message: "Hapus Produk Berhasil",
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // untuk mengambil data baru lagi, agar tidak reaload
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => {
              // handle success
              this.setKeranjangs(response.data);
            })
            .catch((error) => {
              // handle error
              console.log(error);
            });
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },

    // untuk nama dan noMeja
    checkout() {
      console.log("Pesan", this.pesan);

      if (this.pesan.nama && this.pesan.noMeja) {
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            // hapus semua keranjang
            this.keranjangs.map((item) => {
              axios
                .delete("http://localhost:3000/keranjangs/" + item.id)

                .catch((error) => {
                  // handle error
                  console.log(error);
                });
            });

            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.open({
              message: "Sukses dipesanan",
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.open({
          message: "Nama dan No Meja Harus diisi",
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        // handle success
        this.setKeranjangs(response.data);
        console.log("Berhasil GET data", response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },

  // untuk format / menjumlahkan
  computed: {
    totalHarga() {
      return this.keranjangs.reduce((total, item) => {
        // return total + item.products.harga;
        return (
          total + (item.products?.harga || 0) * (item.jumlah_pemesanan || 0)
        );
      }, 0);
    },

    // format rupiah
    formatRupiah() {
      return (value) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(value);
      };
    }
  },
};
</script>

<style>
</style>