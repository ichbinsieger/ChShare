<template>
  <div class=" bg-white w-full " >
    <Nav class=" bg-gray-700" />
    <div  class=" w-full flex  justify-center items-center" >
        <div class=" w-3/4 border-r border-l border-gray-400 border-opacity-10 " >
                <div class="   w-full p-5 " >
                    <p class="text-center text-black py-5  text-3xl " > In the Beginging all we did was fuck </p>
                 <div class=" w-full  flex justify-center items-center">
                       <img  class=" w-2/3 h-72  rounded border-yellow-300 " src="../assets/bubble.jpg" alt="" srcset="">
                  
                 </div>
                  <div class=" flex space-x-2 bg-red-400   text-xs text-right  text-black" >
                     <p> by <span class=" " >Ogun</span> </p>
                    <p class="text-xs " > 20/13/200 </p>
                   </div>
                </div>

        </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/NavBar.vue'
export default {
components:{
    Nav
}
}
</script>

<style>

</style>