<template>
  <div class="content">
    <router-link :to="'/detail/'+data.id" tag="div">
      <div class="item">
        <div>
          <img :src="data.images.large" alt />
        </div>
        <div>
          <p class="title">{{data.title}}</p>
          <div class="name">
            主演:
            <span class="name" v-for="item of data.casts" :key="item.id">{{item.name}}</span>
          </div>
          <P class="name">美国|{{data.durations[0]}}</P>
        </div>
        <p class="ticket">购票</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style  scoped>

.item {
  padding: 15px;
  display: flex;
  position: relative;
  border-bottom: 1px solid #ebebeb;
}
img {
  width: 66px;
  height: 95px;
  margin-right: 10px;
}
.title {
  padding-top: 5px;
  color: #191a1b;
  font-size: 16px;
  margin-bottom: 25px;
}
.name {
  font-size: 13px;
  margin-top: 8px;
  color: #797d82;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ticket {
  width: 50px;
  height: 25px;
  position: absolute;
  border: 1px solid #ff5f16;
  top: 40px;
  right: 20px;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  border-radius: 4px;
}
</style>