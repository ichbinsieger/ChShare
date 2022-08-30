<template>
  <div class="home bg-zinc-900">
     <Nav />
     <div class="px-10 w-3/5 flex justify-center">
          <h1 class=" text-9xl tracking-widest text-center border-opacity-30  text-white border-b border-gray-100">C<span>Share</span> </h1>
     </div>
    <div class="flex w-full" >
      <div class="w-3/5 pt-5 pl-20"> 
       <blogs  v-for="blog in blogs" :key="blog.title" :blog="blog" />
      </div>
      <div class="w-2/5" >
        <SideBlog />
        </div>

      
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/NavBar.vue'
import sideBlog from '@/components/sideBlog.vue'
import blogs from '@/components/BlogS.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,blogs,sideBlog 
  },
data(){
  return{
      blogs: this.$store.state.blogs
  }
}
}
</script>
