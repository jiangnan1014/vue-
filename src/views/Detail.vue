<template >
  <div v-if="movies">
    <div class="container">
      <img class="return" src="../assets/images/se.png" alt @click="toggle" />
      <div class="nav-title" :style="{opacity:opacity}">{{movies.title}}</div>
      <div class="top">
        <div class="bg">
          <img :src="movies.images.large" alt />
        </div>
        <div class="top-title">
          <span>{{movies.title}}</span>
          <span class="score">{{movies.rating.average}}分</span>
          <p>{{movies.genres[0]}} {{movies.genres[1]}} {{movies.genres[2]}}</p>
          <p>{{movies.pubdate}}上映</p>
          <p>{{movies.countries[0]}}|{{movies.durations[0]}}</p>
            <p @click="handleClick" :class="{ expansion : active }">{{movies.summary}}</p>
        </div>
      </div>
      <div class="box">
        <h1>演职人员</h1>
        <div class="figure">
          <div class="wrap">
            <!-- <img class="user" :src="movies.directors[0].avatars.large" alt />
            <p class="user-title">{{movies.directors[0].name}}</p>-->
            <div class="box-item" v-for="item of movies.casts" :key="item.id">
              <img class="user" :src="item.avatars.medium" alt />
              <p class="user-title">{{item.name}}</p>
              <!-- <p class="user-name">江南</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      movies: "",
      opacity: 0,
      active: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
    var id = this.$route.params.id;
    var url = `https://douban-api.uieee.com/v2/movie/subject/${id}`;
    this.axios.get(url).then(res => {
      this.movies = res.data;
    });
  },
  methods: {
    toggle() {
      this.$router.back();
    },
    handle() {
      var height = document.documentElement.scrollTop;
      if (height > 0) {
        this.opacity = 1;
      } else {
        this.opacity = 0;
      }
    },
    handleClick() {
      this.active = !this.active;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handle);
  }
};
</script>

<style scoped>
.container {
  background: #ebebeb;
  height: 1000px;
  position: relative;
}
.return {
  widows: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 50%;
  background: #fff;
  position: fixed;
  top: 8px;
  left: 10px;
  opacity: 0.5;
  z-index: 30;
}
.nav-title {
  font-size: 17px;
  text-align: center;
  width: 10rem;
  line-height: 44px;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 20;
}
.top {
  background: #fff;
  margin-bottom: 20px;
}
.bg {
  width: 10rem;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.bg img {
  width: 100%;
}
.top-title {
  padding: 15px;
}
.top-title span {
  padding-top: 9px;
  color: #191a1b;
  font-size: 17px;
}
.top-title .score {
  float: right;
  color: #ffb232;
  font-size: 18px;
  font-style: italic;
}
.top-title p {
  font-size: 13px;
  margin-top: 10px;
  color: #797d82;
}
.box {
  background: #fff;
  padding: 15px;
}
.box h1 {
  font-size: 15px;
  margin-bottom: 10px;
}
.user {
  width: 85px;
  height: 85px;
  padding: 10px 0;
}
.user-title {
  font-size: 12px;
  color: #191a1b;
  width: 85px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-name {
  font-size: 10px;
  color: #797d82;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.figure {
  overflow-x: auto;
  overflow-y: hidden;
}
.figure::-webkit-scrollbar {
  display: none;
}
.wrap {
  display: grid;
  grid-template-columns: repeat(6, 85px);
  grid-column-gap: 10px;
}
.expansion {
  white-space: pre-line;
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>