<template >
  <div class="flex w-full h-screen  " >
    <div style="background-image: url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80');" class=" overflow-hidden relative bg-cover bg-no-repeat w-1/2" >
          
          <div class="w-full overflow-hidden h-screen bg-green-800 absolute bg-opacity-40" >
                <div class=" text-white opacity-100 relative text-left top-60 left-36 ">
                    <h1><br><div class="c1"><div class=" text-4xl type">Welcome To Ch<span class="text-blue-600" >Share</span> 👋</div></div> <br>

                     <div class="flex flex-col space-y-2 "  >
                             <div class="c2"><div class="type2 text-xl  ">Create 📰 </div></div>
                        <div class="c4"><div class="type4 text-xl  ">Learn👨‍🚀</div></div>

                        <div class="c3"><div class="type3 text-xl ">Share💜💚</div></div>
                     </div>
                        </h1>
          </div>
          </div>
    </div>
    <div class="Register  bg-gray-700 w-1/2 h-screen" >
          <div class="p-10" >
              <div class="mt-5" >
                <h2 class="text-white text-xl font-semibold " > Connect with people. Create, learn, share with everyone </h2>
                <p class="mt-5 font-semibold text-slate-500 opacity-50" > Create an account to get started today. </p>
              </div>

          </div>
          <div class="px-20 pt-10" >
            <form @submit.prevent="register" >
                    <div class="flex flex-col space-y-10" >
                      <input class=" px-5 py-4 border border-opacity-10 border-gray-100 rounded-md bg-transparent outline-none text-white text-opacity-40 placeholder-gray-100 placeholder-opacity-40"  type="text" name="fullname" id="fullname" placeholder="fullname" v-model="fullname" >
                      <input class=" px-5 py-4 border border-opacity-10 border-gray-100 rounded-md bg-transparent outline-none text-white text-opacity-40 placeholder-gray-100 placeholder-opacity-40" type="email" name="mail" id="mail" placeholder="Email" v-model="mail" >
                      <input class=" px-5 py-4 border border-opacity-10 border-gray-100 rounded-md bg-transparent outline-none text-white text-opacity-40 placeholder-gray-100 placeholder-opacity-40" type="password" name="password" id="password" v-model="password" placeholder="********" >
                     <input @click="register"   class="px-5 py-3  cursor-pointer text-white font-semibold bg-blue-700 rounded" type="submit"  value="Register">
                    </div>

                    
            </form>
          </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from '@/router';

export default {
  setup(){
    const fullname = ref('')
    const mail = ref('')
    const password = ref('')
    const register = () => {
      console.log("working");
      console.log(mail.value);
      console.log(process.env.VUE_APP_firebase_key);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, mail.value, password.value).then((userCredential) => {
    // Signed in 
    let user = userCredential.user;
      
     
    console.log(user);
    router.push('/login')
    // ...
  })
  .catch((error) => {
    console.log(error);
  });
     
    }
    return{
      register,mail,password,fullname
    }
  }
}
</script>

<style scoped>
   body{
    background: navajowhite;
    background-size: cover;
    font-family: Play; 
  }
  a{
    color: mediumseagreen;
  }
  .c1{
    display: inline-block;
  }
  .c2{
    display: inline-block;
  }
  .c3{
    display: inline-block;
  }
  .c4{
    display: inline-block;
  }
  h1{
    margin-top: 1%;
  }
  h1 .type{
      
      overflow: hidden;
      border-right: .15em solid transparent;
      white-space: nowrap; 
      width: 0;
      animation: 
        welcome 1s steps(25, end) forwards;
  }
  h1 .type2{
      
      overflow: hidden;
      border-right: .15em solid orange;
      white-space: nowrap; 
      width: 0;
      animation: 
        typing 2s steps(25, end) forwards;
      animation-delay: 1s;
  }
  h1 .type3{
      
      overflow: hidden;
      border-right: .15em solid orange; 
      white-space: nowrap; 
      width: 0;
      animation: 
        typing 5s steps(20, end) forwards;
      animation-delay: 1s;
  }
  h1 .type4{
      
      overflow: hidden;
      border-right: .15em solid rgb(103, 103, 199); 
      white-space: nowrap; 
      width: 0;
      animation: 
        typing 4s steps(20, end) forwards;
      animation-delay: 1s;
  }
  @keyframes welcome {
    from { width: 0 }
    to { width: 100% }
    
  }
  @keyframes typing {
    from { width: 0 }
    to { width: 21% }
    80%{ font-size: 2rem; }
  }
  @keyframes blink {
    from { border-color: transparent }
    to { border-color: orange; }
  }
</style>