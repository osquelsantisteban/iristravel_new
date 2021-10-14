<template >
    <div class="w-full bg-white h-auto text-darkGray rounded-lg py-4
    md:w-1/4">        
        <button class="w-full flex flex-row justify-between items-center text-2xl px-3 pb-4"
        v-if="showAccordion"
        @click="isExpanded=!isExpanded">
            Admin Options
            <span v-show="isExpanded"><i class="fa fa-chevron-up"></i></span>
            <span v-show="!isExpanded"><i class="fa fa-chevron-down"></i></span>
        </button>
        <VueAccordion class="flex flex-col gap-y-3"
        :expanded="isExpanded">
            <button v-for="(item, index) in navbar" :key="index" 
                class="w-full flex gap-3 text-gray-700 items-center py-4 px-8
                hover:bg-indigo-200 hover:text-gray-700"
                :class="{'text-indigo-400': item.active}"            
                @click="activeItemNavbar(index)"
            >              
                <i class="fa" :class="'fa-'+item.icon"></i>                
                <span>{{ item.name }}</span>
            </button>
        </VueAccordion>            
    </div>
</template>
<script>
import '@ztrehagem/vue-accordion/dist/vue-accordion.css'
import VueAccordion from '@ztrehagem/vue-accordion'
export default {
    name: "Sidebar",
    components: {
        VueAccordion
    },
    data() {
        return { 
            isExpanded: true,  
            showAccordion: false,         
            navbar:[
                {
                    name: "User",
                    icon: 'user',
                    active: true,
                    keyword: "user",
                },
                {
                    name: "Pole",
                    icon: 'street-view',
                    active: false,
                    keyword: "pole",
                },
                {
                    name: "Hotel",
                    icon: 'building',
                    active: false,
                    keyword: "hotel",
                },
            ],            
        }
    },
    created() {
        //this.showAccordion = window.innerWidth <= 991;
    },
    methods: {
        activeItemNavbar(index){            
            this.navbar.map(e => {e.active = false})
            this.navbar[index].active = true            
            this.$router.push({ name: 'CrudKey', params: {CrudKey: this.navbar[index].keyword, } })
            this.$emit('setTitle', this.navbar[index].name, this.navbar[index].keyword)
        },
  
    },
}
</script>
<style >
    
</style>