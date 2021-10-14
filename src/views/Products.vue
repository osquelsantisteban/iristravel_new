<template>
   <div>
      <section class="bg-white">
         <h2 class="text-3xl pt-6 text-blue 
         md:text-6xl
         lg:text-4xl">- {{product}} -</h2>
         <span class="font-Clarissa text-5xl">{{country}}</span>
         <div class="container flex flex-wrap justify-between gap-4 w-3/5 py-6">
            <button v-for="(item, index) in poles" :key="index"
            :class="{'btn-active': (index==0)}"
            class="text-2xl border-2 border-blue bg-white text-blue rounded-75 px-8
            hover:border-orange hover:bg-orange hover:text-white"
            @click="getPoleInfo(item.name)">{{item.name}}</button>
         </div>
      </section>
      <section class="bg-white text-white">
         <figure>
            <img src="@/assets/img/singlepole-top-blue.png" alt="" />
         </figure>

         <div class="bg-blue-180">
            <h2 class="text-3xl pt-6 text-white 
            md:text-6xl
            lg:text-4xl">- {{pole}} -</h2>
            <span class="font-Clarissa text-5xl">{{country}}</span>

            <!-- Listado de productos por polo -->
            <div class="product-list flex flex-col">
               <article class="flex flex-row"
               v-for="(item, index) in products" :key="index">
                  <figure class="w-2xl">
                     <img :src="item.img" alt="">
                  </figure>
                  <div>

                  </div>
               </article>
            </div>
         </div>
      </section>
   </div>
</template>
<script>
export default {
   name: 'Hotels',
   props: {
      country: {
         default: 'Cuba',
      },
      product: {
         default: 'Hoteles'
      }
   },
   data() {
      return {
         poles: [
            {name: 'Occidente de Cuba',},
            {name: 'La Habana',},
            {name: 'Varadero',},
            {name: 'Centro de Cuba',},
            {name: 'Cayo Santa Maria',},
            {name: 'Cayo Coco y Cayo Guillermo',},
            {name: 'Oriente de Cuba',},
         ],
         products: [
            {
               img: require("@/assets/img/block1.png"),
               name: "Iberostar Laguna Azul",          
               keyword: "iberostar-lagunaazul",          
               price_from: '59.99',
               star: '59.99',
               segment: "cuba",       
            }
         ],
         pole: ''
      }
   },
   created() {
      this.pole = this.poles[0].name
   },
   methods: {
      getPoleInfo(value) {
         this.pole = value
      }
   }
   
}
</script>
<style lang="">
   
</style>