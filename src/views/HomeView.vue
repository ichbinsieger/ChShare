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
import blogs from '@/components/BlogPage.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,blogs,tags
  },
data(){
  return{
    blogs:[
       {
        title:'baddest',
        date: '06-12-2000',
        blogImg: 'https://i.insider.com/5f48003cdb1ed00029714573?width=1136&format=jpeg',
        content: 'there is a place clalled djehd  qjuqu wdqqw   jhhhh hdeeehhd jjjhh  hhjhhfhhhhhywe fjhhehhhhhehewjwjwjwjwjehqehqqshkqwjqdqhjhdhdhfhffhffhh'
      },
       {
        title:'badd',
        blogImg: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        date: '12-04-2200',
        content: 'there is a place clalled djehd  qjuqu wdqqw   jhhhh hdeeehhd jjjhh  hhjhhfhhhhhywe fjhhehhhhhehewjwjwjwjwjehqehqqshkqwjqdqhjhdhdhfhffhffhh'
      },
       {
        title:'baddest',
        date: '26-01-2100',
        content: 'there is a place clalled djehd  qjuqu wdqqw   jhhhh hdeeehhd jjjhh  hhjhhfhhhhhywe fjhhehhhhhehewjwjwjwjwjehqehqqshkqwjqdqhjhdhdhfhffhffhh'
      },
       {
        title:'baddest',
        date: '16-12-2020',
        content: 'there is a place clalled djehd  qjuqu wdqqw   jhhhh hdeeehhd jjjhh  hhjhhfhhhhhywe fjhhehhhhhehewjwjwjwjwjehqehqqshkqwjqdqhjhdhdhfhffhffhh'
      },
    ]
  }
}
}
</script>
