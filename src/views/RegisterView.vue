<template >
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
                <h2 class="text-white md:text-xl text-lg font-semibold " > Connect with people. Create, learn, share with everyone </h2>
                <p class="mt-5 font-semibold text-slate-500 opacity-50" > Create an account to get started today. </p>
              </div>

          </div>
          <div class="md:px-20 px-5 pt-10" >
            <form @submit.prevent="register" >
                    <div class="flex flex-col space-y-10" >
                      <input class=" px-5 py-4 border border-opacity-10 border-gray-100 rounded-md bg-transparent outline-none text-white text-opacity-40 placeholder-gray-100 placeholder-opacity-40"  type="text" name="fullname" id="fullname" placeholder="fullname" v-model="fullname" >
                      <input class=" px-5 py-4 border border-opacity-10 border-gray-100 rounded-md bg-transparent outline-none text-white text-opacity-40 placeholder-gray-100 placeholder-opacity-40" type="email" name="mail" id="mail" placeholder="Email" v-model="mail" >
                      <input class=" px-5 pt-4 border border-opacity-10 border-gray-100 rounded-md bg-transparent outline-none text-white text-opacity-40 placeholder-gray-100 placeholder-opacity-40" type="password" name="password" id="password" v-model="password" placeholder="********" >
                      <ul v-if="err" class="text-red-500 text-sm text-left -pt-3 pl-5 list-disc " >
                          <li>   {{errMessage.form }}  </li>
                          <li>   {{errMessage.password}}  </li>
                    
                       </ul>
                      
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
import {setDoc,doc } from 'firebase/firestore';
import router from '@/router';
import { getFirestore } from 'firebase/firestore/lite';




export default {
  setup(){
    const fullname = ref("");
    const mail = ref("");
    const password = ref("");
    const errMessage = ref({
       password:   " password must be Greater than 8",
       form : "please fill out the form correctly"

    });
    const err = ref(false);
    const userDetail = ref(null)
 
    const  register = async() => {
        if (fullname.value != "" && mail.value != "" && password.value.length >= 8
        ) {
            console.log("working");
            console.log(mail.value);
            
             
            const auth = getAuth();
           await createUserWithEmailAndPassword(auth, mail.value, password.value).then((data) => {
             // Signed in 
                 console.log(data);
                 userDetail.value = data
                 console.log(userDetail.value.user.uid);
                
                router.push({name: 'login'})
                
            }
            
            
             
            ).catch((error) => {
                    console.log(error);
                   
                  });
            
              const firestore = getFirestore();
              await setDoc(doc(firestore, "users", userDetail.value.user.uid), {
                  name: fullname.value,
                 mail: mail.value,
 
               });
                 
  
    
        }
        else{
           
          err.value = true
          console.log(err.value);
       
          //  console.log(password.value.length);
           console.log('mwebt');
        }
      
    }
    
   
 

    
    return{
      register,mail,password,fullname,errMessage,err
    }
   
  },
   methods:{
          logo(){
            console.log("this is ehfhf");
          }
  }

 
}
</script>

<style >
 

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
