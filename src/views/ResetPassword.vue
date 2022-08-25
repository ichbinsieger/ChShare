<template>
     <div class="flex flex-col md:flex-row w-full h-auto  md:h-screen  " >
    <div style="background-image: url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80');" class="h-96 md:h-screen overflow-hidden relative bg-cover bg-no-repeat md:w-1/2 w-full" >
          
          <div class="w-full overflow-hidden h-96  md:h-screen bg-green-800 absolute bg-opacity-40" >
                <div class=" text-white opacity-100 relative text-left top-32 left-5 md:top-60 md:left-36 ">
                    <h1><br><div class="c1"><div class="  text-3xl md:text-4xl type">Welcome To Ch<span class="text-blue-600" >Share</span> 👋</div></div> <br>

                     <div class="flex flex-col space-y-2 "  >
                             <div class="c2"><div class="type2 md:text-xl text-base ">Create 📰 </div></div>
                        <div class="c4"><div class="type4 md:text-xl  text-base ">Learn👨‍🚀</div></div>

                        <div class="c3"><div class="type3 md:text-xl  text-base">Share💜💚</div></div>
                     </div>
                        </h1>
          </div>
          </div>
    </div>
    <div class="Register  bg-gray-700 w-full md:w-1/2 h-screen" >
          <div class="p-10" >
              <div class="mt-5" >
                <h2 class="text-white md:text-xl text-lg font-semibold " >Reset password</h2>
                <p class="mt-5 font-semibold text-slate-500 opacity-50" > enter your mail to reset password </p>
              </div>

          </div>
          <div class="md:px-20 px-5 pt-10" >
            <form @submit.prevent="resetPassword" >
                    <div class="flex flex-col space-y-10" >
                      <input class=" px-5 py-4 border border-opacity-10 border-gray-100 rounded-md bg-transparent outline-none text-white text-opacity-40 placeholder-gray-100 placeholder-opacity-40" type="password" name="password" id="password" v-model="password" placeholder="********" >
                     <input @click="resetPass"   class="px-5 py-3  cursor-pointer text-white font-semibold bg-blue-700 rounded" type="submit"  value="reset">
                    </div>

                    
            </form>
          </div>
    </div>
  </div>
</template>

<script>
export default {
    setup(){
        // const resetPassword = ()=>{
            
        // }
    }
}
</script>

<style>

</style>