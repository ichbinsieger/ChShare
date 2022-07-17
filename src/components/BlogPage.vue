<template>
  <div class="bg-white space-y-2  p-2" >
        <div class=" flex space-x-5 w-full h-60  bg-gray-800 p-5 border border-opacity-30 border-slate-400 rounded " >
            <router-link to="#" class="w-2/5"> 
                <img class=" p-2 w-full h-full " :src="blog.blogImg" alt="">
            </router-link>
          <div class="w-3/5  " >
              <router-link to="#" class=" px-3 ">
                <h1 class="text-xl whitespace-normal text-left w-full  text-white " > {{ blog.title.charAt(0).toUpperCase() + blog.title.slice(1)  }} </h1>
                <div style="height:0.1rem" class="w-full  opacity-10 bg-white" ></div>
            </router-link> 
            <p class="text-right -mt-5 pr-5 text-blue-500 opacity-60 text-sm" > {{ blog.date }} </p>
            
                <p class=" py-2 break-all text-white text-left  " > 
                    {{ content }}
                </p>
            <div class=" flex justify-end pt-7" >
              <router-link to="#" class="border rounded p-2 focus:bg-white  focus:text-blue-600 text-white font-semibold "  > Go to blog  </router-link>
            </div>
          </div>
           
        </div>
        
  </div>
</template>

<script>
export default {
props:['blog'],
data(){
  return{
    content: this.blog.content.charAt(0).toUpperCase() + this.blog.content.substring(1, 60) + "..."
  }
}
}
</script>

<style>

</style>