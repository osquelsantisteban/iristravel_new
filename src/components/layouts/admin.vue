<template>
  <div id="app" class="relative">
    <navigation-mobile v-show="showMobileMenu"></navigation-mobile>
    <main
      class="flex flex-col h-full min-h-screen rounded-t-2xl sm:rounded-t-0"
      :class="{ 'menu-mobile-open': showMobileMenu }"
    >
      <Header v-on:handleMobileMenu="showMobile"></Header>
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NavigationMobile from "@/components/NavigationMobile.vue";

export default {
  components: {
    Header,
    Footer,
    NavigationMobile,
  },
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMobile(show) {
      this.showMobileMenu = show;
    },
  },
};
</script>

<style>
:root {
  --orange: #E4A91D;
  --blue: #232E6E;
  --dark-blue: #1D1A39;
  --variable: #4640F8;
  --light-gray: #c4c4c4;
  --dark-gray: #4b4b4b;
  --hovershadow: 0px 0px inherit inherit;
}
  
@font-face {
   font-family: 'Clarissa';
   src: url(assets/fonts/Clarissa.ttf) format("truetype");
}

@font-face {
   font-family: 'DINPro';
   src: url(assets/fonts/DINPro.ttf) format("truetype");
}
@font-face {
   font-family: 'DINPro-Bold';
   src: url(assets/fonts/DINPro-Bold.ttf) format("truetype");
}
@font-face {
   font-family: 'DINPro-Medium';
   src: url(assets/fonts/DINPro-Medium.ttf) format("truetype");
}

#app {
  font-family: DINPro, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #467ADE;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.menu-mobile-open {
    transform: translateX(300px);
    transition: 1s transform cubic-bezier(.02,.13,0,.99);
}
</style>
