import Vue from 'vue'
import axios from 'axios'
import '../assets/css/reset.css'
import "lib-flexible/flexible.js"
import Item from '../components/Item.vue'
import VueScroller from 'vue-scroller'

import { Swipe, SwipeItem } from 'vant';
import { IndexBar, IndexAnchor,Cell } from 'vant';
import { Tab, Tabs } from 'vant';
import { List } from 'vant';

Vue.component('Item',Item)
Vue.prototype.axios = axios;
Vue.use(IndexBar).use(IndexAnchor).use(Cell);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tab).use(Tabs);
Vue.use(VueScroller);
Vue.use(List);
export default Vue