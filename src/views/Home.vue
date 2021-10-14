<template>
  <div>
    <section class="bg-white text-white">
      <figure>
        <img src="@/assets/img/home-wave-top.png" alt="" />
      </figure>

      <div class="home-poles-list">
        <h2 class="text-4xl py-6 
        md:text-6xl
        lg:text-4xl">- Destinos -</h2>

        <div class="pl-10 py-4 flex flex-col justify-center gap-4
            sm:flex-row
            xs:pl-0"
        >
          <div class="flex flex-row justify-center gap-6 sm:flex-col"
            v-for="(item, index) in poles"
            :key="index"
          >
            <figure class="flex relative w-70x100
                sm:m-auto sm:w-100x20
                md:w-100x50
                lg:w-100x70
                xl:w-100x90"
            >
              <img class="border-4 border-white rounded-4xl shadow-h-blue-lg
                  sm:rounded-75
                  hover:shadow-h-hover-blue-lg"
                :src="item.img"
                alt="polo1"
              />
              <figcaption class="absolute top-0 left-0 h-full w-full border-4 border-white rounded-4xl leading-10 pt-6
                  xs:pt-12 xs:leading-none
                  sm:rounded-75 sm:pt-6 sm:text-6xl
                  lg:text-10xl"
              >
                {{ item.name }}
              </figcaption>
            </figure>
            <button class="uppercase font-DIN-Bold shadow-h-blue-md self-center bg-orange text-white rounded-75 px-4 py-1
                hover:shadow-h-hover-blue-md hover:bg-white hover:text-orange
                md:text-2xl md:px-16"
              @click="goSinglePole(item.keyword)"
            >
              descubre
            </button>
          </div>
        </div>
      </div>

      <figure>
        <img src="@/assets/img/home-wave-bottom.png" alt="" />
      </figure>
    </section>

    <!-- offerts -->
    <section class="bg-white py-20 px-3 sm:px-10">
      <h2 class="text-3xl py-6 text-darkBlue 
      md:text-6xl
      lg:text-4xl">- Destinos -</h2>
    
      <div
        class="
          flex flex-col
          justify-center
          flex-wrap
          gap-6
          px-4
          sm:flex-row sm:px-10
        "
      >
        <div class="max-w-xs" v-for="(item, index) in offerts" :key="index">
          <figure class="pb-3">
            <img class="rounded-t-2xl" :src="item.img" :alt="item.pole" />
          </figure>
          <div
            class="border-dashed border-2 rounded-b-2xl border-blue px-5 py-3"
          >
            <h3 class="text-4xl text-blue uppercase font-black font-DIN-Medium">
              {{ item.pole }}
            </h3>
            <span class="font-Clarissa text-blue text-4xl">{{
              item.country
            }}</span>

            <span
              class="
                price
                block
                font-DIN-Bold
                text-orange text-5xl
                leading-3
                font-bold
                pt-4
              "
              >${{ item.price }}</span
            >
            <p class="text-blue bg-blueGray py-3 pt-6 px-4">
              {{ item.description }}
            </p>

            <small>{{ item.info }}</small>
          </div>
          <button class="btn-booking font-DIN-Bold w-full text-2xl my-5">
            reservar
          </button>
        </div>
      </div>
    </section>

    <!--about us  -->
    <section class="about text-white relative pb-20">
      <img class="relative z-10" src="@/assets/img/home-white-top.png" alt="" />
      <div class="container w-100x50 relative md:w-100x90 lg:w-70x100">
        <h2 class="uppercase text-xl py-6 text-white sm:text-2xl md:text-4xl">
          - bienvenido a iris travel -
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit quisque
          suscipit fermentum dui, senectus dapibus sem sollicitudin hendrerit.
          Urna orci magna velit eros mattis penatibus nascetur sociosqu interdum
          scelerisque, tristique ridiculus erat magnis quisque tempus primis
          gravida lacus, ultricies natoque luctus ante curae sem augue
          sollicitudin platea. Quis sed blandit netus aptent dapibus sociis
          nascetur dictumst nisl, imperdiet orci donec vehicula luctus tristique
          tortor accumsan, mattis ad hendrerit volutpat quisque diam faucibus
          rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit quisque
          suscipit fermentum dui, senectus dapibus sem sollicitudin hendrerit.
          Urna orci magna velit eros mattis penatibus nascetur sociosqu interdum
          scelerisque, tristique ridiculus erat magnis quisque tempus primis
          gravida lacus, ultricies natoque luctus ante curae sem augue
          sollicitudin platea. Quis sed blandit netus aptent dapibus sociis
          nascetur dictumst nisl, imperdiet orci donec vehicula luctus tristique
          tortor accumsan, mattis ad hendrerit volutpat quisque diam faucibus
          rutrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit quisque
          suscipit fermentum dui, senectus dapibus sem sollicitudin hendrerit.
          Urna orci magna velit eros mattis penatibus nascetur sociosqu interdum
          scelerisque, tristique ridiculus erat magnis quisque tempus primis
          gravida lacus, ultricies natoque luctus ante curae sem augue
          sollicitudin platea. Quis sed blandit netus aptent dapibus sociis
          nascetur dictumst nisl, imperdiet orci donec vehicula luctus tristique
          tortor accumsan, mattis ad hendrerit volutpat quisque diam faucibus
          rutrum.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      poles: [
        {
          img: require("@/assets/img/block1.png"),
          name: "Cuba",          
          keyword: "cuba",          
        },
        {
          img: require("@/assets/img/block2.png"),
          name: "Cancun",
          keyword: "cancun",          
        },
        {
          img: require("@/assets/img/block3.png"),
          name: "Punta Cana",
          keyword: "punta-cana",          
        },
      ],
      offerts: [
        {
          img: require("@/assets/img/block1_.png"),
          pole: "Cuba",
          country: "Cuba",
          price: "349.99",
          description:
            "Estadia de 4 noches en un hotel 5 estrellas con todo incluido *",
          info: "* El boleto de avion no esta incluido en el precio",
        },
        {
          img: require("@/assets/img/block2_.png"),
          pole: "PuntaCana",
          country: "Republica Dominicana",
          price: "349.99",
          description:
            "Estadia de 4 noches en un hotel 5 estrellas con todo incluido *",
          info: "* El boleto de avion no esta incluido en el precio",
        },
        {
          img: require("@/assets/img/block3_.png"),
          pole: "Viñales",
          country: "Cuba",
          price: "349.99",
          description:
            "Estadia de 4 noches en un hotel 5 estrellas con todo incluido *",
          info: "* El boleto de avion no esta incluido en el precio",
        },
        {
          img: require("@/assets/img/block2_.png"),
          pole: "Cancún",
          country: "Mexico",
          price: "349.99",
          description:
            "Estadia de 4 noches en un hotel 5 estrellas con todo incluido *",
          info: "* El boleto de avion no esta incluido en el precio",
        },
      ],      
    };
  },     
  methods: {
     goSinglePole(keyword) {        
        this.$router.push({
          name: 'SinglePole', 
          params: {keyword}
        })
     }
  }
};
</script>
<style scoped>
.home-poles-list {
   background: linear-gradient(360deg, rgba(32,38,88,1) 0%, rgba(9,9,121,1) 36%, rgba(36,54,131,1) 100%)
}
.home-poles-list figure figcaption {
  font-size: 3rem;
  font-family: Clarissa;
  background: rgba(0,0 ,0 ,0.6 );
}
.price {
    text-shadow: -2px 2px #232E6E;
}
.about {
   background: url('../assets/img/block1_.png');
}
.about:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
