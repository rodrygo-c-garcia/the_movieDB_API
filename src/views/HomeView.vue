<template>
  <div class="principal">
    <section>
      <v-card-title>
        <header class="container-header">
          <h1 class="title-cine">CINEMA</h1>
          <div class="container-search">
            <v-text-field class="search" v-model="search" append-icon="mdi-magnify" label="Buscar pelicula..."
              single-line hide-details></v-text-field>
          </div>
        </header>
      </v-card-title>
    </section>
    <About />
  </div>
</template>

<script setup>
import About from '@/views/AboutView.vue'

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Work+Sans:ital,wght@0,300;1,300&display=swap');

.principal {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 255, 0), rgba(20, 5, 104, 0.541)),
    url("@/img/cinema3_08.jpg");
  background-size: cover;
}

.container-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.title-cine {
  font-family: 'Poppins', sans-serif;
  text-decoration: dashed;
  text-shadow: 0 4px 4px #0a45c4;
}

.container-search {
  width: 40%;
  margin: 5px;
}

.search {
  background: rgba(246, 245, 255, 0.404);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 5px;
}
</style>