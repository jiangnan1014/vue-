<template>
  <div class="home">
    <div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img class="bg" src="../assets/images/1.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="bg" src="../assets/images/2.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
      <div class="top" :style="{opacity:opacity}"> <p @click="handleCity" class="top-city">{{this.$store.state.city}}∨</p><span><p class="top-title">电影</p></span></div>
    <router-link tag="div" to="/about">
      <p class="city">{{this.$store.state.city}}∨</p>
    </router-link>
    <div class="nav" :class="{navslide:isslide}">
      <router-link class="nav-title" to="/home/nowPlaying">正在热映</router-link>
      <router-link class="nav-title" to="/home/commitSoon">即将上映</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      active: 2,
      opacity:0,
      isslide:false
    
    };
  },
  mounted(){
     window.addEventListener("scroll",this.handle)
  },
  methods:{
    handle(){
      var height = document.documentElement.scrollTop

      if(height>210){
        this.opacity=1,
          this.isslide = true   
      }else{
        this.opacity = 0,
        this.isslide = false
      } 
    },
    handleCity(){
      this.$router.push('/about')
    }
  },
  destroyed(){
     window.removeEventListener("scroll",this.handle)
  }
  
};
</script>
<style  scoped>
.home {
  position: relative;
  width: 10rem;
  height: 0;
  
  
  /* padding-bottom: 31.25%; */
}
.top{
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #fff;
  /* text-align: center; */
  position: fixed;
  top: 0;
  z-index: 20;
}
.top-city{
  width: 40%;
  z-index: 30;
  font-size: 13px;
  margin-left: 13px;

}
.top span{
  width: 60%;
  overflow: hidden;
}
.top-title{
  font-size: 17px;
  float: left;

}
.bg {
  width: 10rem;
  height: 210px;
}
.city {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 30;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
.navslide{
  position: fixed;
  top: 44px;
    border-top: 1px solid #ebebeb;
}
.nav {
  width: 10rem;
  background: #fff;
  height: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  z-index: 20;
}
.nav-title {
  font-size: 14px;
  cursor: pointer;
  color: #333;
  padding: 18px 0;
  border-bottom: 2px solid transparent;
}
.router-link-active {
  color: red;
  border-bottom: 2px solid red;
}
</style>
