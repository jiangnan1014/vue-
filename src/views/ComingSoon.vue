<template>
  <div >
      <Item v-for="item of movies" :key="item.id" :data="item" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      movies:[]
    }
  },
  mounted(){
    var url = 'https://douban.uieee.com/v2/movie/coming_soon'
    this.axios.get(url).then(res=>{
      this.movies = res.data.subjects
    })
  }
}
</script>

<style scoped>
</style>