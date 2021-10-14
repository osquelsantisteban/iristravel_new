<template>
  <section class="container flex flex-col gap-6 py-6 px-2
  md:flex-row">
    <sidebar v-on:setTitle="getTitle"></sidebar>

    <div class="w-full bg-white text-left rounded-lg py-4 p-8
    md:w-3/4">
      <h2 class="text-2xl border-b-2 mb-4">{{title}}</h2>
      <crud-pole v-if="this.menuList['pole']" />  
      <crud-user v-if="this.menuList['user']" />  
      <crud-hotel v-if="this.menuList['hotel']" />  
    </div>

  </section>
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar.vue';
import CrudPole from "./CrudPole.vue";
import CrudUser from "./CrudUser.vue";
import CrudHotel from "./CrudHotel.vue";

export default {
  name: "Admin",
  components: {
    Sidebar,
    CrudPole,
    CrudUser,
    CrudHotel,
  },
  data() {
    return {
      title: 'User',
      menuList: {
        user: true,
        pole: false,
        hotel: false,
      }
    }
  },
  created() {
    const param = (this.$route.params.CrudKey == undefined) ? 'user' : this.$route.params.CrudKey
    this.updActiveMenu(param)    
  },
  computed: {
    
  },
  methods: {
    getTitle(text, view) {
      this.title = text
      this.updActiveMenu(view)
    },
    updActiveMenu(view) {
      const keys  = Object.keys(this.menuList)
      keys.map(item => {
       this.menuList[item] = false
      })
       this.menuList[view] = true
    },
  },
  
};
</script>

<style></style>
