<template>
  <div>
    <h1> Log in </h1>
    <div class="flex space-x-3 w-full " >
      <img src="../assets/bubble.jpg" class=" " alt="">
      <div class="w-1/2 h-screen flex justify-center items-center border border-gray-100 rounded-sm m-5 " >
        <form >
          <div class="flex flex-col items-start space-y-2" >
             <label for="mail">Email</label>
          <input class="border boder-green-100 rounded-sm" type="email" name="mail" id="mail">
          </div>
          <div class="flex flex-col items-start space-y-2" >
             <label for="password">Password</label>
          <input class="border boder-green-100 rounded-sm" type="password" name="password" id="password">
          </div>
          <button @click="login"  class="bg-gray-500 border-0 rounded-sm p-2 text-white " > Log in </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
 import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from '@/router';
export default {
  setup(){
    const mail = ref('');
    const password = ref('');
    const login = () => {
       

      const auth = getAuth();
      signInWithEmailAndPassword(auth, mail.value, password.value)
        .then((userCredential) => {
          // Signed in 
          router.push('/')
          const user = userCredential.user;
          return{
            user
          }
          // ...
        })
        .catch((error) => {
        console.log(error);
        });
    }
    return{
      mail,password,login
    }
  }

}
</script>

<style>

</style>