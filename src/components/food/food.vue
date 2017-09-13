<template>
  <div class="food" v-show="showFlag" transition="move" ref="food"></div>
</template>

<script>
import BScroll from 'better-scroll';
import Vue from 'vue';
import {formatDate} from 'common/js/date';
import cartcontrol from 'components/cartcontrol/cartcontrol';
import ratingselect from 'components/ratingselect/ratingselect';
import split from 'components/split/split';

const ALL = 2;

export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    };
  },
  methods: {
    show() {
      this.showFlag = true;
      this.selectType = ALL;
      this.onlyContent = true;
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$els.food, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    hide() {
      this.showFlag = false;
    },
    addFirst(event) {
      if (!event._constructed) {
        return;
      }
      this.$dispatch('cart.add', event.target);
      Vue.set(this.food, 'count', 1);
    },
    needShow(type, text) {
      if (this.onlyContent && !text) {
        return false;
      }
      if (this.selectType === ALL) {
        return true;
      } else {
        return type === this.selectType;
      }
    }
  },
  events: {
    'ratingtype.select'(type)
  }
}
</script>
