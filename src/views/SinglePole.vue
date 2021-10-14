<template>
   <div>
      <section class="bg-white text-white">
         <figure>
         <img src="@/assets/img/singlepole-top-blue.png" alt="" />
         </figure>

         <div class="bg-blue-180">
            <h2 class="text-xl py-6 text-white             
            md:text-6xl
            lg:text-4xl">- Destinos -</h2>
            <div class="container flex flex-wrap">
               <figure class="w-1/4 cursor-pointer" 
               v-for="(item, index) in icons" :key="index"
               @click="goProduct('hotel')">
                  <img :src="item" alt="Icon">
               </figure>
            </div>
         </div>
      </section>

      <section class="bg-foto">
         <figure>
            <img src="@/assets/img/singlepole-buttom-blue.png" alt="" />

            <!-- SLIDE -->          
            <h3 class="text-10xl text-white font-Clarissa">Cuba</h3>  

            <button class="btn-booking font-DIN-Bold text-2xl my-5">decubre</button>
         </figure>

      </section>
   </div>
</template>
<script>
export default {
   name: 'SinglePole',
   props: {
      polekey: {
         default: 'cuba'
      }
   },
   data() {
      return {
         icons: [
            require('@/assets/img/icons/Icon1.png'),
            require('@/assets/img/icons/Icon2.png'),
            require('@/assets/img/icons/Icon3.png'),
            require('@/assets/img/icons/Icon4.png'),
            require('@/assets/img/icons/Icon5.png'),
            require('@/assets/img/icons/Icon6.png'),
            require('@/assets/img/icons/Icon7.png'),
         ]
      }
   },
   methods: {
      goProduct(keyword) {
         this.$router.push({name: 'Products', params: {product: keyword, polekey: this.polekey}})
      }
   }
}
</script>
<style scoped>
.bg-foto {
   background-image: url('../assets/img/slide.png');
   background-repeat: no-repeat;
   background-size: 100%;
}
</style>