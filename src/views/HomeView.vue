<template>
  <div class="home bg-white">
     <Nav />
    <div class="flex w-full" >
      <div class="w-3/4 pt-5 pl-20"> 
       <blogs  v-for="blog in blogs" :key="blog.title" :blog="blog" />
      </div>
      <tags class="w-1/4 pr-10" />
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/NavBar.vue'
import tags from '@/components/TagS.vue'
import blogs from '@/components/BlogS.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,blogs,tags
  },
data(){
  return{
      blogs: this.$store.state.blogs
  }
}
}
</script>
