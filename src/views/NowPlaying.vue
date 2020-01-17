<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="offset"
      :immediate-check="isChecked"
    >
      <Item v-for="item of movies" :key="item.id" :data="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      start:5,
      loading: false,
      finished: false,
      offset: 0,
      isChecked: false,
      total:""
    };
  },
  mounted() {
    var url = "https://douban-api.uieee.com/v2/movie/in_theaters?limit=5";
    this.axios.get(url).then(res => {
      this.movies = res.data.subjects;
      this.total = res.data.total
    });
  },
  methods:{
    onLoad(){
      var url = `https://douban-api.uieee.com/v2/movie/in_theaters?start=${this.start}`;
    this.axios.get(url).then(res => {
      this.movies = res.data.subjects;
      this.start+=5;
      this.loading = false
       });
       if(this.movies.length>=this.total){
         this.finished = true
       }
    }
  }
};
</script>

<style scoped>
</style>