<template>
  <header class="it-header-menu bg-white">
    <div v-if="!showNavMobile" class="grid grid-cols-3 pt-12 pb-4">
      <ul class="flex justify-center items-start">
        <li>Menú</li>
        <li>
          <router-link :to="{name: 'Contact'}">Contáctanos</router-link>
        </li>
      </ul>
      <figure>
        <router-link :to="'/'">
          <img src="https://archive.org/download/logo-blue/logo-blue.png" class="w-3/5 m-auto" alt="logo" />
          <!-- <img src="@/assets/img/logo-blue.png" class="w-3/5 m-auto" alt="logo" /> -->
        </router-link>
      </figure>
      <ul class="flex justify-center items-start">
        <li>quienes somos</li>
        <li>iniciar sesión</li>
      </ul>
    </div>
    <!-- Mobile navbar -->
    <div
      v-if="showNavMobile"
      class="relative flex flex-row justify-around p-3 text-4xl"
    >
      <button @click="showMobileMenu">
        <span v-show="!showMenu"><i class="fas fa-bars"></i></span>
        <span v-show="showMenu"><i class="fas fa-times"></i></span>
      </button>
      <figure class="self-center">
        <img
          src="@/assets/img/logo-blue.png"
          class="w-2/5 ml-auto"
          alt="logo"
        />
      </figure>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",  
  data() {
    return {
      showMenu: false,
      showNavMobile: false,
    };
  },
  created() {
    this.handleMobileView();
  },
  methods: {
    handleMobileView() {
      this.showNavMobile = window.innerWidth <= 991;
    },
    showMobileMenu() {
      this.showMenu = !this.showMenu;
      this.$emit("handleMobileMenu", this.showMenu);
    },    
  },
};
</script>
<style scoped>
ul li {
  font-size: 14px;
  text-transform: uppercase;
  color: var(--blue);
  border: 1px solid var(--blue);
  border-radius: 20px;
  padding: 2px 10px;
  margin: 5px;
  font-weight: 700;
  cursor: pointer;
}        
ul li:hover {
  color: var(--orange);
  border: 1px solid var(--orange);
}
</style>
