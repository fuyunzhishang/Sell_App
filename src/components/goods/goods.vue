<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="menu-item" :class="{'current':currentIndex == index}">
            <img width="57px" height="57px" :src="food.icon">
          </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmasript-6">
const ERR_OK = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectedFoods() {
      let foods = [];
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            food.push(food);
          }
        });
      });
      return foods;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        this.$nextTrick(() => {
          this._initScroll();
          this._calculateHeight();
        });
      }
    });
  },
  methods: {

  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
