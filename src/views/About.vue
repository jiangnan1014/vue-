<template>
  <div class="container">
    <div class="top">
      <span>
        <img @click="handleReturn" src="../assets/images/cuo.png" alt />
      </span>
      <p>当前的城市</p>
      <span></span>
    </div>
    <div class="search">
      <img src="../assets/images/s.png" alt />
      <input @click="handleInput" type="text" placeholder="输入城市名或拼音" />
      <div v-if="isSearch" @click="handleCall" class="call">取消</div>
    </div>
    <div class="top-city">
      <p>GPS定位你所在的城市</p>
      <router-link to="/" tag="div">
        <span class="city">{{this.$store.state.city}}</span>
      </router-link>
      <p>热门城市</p>
      <router-link to="/" tag="div">
        <span
          @click="handleClick(item.name)"
          class="city"
          v-for="item of data.hotCities"
          :key="item.id"
        >{{item.name}}</span>
      </router-link>
    </div>
    <van-index-bar :index-list="indexList">
      <div v-for="(val,index) of data.cities" :key="val.id">
        <van-index-anchor :index="index" />
        <router-link to="/" tag="div">
          <van-cell
            v-for="value of data.cities[index]"
            :key="value.id"
            @click="handleClick(value.name)"
            :title="value.name"
          />
        </router-link>
      </div>
    </van-index-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      indexList: [],
      isSearch: false
    };
  },
  mounted() {
    this.axios.get("/city").then(res => {
      this.data = res.data.data;
      for (let i in res.data.data.cities) {
        this.indexList.push(i);
      }
    });
  },
  methods: {
    handleClick(city) {
      console.log(city);
      this.$store.dispatch("changeCity", city);
    },
    handleReturn() {
      this.$router.back();
    },
    handleCall() {
      this.isSearch = false;
    },
    handleInput() {
      this.isSearch = true;
    }
  }
};
</script>
<style  scoped>
.container {
  width: 10rem;
  background: #ebebeb;
}
.top-city {
  background: #fff;
  padding: 20px;
}
.city {
  height: 30px;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 7.5px;
  font-size: 14px;
  color: #191a1b;
  padding: 5px 30px;
}
.top {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 44px;
  background: #fff;
}
.top span {
  width: 15%;
  line-height: 100%;
  margin-left: 10px;
}

.top img {
  width: 19px;
  height: 19px;
}
.top p {
  font-size: 17px;
  color: #191a1b;
}
.van-index-bar {
  border-top: 1px solid #ebebeb;
}
.van-index-anchor {
  background: #ebebeb;
}
.search {
  background: #fff;
  border-radius: 3px;
  margin: 8px 13px;
}
.search input {
  width: 250px;
  margin: 5px 0px;
  border: 1px solid #fff;
  margin-left: 40px;
}
.search img {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 58px;
  left: 30px;
}
.call {
  width: 50px;
  font-size: 14px;
  line-height: 30px;
  position: absolute;
  top: 50px;
  right: 13px;
  background: #ebebeb;
  text-align: center;
}
</style>