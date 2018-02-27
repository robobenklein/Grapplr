<template>
<div id="grapplr">
  <div id="bg" class="bg"></div>
  <div id="bg-overlay" class="bg-overlay"></div>
  <div id="grapplr-main">
    <img src="/static/img/grapplr_logo_white_text_beta.png" />
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/settings">Grapplr Settings</router-link>
      </li>
    </ul>
  </div>
  <transition :name="transitionOverlayType" >
    <router-view v-on:grapplr_control="overlay_data" />
  </transition>
</div>
</template>

<script>
export default {
  name: 'Grapplr',
  data () {
    return {
      msg: 'Hello user!',
      transitionOverlayType: 'slide-right'
    }
  },
  methods: {
    overlay_data(data) {
      console.log("Got data from overlayer: " + data);
      if (data === 'overlay-exit') {
        this.$router.push('/');
      }
    }
  },
  watch: {
    '$route' (to, from) {
      // choose type of transistion for the app-overlay
      if (from.path.startsWith('/settings') || to.path.startsWith('/settings')) {
        // settings slides in from right
        this.transitionOverlayType = 'slideOutSettings'
      } else {
        this.transitionOverlayType = 'none';
      }
      // this.transitionSlideOrder = toDepth < fromDepth ? 'in-out' : 'in'
      console.log("Overlay Transition " + this.transitionOverlayType)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bg, #grapplr, #app-overlay, #bg-overlay {
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
#app-overlay.disable.passthrough {
  pointer-events: none;
}
#app-overlay {
  pointer-events: auto;
  transition: 0.5s all ease;
}
#app-overlay.slideOutSettings-enter,
#app-overlay.slideOutSettings-leave-active {
  transform: translateX(300px);
}
#bg {
  background-color: #444;
  z-index: -12;
}
#bg-overlay {
  z-index: -11;
}
#grapplr {
  z-index: 0;
}
#app-overlay {
  z-index: 10;
}

@keyframes fade {
    from {opacity: 0}
    to {opacity: 1}
}
@keyframes remind {
    from {opacity: 0; margin-top: -20px;}
    to {opacity: 1; margin-top: 2px;}
}
@keyframes play {
   100% { background-position: -5520px; }
}
@keyframes pop {
    from {top: -100%;} to {top: 10px;}
}
@font-face {
    font-family: Gull;
    src: url(/static/fonts/GullSans.ttf);
}
</style>
