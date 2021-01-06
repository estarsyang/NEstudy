<template>
  <div class="box-wrap">
    <div class="box" ref="box"></div>
    <div class="handle-btn">
      <button @click="goDirect('up')">上</button>
      <button @click="goDirect('down')">下</button>
      <button @click="goDirect('left')">左</button>
      <button @click="goDirect('right')">右</button>
      <button @click="goAhead" :disabled="movelen === nowState">前进</button>
      <button @click="back" :disabled="nowState === 0">后退</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "moveDiv",
  data() {
    return {
      distance: 300,
      moveList: [],
      nowState: 0,
    };
  },
  computed: {
    movelen() {
      return this.moveList.length - 1;
    },
  },
  methods: {
    goDirect(direction) {
      this.mementoPos(direction, this.distance);
    },
    mementoPos(direction, distance) {
      const currentTop = this.$refs.box.style.top.replace("px", "") - 0;
      const currentLeft = this.$refs.box.style.left.replace("px", "") - 0;
      const directionMapDistance = {
        // 计算移动的距离
        left: currentLeft - distance,
        right: currentLeft + distance,
        up: currentTop - distance,
        down: currentTop + distance,
      };
      const directionMap = {
        // 计算移动的方向
        left: "left",
        right: "left",
        up: "top",
        down: "top",
      };
      switch (directionMap[direction]) {
        case "left":
          this.moveList.push({
            left: `${directionMapDistance[direction]}px`,
            top: `${currentTop}px`,
          });
          break;
        case "top":
          this.moveList.push({
            left: `${currentLeft}px`,
            top: `${directionMapDistance[direction]}px`,
          });
          break;
        default:
      }
      this.nowState = this.moveList.length - 1;
      this.move();
    },
    move() {
      const { left, top } = this.moveList[this.nowState];
      this.$refs.box.style.left = left;
      this.$refs.box.style.top = top;
    },
    goAhead() {
      if (this.nowState === this.movelen) {
        return;
      }
      this.nowState++;
      this.move();
    },
    back() {
      if (this.nowState === 0) {
        return;
      }
      this.nowState--;
      this.move();
    },
    init() {
      const currentTop = this.$refs.box.style.top.replace("px", "") - 0;
      const currentLeft = this.$refs.box.style.left.replace("px", "") - 0;
      this.moveList.push({
        left: `${currentLeft}px`,
        top: `${currentTop}px`,
      });
      this.nowState = 0;
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="scss" scoped>
  .box-wrap {
    position: relative;
    height: 100%;
    width: 100%;
    .box {
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      height: 50px;
      background: #f00;
      transition: left 0.5s, top 0.5s;
    }
    .handle-btn {
      background: #fff;
      position: absolute;
      bottom: 0;
      left: 50%;
      button {
        margin: 10px;
      }
    }
  }
</style>