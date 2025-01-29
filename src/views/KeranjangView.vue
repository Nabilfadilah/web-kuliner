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
              <li class="breadcrumb-item" aria-current="page">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- table -->
      <div class="row">
        <div class="col">
          <h4>Keranjang <strong>Saya</strong></h4>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Gambar</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th scope="row">{{ index + 1 }}.</th>
                  <td>
                    <img
                      v-if="keranjang.products.gambar"
                      :src="
                        require('@/assets/images/' + keranjang.products.gambar)
                      "
                      class="img-fluid shadow"
                      alt="Product Image"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td>Rp. {{ keranjang.products.harga }}</td>
                  <td>
                    <strong
                      >Rp.
                      {{
                        keranjang.products.harga * keranjang.jumlah_pemesanan
                      }}</strong
                    >
                  </td>
                  <td class="text-danger">
                    <i
                      class="bi bi-trash"
                      @click="hapusKeranjang(keranjang.id)"
                    ></i>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga : </strong>
                  </td>
                  <td>
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group mb-3">
              <label for="nama">Nama :</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>

            <div class="form-group">
              <label for="noMeja">No Meja :</label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>

            <button
              type="submit"
              class="btn btn-success mt-3"
              @click="checkout"
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

  // untuk menjumlahkan
  computed: {
    totalHarga() {
      return this.keranjangs.reduce((total, item) => {
        // return total + item.products.harga;
        return (
          total + (item.products?.harga || 0) * (item.jumlah_pemesanan || 0)
        );
      }, 0);
    },
  },
};
</script>

<style>
</style>