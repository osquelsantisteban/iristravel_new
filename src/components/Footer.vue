<template>
  <footer class="grid text-white shadow-top mt-auto py-10">
    <figure class="self-center col-start-2 py-3 sm:py-0">
      <img
        src="@/assets/img/logo-white.png"
        class="w-2/5 m-auto sm:m-0"
        alt="logo"
      />
    </figure>
    <ul class="flex flex-col gap-y-1 justify-center text-sm py-3 list-disc col-start-2
        sm:py-0 sm:items-start sm:col-auto">
      <li>Quienes Somos</li>
      <li>Términos y políticas</li>
      <li>Política de privacidad</li>
      <li>Términos de uso</li>
      <li>Accesibilidad</li>
    </ul>
    <div class="social-media col-start-2 sm:col-auto py-3 sm:py-0">
      <ul class="flex flex-row justify-center sm:justify-end gap-2 py-2">
        <li><i class="fab fa-instagram"></i></li>
        <li><i class="fab fa-facebook-f"></i></li>
        <li><i class="fab fa-tiktok"></i></li>
        <li><i class="fab fa-whatsapp"></i></li>
      </ul>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <p>
        Ab laboriosam iste impedit, maxime sunt itaque, aspernatur excepturi,
      </p>
      <p>
        delectus dolores doloremque accusantium vel quibusdam. Laborum, illo
        maiores sint quam eaque assumenda.
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
footer {
   background-color: var(--dark-blue);
   grid-template-columns: 15% auto 15%;
   grid-template-rows: auto auto auto;
}
footer .social-media p {
  font-size: 14px;
}
footer .social-media li {         
  background-color: white;
  border-radius: 100%;
  padding: 3px 10px;
  color: var(--blue);
}
@media screen and (min-width: 640px) {
   footer {
      grid-template-columns: 15% 20% 15% 35% 15%;      
   }
   footer .social-media p{
      text-align: right;
   }
}
</style>
