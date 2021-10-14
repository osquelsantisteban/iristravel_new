<template>
  <div class="bg-white">
    <section class="bg-white text-white">
         <figure>
            <img src="@/assets/img/singlepole-top-blue.png" alt="" />
         </figure>

         <div class="bg-blue-180 pb-12">
            <h2 class="text-3xl pt-6 text-white 
            md:text-6xl
            lg:text-4xl">- Sol melia Perla Blanca -</h2>
            <span class="font-Clarissa text-5xl">Cuba</span>


            <div class="container border-dashed border-2 rounded border-white p-5">
              <form class="flex gap-x-3 gap-y-6 flex-wrap shadow-round bg-darkBlue text-xl px-10 py-8"
              @submit="formSubmit">
                <date-range-picker                    
                    ref="picker"
                    :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd' }"
                    v-model="dateRange"
                    :time-picker="false"
                    :autoApply="true"
                    class="dateRangePicker"
                >
                  <template #input="picker">
                      <span class="text-orange bg-darkBlue text-left">
                        {{ picker.startDate | dateFormat }} / {{ picker.endDate | dateFormat }}
                      </span>
                  </template>                
                </date-range-picker>
                
                <num-person :name="adults"></num-person>

                <input name="children" 
                type="number" 
                placeholder="Children"
                v-model="children" 
                min="0"
                class="w-1/6 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2">

                <input name="infants" 
                type="number" 
                placeholder="Infants"
                v-model="infants" 
                min="0"
                class="w-1/6 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2">

                <input name="name" 
                type="text" 
                placeholder="Full Name" 
                v-model="name" 
                min="0" 
                class="w-1/2 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2">

                <input name="phone" 
                type="text" 
                placeholder="Phone" 
                v-model="phone" 
                min="0" 
                class="w-1/5 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2">

                <input name="email" 
                type="email" 
                placeholder="Email" 
                v-model="email" 
                min="0" 
                class="w-1/4 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2">

                <textarea name="comentarios" id="" cols="100" rows="5" 
                placeholder="Comments"
                class="border rounded-4xl text-orange bg-darkBlue text-left px-8 py-6"
                ></textarea>

                <div class="w-full flex gap-3" @click="activeTerm = !activeTerm">  
                  <span class="cursor-pointer border rounded-4xl text-orange bg-darkBlue px-2 py-1"
                  :class="(activeTerm) ? 'text-orange' : 'text-darkBlue'">
                    <i class="fas fa-check"></i>
                  </span>
                  <label class="text-orange self-center" for="term">Term and condition</label>
                </div>

                <button class="uppercase bg-orange text-white text-xl rounded-4xl px-12 py-1">send request</button>
              </form>
            </div>
         </div>
         
    </section>


    <!-- Formulario -->
    <!-- <div class="py-20 px-5 md:p-20 bg-blue_iristravel">
      <div class="border-dashed border-2 border-white">
        <div class="flex-1 sm:max-w-full bg-darkblue_iristravel p-5  m-5 shadow-2xl">

          <div class="grid grid-cols-1 md:grid-cols-3 gap-y-6">

              <div class="mb-4">              
                  <input type="text" class="p-1 w-4/5 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm placeholder-yellow-500 bg-darkblue_iristravel appearance-none border-solid border-2" placeholder="Check-In Check-Out"/>
              </div>

              <div class="mb-4">              
                  <input type="text" class="p-1 w-4/5 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm placeholder-yellow-500 bg-darkblue_iristravel appearance-none border-solid border-2" placeholder="Cantidad de personas"/>
              </div>

              <div class="mb-4">              
                  <input type="text" class="p-1 w-4/5 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm placeholder-yellow-500 bg-darkblue_iristravel appearance-none border-solid border-2" placeholder="Nombre y Apellidos"/>
              </div>
              <div class="mb-4">              
                  <input type="text" class="p-1 w-4/5 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm placeholder-yellow-500 bg-darkblue_iristravel appearance-none border-solid border-2" placeholder="teléfono"/>                    
              </div>
              
              <div class="mb-4">              
                  <input type="text" class="p-1 w-4/5 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm placeholder-yellow-500 bg-darkblue_iristravel appearance-none border-solid border-2" placeholder="Correo electrónico"/>
              </div>
              
          </div>
              <div class="mb-0 p-10">
                <textarea name="message" class="w-full h-40 focus:border-indigo-300 placeholder-yellow-500 border-gray-200 bg-darkblue_iristravel appearance-none border-solid border-2" placeholder="Comentario">              
                </textarea>
              </div>

             <div class="flex flex-col items-start pl-10">
              <div class="flex flex-row mb-5 gap-3"> 
                <input type="checkbox" name="" value="" /><p class="flex-1 text-yellow-600 leading-tight">Acepto los términos y
              condiciones</p>
              </div>
              
              <div class="">
                
                  <a class="
                      flex-1 
                      bg-yellow-600
                      uppercase
                      items-center
                      h-1
                      w-2
                      p-2
                      md:px-6 md:py-2
                      rounded-full
                      shadow-md
                      text-white text-sm
                      md:text-base
                    "
                    href=""
                    ><strong>Reservar</strong></a
                  >
                
              </div>
             </div> 
                        
        </div>        
      </div>
    </div> -->
  </div>
</template>
<script>
import NumPerson from '@/components/NumPerson'
import DateRangePicker from 'vue2-daterange-picker'
import moment from 'moment'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: "Contacto",
  components: {
    DateRangePicker,
    NumPerson
  },
  filters: {
    dateFormat(value) {
      if (value) {
        return moment(String(value)).format('DD MMM YYYY')
      }
    }
  },
  data() {
    return {
      activeTerm: false,
      adults: null,
      children: null,
      infants: null,
      name: '',
      phone: '',
      email: '',
      dateRange: {
        startDate: moment().add(3, 'days').format('DD MMM YYYY'),
        endDate: moment().add(4, 'days').format('DD MMM YYYY')
      }
    }
  },
  methods: {
    formSubmit() {
      console.log('Envio correo de peticion')
    },    
  }
};
</script>
