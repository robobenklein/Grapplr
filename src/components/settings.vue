<template>
  <div id="app-overlay">
    <div id="clearexit" @click="exitclick">
    </div>
    <transition :name="transitionSlideType" ><!--:mode="transitionSlideOrder"-->
      <router-view v-on:grapplr_control="child_data" />
      <!-- <div class="menuR" id="settings">
        <div class="menu_title"><img src="/static/img/grapplr_logo_black_text.png"></div>
        <button class="optionR" value="grapplr_settings">SETTINGS</button>
        <button class="optionR" value="">GRAPPLED SITES</button>
        <button class="optionR" value="chrome_settings">CHROME</button>
        <button class="optionR" style="margin-bottom: 1px;">HELP</button>
      </div> -->
    </transition>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      transitionSlideType: 'slide-right',
      // transitionSlideOrder: 'in'
    }
  },
  methods: {
    exitclick() {
      console.log("exiting settings menu");
      this.$emit('grapplr_control', 'overlay-exit');
    },
    child_data(data) {
      console.log(data);
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionSlideType = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      // this.transitionSlideOrder = toDepth < fromDepth ? 'in-out' : 'in'
      console.log("Transition " + this.transitionSlideType)
    }
  }
}

console.log("yes");

</script>

<style>
#clearexit {
  float: left;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
}
/* .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 2s ease;
} */
/* .menuR.slide-right-leave-active, */
.menuR.slide-left-leave-to,
/* .menuR.slide-right-enter, */
/* .menuR.slide-right-leave-to */
.menuR.slide-right-enter
{
  /* transform: translateX(300px); */
  transform: translateZ(100);
  right: -310px;
}
.menuR {
    float: right;
    position: absolute;
    padding: 0px;
    margin: 10px;
    color: #000;
    width: 300px;
    height: 100%;
    background-color: #fff;
    transition: 1s all cubic-bezier(.03,.58,.57,.58);
    transition: 0.5s all ease;
    -webkit-transform: translateZ(0);
    position: absolute;
    top: -10px;
    right: -10px;
}
.menu_title {
    font-family: 'roboto' sans-serif;
    background-color: #efefef;
    font-weight: bold;
    text-transform: uppercase;
    padding: 30px;
    color: #000;
    text-align: center;
    color: #000;
    overflow: hidden;
}
.menuR button {
    margin-top: 1px;
    width: 298px;
    text-align: left;
    display: block;
}
.menuR a {
  text-decoration: none;
}
.optionR {
    font-family: 'roboto' sans-serif;
    margin: 0;
    padding: 20px;
    color: #000;
    transition: all .1s ease;
    margin: 1px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: bold;
}
button {
    background: none;
    border: none;
    display: none;
}
.optionR:hover {
    background-color: #333;
    color: #fff;
}
</style>
