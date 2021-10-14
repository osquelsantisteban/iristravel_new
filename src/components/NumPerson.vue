<template>
    <div class="flex">
        <span class="cursor-pointer pointer border rounded-4xl bg-darkBlue px-3 py-2 mx-2
        hover:bg-blue">
            <i class="fa fa-minus"></i>
        </span>

        <input :name="name" 
            type="text" 
            placeholder="Adults"
            v-model="value" 
            class="w-1/6 border rounded-4xl text-orange bg-darkBlue text-center px-6 py-2">
        
        <span class="cursor-pointer pointer border rounded-4xl bg-darkBlue px-3 py-2 mx-2
        hover:bg-blue">
            <i class="fa fa-plus"></i>
        </span>
    </div>
</template>
<script>
export default {
    name: 'NumPerson',
    props: {
        name: {
            require: true,
            default: 'numperson'
        },
        min: {
            require: false,
            default: 0
        }
    },
    data () {
        return {
            value: 0
        }
    }
}
</script>
<style scoped>
    
</style>